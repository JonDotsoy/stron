# stron
Use the generics variables to transform a string to boolean.

```javascript
const stron = require('stron')
const stroff = require('stroff')

stron('on') // => true
stron('active') // => true
stron('inactive') // => false

stroff('off') // => true
stroff('disable') // => true
stroff('False') // => true
stroff('enable') // => false
```

**Example**

```javascript
const stron = require('stron')

if (stron(process.env.FEATURENAME_ENABLED)) {
    installFeature()
}
```
