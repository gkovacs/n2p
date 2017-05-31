module.exports = function() {
  return new Promise(function(resolve, reject) {
    callback(function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
