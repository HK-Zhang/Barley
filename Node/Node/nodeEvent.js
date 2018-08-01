exports.simple_timer = () => {
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

exports.simple_interval = () => {
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

exports.nexttick_demo = () => {
    var fs = require("fs");
    fs.stat("nodeEvent.js", function (err, stats) {
        if (stats) { console.log("nodeEvent.js Exists"); }
    });

    setTimeout(function () {
        console.log("Timeout Timer 1 Executed");
    },0);

    setImmediate(function () {
        console.log("Immediate Timer 1 Executed");
    });

    setTimeout(function () {
        console.log("Timeout Timer 2 Executed");
    },0);

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

exports.timeout_immediate = () => {
    var fs = require("fs");
    fs.stat("nodeEvent.js", function (err, stats) {
        setImmediate(() => console.log("IO_Callback_Immediate"));
        setTimeout(() => console.log("IO_Callback_Timeout"), 0);
    });

    setTimeout(()=>{
        setImmediate(() => console.log("Timer_Callback_Immediate"));
        setTimeout(() => console.log("Timer_Callback_Timeout"), 0);
    }, 0)

    setImmediate(()=>{
        setImmediate(() => console.log("Checker_Callback_Immediate"));
        setTimeout(() => console.log("Checker_Callback_Timeout"), 0);
    })

    // Output:
    // Timer_Callback_Immediate
    // Timer_Callback_Timeout
    // Checker_Callback_Timeout
    // Checker_Callback_Immediate
    // IO_Callback_Immediate
    // IO_Callback_Timeout
}