const { rmdir } = require('fs');
const { join } = require('path');

rmdir(join(__dirname, 'rmdir'), {}, (err) => {
  console.error(err);
});
