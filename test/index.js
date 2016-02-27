var tape = require("tape"),
    Iterator = require("..");


tape("Iterator", function(assert) {
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
        iteratorValue = iterator.next(),
        i = 0;

    while (!iteratorValue.done) {
        assert.equal(iteratorValue.value, i++);
        iteratorValue = iterator.next();
    }

    assert.end();
});
