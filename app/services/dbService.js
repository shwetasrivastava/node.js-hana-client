exports.execute = function (query) {
    return new Promise((resolve, reject) => {
      connection.exec(query, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  };
  
  exports.executeBatch = function (query, data) {
    return new Promise((resolve, reject) => {
      const statement = connection.prepare(query);
      statement.execBatch(data, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  };
  
  exports.setAutocommit = function (value) {
    return connection.setAutoCommit(value);
  };
  
  exports.rollback = function () {
    return new Promise((resolve, reject) => {
      connection.rollback((err) => {
        if (err) {
          reject(err)
        } else {
          resolve(null);
        }
      });
    });
  };
  
  exports.commit = function () {
    return new Promise((resolve, reject) => {
      connection.commit((err) => {
        if (err) {
          reject(err)
        } else {
          resolve(null);
        }
      });
    });
  };