var isFunction = require("is_function"),
    isUndefined = require("is_undefined"),
    defineProperty = require("define_property");


var KEYS = 0,
    VALUES = 1,
    ENTRIES = 2,
    ITERATOR_SYMBOL = typeof(Symbol) === "function" ? Symbol.iterator : false,
    IS_ITERATOR = "__ITERATOR__",
    IteratorPrototype;


module.exports = Iterator;


function Iterator(next) {
    this.next = next;
}
IteratorPrototype = Iterator.prototype;

function isIterator(value) {
    return !!(value && value[IS_ITERATOR]);
}
Iterator.isIterator = isIterator;

defineProperty(IteratorPrototype, IS_ITERATOR, {
    configurable: false,
    enumerable: false,
    writable: false,
    value: true
});

function IteratorValue(value, done) {
    this.value = value;
    this.done = done;
}
Iterator.Value = IteratorValue;

function createValue(type, key, value, result) {
    var iteratorValue = (
        type === KEYS ? key :
        type === VALUES ? value : [key, value]
    );

    if (isUndefined(result)) {
        result = new IteratorValue(iteratorValue, false);
    } else {
        result.value = iteratorValue;
    }

    return result;
}
Iterator.createValue = createValue;

function createDone() {
    return new IteratorValue(undefined, true);
}
Iterator.createDone = createDone;

function getIterator(iterable) {
    var iteratorFn = iterable && ((ITERATOR_SYMBOL && iterable[ITERATOR_SYMBOL]) || iterable.iterator);

    if (isFunction(iteratorFn)) {
        return iteratorFn;
    } else {
        return null;
    }
}
Iterator.getIterator = getIterator;

function hasIterator(iterable) {
    return !!getIterator(iterable);
}
Iterator.hasIterator = hasIterator;

function isIterator(iterator) {
    return !!(iterator && isFunction(iiterator.next));
}
Iterator.isIterator = isIterator;

Iterator.KEYS = KEYS;
Iterator.VALUES = VALUES;
Iterator.ENTRIES = ENTRIES;

IteratorPrototype.toString = function() {
    return "[Iterator]";
};
IteratorPrototype.inspect = IteratorPrototype.toSource = IteratorPrototype.toString;

IteratorPrototype.iterator = function() {
    return this;
};
IteratorPrototype[ITERATOR_SYMBOL] = IteratorPrototype.iterator;