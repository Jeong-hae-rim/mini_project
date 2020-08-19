var mysql = require('mysql2');

class DBHandler {

    constructor() {
        this.connection = mysql.createPool({
            connectionLimit : 10,
            host    : 'localhost',
            port    : '3333',
            user    : 'root',
            password: '123123',
            database: 'parking',
            dateStrings: 'date'
        });
    }

    connect() {
        this.connection.connect();
    }
    
    disconnect() {
        this.connection.end();

    }
    
    putData(query) {
        return new Promise((resolve, reject) => {
            this.connection.query(
                query,
                (err, result) => {
                    return err ? resolve(err) : resolve(result);
                }
            )
        })
    }

    getData(query) {
        return new Promise((resolve, reject) => {
            this.connection.query(
                query,
                (err, result) => {
                    return err ? resolve(err) : resolve(result);
                }
            )
        })
    }
}

module.exports = DBHandler;