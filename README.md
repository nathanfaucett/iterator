Iterator [![Build Status](https://travis-ci.org/nathanfaucett/iterator.svg?branch=master)](https://travis-ci.org/nathanfaucett/iterator)
=======

Iterator for the browser and node.js

```javascript
var Iterator = require("@nathanfaucett/iterator");


var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

    index = 0,
    length = array.length,

    iterator = new Iterator(function next() {
        if (index === length) {
            return Iterator.createDone();
        } else {
            return Iterator.createValue(Iterator.VALUES, index, array[index++]);
        }
    }),

    it = iterator.next();

while (!it.done) {
    console.log(it.value);
    it = iterator.next();
}
```
