require('./my-module'); // Output: myModule called
delete require.cache[require.resolve('./my-module')];
require('./my-module'); // Output: myModule called
