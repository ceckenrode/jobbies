require('dotenv').config();
module.exports = {
        // url : 'mongodb://localhost/jobbiesApp'
        url: process.env.MONGOLAB_URI
    };