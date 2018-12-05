TestA = () => {
    const a = [1, 2, 3, 4, 5];

    // It works
    // Array.prototype.multiply=function(){
    // 	this.push(...(this.map(t => t * t)));
    // }
    // [ 1, 2, 3, 4, 5, 1, 4, 9, 16, 25 ]

    // It works
    // a.constructor.prototype.multiply = () =>{
    //     a.push(...(a.map(t => t * t)));
    //     // this.push(...(this.map(t => t * t)));
    // }
    // [ 1, 2, 3, 4, 5, 1, 4, 9, 16, 25 ]

    // It works
    a.constructor.prototype.multiply = function () {
        this.push(...this.map(t => t * t));
    };
    // [ 1, 2, 3, 4, 5, 1, 4, 9, 16, 25 ]

    // It doesn't work
    // a.constructor.prototype.multiply = () =>{
    //     // this.push(...(this.map(t => t * t)));
    // }

    //It does not work as expection
    // a.multiply = () =>{
    //     a.push(...(a.map(t => t * t)));
    //     // this.push(...(this.map(t => t * t)));
    // }
    // [ 1, 2, 3, 4, 5, 1, 4, 9, 16, 25, multiply: [Function] ]

    a.multiply();

    console.log(a);
};

TestB = () => {
    console.log(0.2 + 0.1 === 0.3);
    // false
    console.log((0.2 + 0.1) == 0.3);
    // false
    console.log(0.2 + 0.1 === 0.3);
    // false
    console.log((0.2*10 + 0.1*10)/10);
    console.log(0.2 + 0.1);
}

TestB();
