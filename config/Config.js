/**
 * Created by quentinnicolle on 20/03/2017.
 */

const Config = {
    secret : process.env.SESSION_SECRET || 15,
    port : process.env.PORT || 3000,

    host: 'localhost',
    database: 'commentaires',

    mongoLocal: process.env.MONGODB_LOCAL || `mongodb://${this.host}/${this.database}`,

    API_OPENDATA_KEY : '1gdMF6E4nv4WzAT9',
    API_OPENDATA_URL : 'https://www.opendata.larochelle.fr/webservice/'

};

export default Config