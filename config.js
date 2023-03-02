
const configs = {
    api: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'http://localhost:3000',
        nodeEnv: process.env.NODE_ENV || 'development'
    },
    db: {
        development: {
            //? configuraciones para conexion con sequelize
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'panetone007',
            database: 'chat-db',
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll:true
            }
        },
        production: {
            //? configuraciones para conexion con sequelize
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'panetone007',
            database: 'chat-db',
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll:true
            },
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        },
        testing: {}
    }
}


module.exports = configs