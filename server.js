require('babel/register');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var methodOverride = require('method-override');
var session = require('express-session');
var flash = require('express-flash');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var passport = require('passport');

let morgan = require('morgan');


// Load environment variables from .env file
dotenv.load();

let Config = require('./config/Config');

// Controllers
var HomeController = require('./controllers/home');
var userController = require('./controllers/user');
var contactController = require('./controllers/contact');
var refreshController = require('./controllers/refresh');

// Passport OAuth strategies
require('./config/passport');

var app = express();

mongoose.connect(Config.mongoLocal);

mongoose.connection.on('error', ()=>{
    throw ('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
});

mongoose.connection.on('open', ()=>{
    console.log('MongoDB Connection Success');
});

var hbs = exphbs.create({
    defaultLayout: 'main',
    helpers: {
        ifeq: function (a, b, options) {
            if (a === b) {
                return options.fn(this);
            }
            return options.inverse(this);
        },
        toJSON: function (object) {
            return JSON.stringify(object);
        }
    }
});

/**
 * FOR LOGS
 */
app.use(morgan('dev'));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('port', Config.port);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());
app.use(methodOverride('_method'));
app.use(session({secret: Config.secret, resave: true, saveUninitialized: true}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
});
app.use(express.static(path.join(__dirname, 'public')));


/**
 * ALLOW CROSS ORIGIN
 */
app.all('/', (req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', HomeController.index);

app.get('/get-data',HomeController.get_data);
app.post('/post-data',HomeController.post_data);
app.post('/update-data',HomeController.update_data);
app.post('/delete-data',HomeController.delete_data);
app.get('/refresh',refreshController.refresh);

// Production error handler
if (app.get('env') === 'production') {
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.sendStatus(err.status || 500);
    });
}

app.listen(app.get('port'), ()=> {
    console.log('Express server listening on port ' + app.get('port'));
});

//TODO gerer fermeture de connection à la base de données

module.exports = app;
