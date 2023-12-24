(function () {
    'use strict';

    const sayHello=()=>{
        console.log("hello");
    };

    const say=()=>{
        console.log('hello rollup');
        sayHello();
    };

    say();

})();
