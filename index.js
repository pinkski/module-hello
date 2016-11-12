/**
 * Created by zhu on 16/11/8.
 */

// 引入模块的方式
// 1. 模块模式
// 模块模式一般用来模拟类的概念（因为原生JavaScript并不支持类，虽然最新的ES6里引入了Class不过还不普及）

//例1 匿名闭包函数

var global = 'hello , i am a global var';

(function() {
    var myGrades = [73, 99, 86, 53, 0];

    var average = function() {
        var total = myGrades.reduce(function(accumulator, item) {
            return accumulator + item}, 0);
            return 'your average grade is ' + total / myGrades.length + '.';
        }

    var failing = function() {
        var failingGrades = myGrades.filter(function(item) {
            return item < 70;
        })

        return 'your failing grade count is ' + failingGrades.length;
    }

    console.log(failing());
    console.log(average());
    console.log(global);
}());

//例2 全局引入
(function(globalVar) {

    var privateFunction = function() {
        console.log('this is privateFunction');
    }

    globalVar.each = function(collection, iterator) {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                iterator(collection[i], i, collection);
            }
        } else {
            for (var key in collection) {
                iterator(collection[key], key, collection);
            }
        }
    }

    globalVar.filter = function(collection, test) {
        var filtered = [];
        globalVar.each(collection, function(item){
            if(test(item)){
                filtered.push(item);
            }
        })

        return filtered;
    }

    globalVar.map = function(collection, iterator) {
        var mapped = [];
        globalVar.each(collection, function(value, key, collection) {
            mapped.push(iterator[value]);
        })
        return mapped;
    }

    globalVar.reduce = function(collection, iterator, accumulator) {
        var startingValueMissing = accumulator === undefined;
        globalVar.each(collection, function(item) {
            if(startingValueMissing) {
                accumulator = item;
                startingValueMissing = false;
            } else {
                accumulator = iterator(accumulator, item);
            }
        })
        return accumulator;
    }
}())

// 例3 对象接口
var myGradesCalculate = (function() {
    var myGrades = [12, 77, 88, 99, 0];
});
