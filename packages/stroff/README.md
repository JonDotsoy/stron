# stroff

Use the generics variables to transform a string to boolean.

```javascript
const stroff = require("stroff");

stroff("off"); // => true
stroff("disable"); // => true
stroff("False"); // => true
stroff("enable"); // => false
```

**Example**

```javascript
const stroff = require("stroff");

if (stroff(process.env.FEATURENAME_ENABLED)) {
  installFeature();
}
```
