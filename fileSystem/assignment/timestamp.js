const fs = require('fs');

fs.appendFile(
  'log.txt',
`${Date.now()} Server started`,
  () => {}
);
