/**
 * Created by jcalandr on 22/03/2017.
 */
const opendata = "https://opendata.larochelle.fr/webservice/?service=getData";
const key = "&key=KEY";
const format = "&format=json";

const url = {
    "disponibilite_parking": opendata + key + "&db=stationnement&table=disponibilite_parking" + format,

    "scolaire_etablissement": opendata + key + "&db=scolaire&table=scolaire_etablissement" + format,

    "nb_enfants": opendata + key + "&db=scolaire&table=scolaire_00" + format,

    "bp_2017_fonction": opendata + key + "&db=budget&table=bp_2017_fonction" + format,

    "sta_place_pmr": opendata + key + "&db=stationnement&table=sta_place_pmr" + format

};

export default url;