/**
 * Created by zhu on 16/11/12.
 */

// commonjs & amd

function myModule() {
    this.hello = function() {
        return 'hello'
    }
    this.goodbye = function() {
        return 'goodbye'
    }
}

module.exports = myModule;