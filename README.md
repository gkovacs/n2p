# n2p - node-style callback to promise

## Usage

```javascript
var n2p = require('n2p');

async function foo() {
  return await n2p(function(cb) {
    fs.readFile('foo.txt', cb)
  })
}
```

Or in livescript (with the [async syntax](https://github.com/gkovacs/livescript-async))

```livescript
require! n2p

foo = ->>
  return await n2p -> fs.readFile('foo.txt', it)
```

## Licence

MIT

## Credits

By [Geza Kovacs](https://github.com/gkovacs)
