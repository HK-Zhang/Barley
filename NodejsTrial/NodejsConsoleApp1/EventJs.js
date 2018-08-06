function simple_timer_demo() {
    function simpleTimeout(consoleTimer) {
        console.timeEnd(consoleTimer);
    }
    
    console.time("twoSecond");
    setTimeout(simpleTimeout, 2000, "twoSecond");

    console.time("oneSecond");
    setTimeout(simpleTimeout, 1000, "oneSecond");

    console.time("fiveSecond");
    setTimeout(simpleTimeout, 5000, "fiveSecond");

    console.time("50MilliSecond");
    setTimeout(simpleTimeout, 50, "50MilliSecond");
}

function simple_interval_demo() {
    var x = 0, y = 0, z = 0;
    function displayValues(){
        console.log("X=%d; Y=%d; Z=%d", x, y, z);
    }

    function updateX(){
        x += 1;
    }

    function updateY(){
        y += 1;
    }

    function updateZ(){
        z += 1;
        displayValues();
    }

    setInterval(updateX, 500);
    setInterval(updateY, 1000);
    setInterval(updateZ, 2000);
}

function nexttick_demo() {
    var fs = require("fs");
    fs.stat("EventJs.js", function (err, stats) {
        if (stats) { console.log("EventJs.js Exists"); }
    });

    setImmediate(function () {
        console.log("Immediate Timer 1 Executed");
    });

    setImmediate(function () {
        console.log("Immediate Timer 2 Executed");
    });

    process.nextTick(function () {
        console.log("Next Tick 1 Executed");
    });

    process.nextTick(function () {
        console.log("Next Tick 2 Executed");
    });
}

function emitter_listener_demo() {
    var events = require('events');
    
    function Account() {
        this.balance = 0;
        events.EventEmitter.call(this);
        
        this.deposite = function (amount) {
            this.balance += amount;
            this.emit('balanceChanged');
        };
        
        this.withdraw = function (amount) {
            this.balance -= amount;
            this.emit('balanceChanged');
        };
    }

    Account.prototype.__proto__ = events.EventEmitter.prototype;
    Account.prototype.constructor = Account;

    function displayBalance() {
        console.log("Account balance: $%d", this.balance);
    }

    function checkOverdraw() {
        if (this.balance < 0) {
            console.log("Account overdrawn!!!");
        }
    }

    
    function checkGoal(acc, goal) {
        if (acc.balance > goal) {
            console.log("Goal Achieved!!!");
        }
    }

    var account = new Account();
    account.on("balanceChanged", displayBalance);
    account.on("balanceChanged", checkOverdraw);
    account.on("balanceChanged", function () {
        checkGoal(this, 1000);
    });

    account.deposite(220);
    account.deposite(320);
    account.deposite(600);
    account.withdraw(1200);
}

function callback_parameter_demo() {
    var events = require('events');
    
    function CarShow() {
        events.EventEmitter.call(this);
        this.seeCar = function (make) {
            this.emit('sawCar', make);
    
        };

    };

    CarShow.prototype.__proto__ = events.EventEmitter.prototype;
    CarShow.prototype.constructor = CarShow;

    var show = new CarShow();

    function logCar(make) {
        console.log("Saw a " + make);
    };

    function logColorCar(make, color) {
        console.log("Saw a %s %s", color, make);
    };

    show.on("sawCar", logCar);
    show.on("sawCar", function (make) {
        var colors = ['red', 'blue', 'black'];
        var color = colors[Math.floor(Math.random() * 3)];
        logColorCar(make, color);
    });

    show.seeCar("Farrari");
    show.seeCar("Porsche");
    show.seeCar("Bugatti");
    show.seeCar("Lamborghini");
    show.seeCar("Aston Martin");
};

function callback_closure_demo() {
    function logCar(logMsg, callback) {
        process.nextTick(function () {
            callback(logMsg);
        });
    };

    var cars = ['Ferrari', 'Porsche', 'Bugatti'];
    for (var idx in cars) {
        var message = "Saw a " + cars[idx];
        logCar(message, function () {
            console.log("Normal Callback: " + message);
        });
    };

    for (var idx in cars) {
        var message = "Saw a " + cars[idx];
        (function (msg) {
            logCar(msg, function () {
                console.log("Closure Callback: " + msg);
            });
        })(message);
    };

};


function callback_chain_demo() {
    function logCar(car, callback) {
        console.log("Saw a %s", car);
        if (cars.length) {
            process.nextTick(function () {
                callback();
            });
        }
    }

    function logCars(cars) {
        var car = cars.pop();
        logCar(car, function () {
            logCars(cars);
        });
    }

    var cars = ["Ferrari", "Porsche", "Bugatti", "Lamborghini", "Aston Martin"];

    logCars(cars);
};




function main(){
    //simple_timer_demo();
    //simple_interval_demo();
    //nexttick_demo();
    //emitter_listener_demo();
    //callback_parameter_demo();
    //callback_closure_demo();

    callback_chain_demo();
}

main();