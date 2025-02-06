require('dotenv').config();

module.exports={
    app:{
        port:process.env.PORT || 4000,
    },
    mysql:{
        host: process.env.MYSQL_HOST || 'localhost', 
        user: process.env.MYSQL_USER || 'administrador',
        password: process.env.MYSQL_PASSWORD || 'prueba',
        database: process.env.MYSQL_DB || 'menuapp_db',
        port: process.env.DB_PORT || 3308,
    }
}