# stron
Use the generics variables to transform a string to boolean.

```javascript
const stron = require('stron')

stron('on') // => true
stron('active') // => true
stron('inactive') // => false
```

**Example**

```javascript
const stron = require('stron')

if (stron(process.env.FEATURENAME_ENABLED)) {
    installFeature()
}
```
