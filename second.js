/**
 * Created by zhu on 16/11/13.
 */


// 1, commonjs
var myModule = require('myModule');
var myModuleInstance = new myModule();
myModuleInstance.hello();
myModuleInstance.goodbye();


// 2,AMD
define(['myModule', 'myOtherModule'], function(myModule, myOtherModule) {
    console.log(myModule.hello());
})

//3,UMD
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['myModule', 'myOtherModule'], factory)
    } else if (typeof  exports === 'object') {
        module.exports = factory(require('myModule'), require('myOtherModule'))
    } else {
        module.returnExports = factory(root.myModule, root.myOtherModule)
    }
}(this, function(myModule, myOtherModule) {
    function notHelloOrGoodbye(){}
    function hello(){}
    function goodbye(){}

    return {
        hello: hello,
        goodbye: goodbye
    }
}))

// 4, ES6

// lib / count.js
var counter = 1
function increment() {
    counter++
}
function decrement() {
    counter--
}
module.exports = {
    counter: counter,
    increment: increment,
    decrement: decrement
}

//main.js
var counter = require('../lib/count')
counter.increment();
console.log(counter.counter);


// ES6  version 2
export let counter = 1;
export function increment() {
    counter++
}
export function decrement() {
    counter--
}

import * as counter from '../lib/counter'
console.log(counter.counter)
counter.increment();
counter.decrement();

