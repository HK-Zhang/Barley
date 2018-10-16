exports.processInfo = () => {
    var util = require("util");
    console.log(`Current directory: ${process.cwd()}`);
    console.log(` Environment Settings: ${JSON.stringify(process.env)}`);
    console.log(`Node Args: ${process.argv}`);
    console.log(`Execution Path: ${process.execPath}`);
    console.log(`Execution Args: ${JSON.stringify(process.execArgv)}`);
    console.log(`Node Versions: ${process.version}`);
    console.log(`Process ID: ${process.pid}`);
    console.log(`Process Title: ${process.title}`);
    console.log(`Process Platform: ${process.platform}`);
    console.log(`Process Architecture: ${process.arch}`);
    console.log(`Memory Usage: ${util.inspect(process.memoryUsage())}`);

    var start = process.hrtime();

    setTimeout(() => {
        var delta = process.hrtime(start);
        console.log(
            `High-Res timer took ${delta[0]} seconds and ${delta[1]} nanoseconds`
        );
        console.log(`Node has been running ${process.uptime()} seconds`);
    }, 1000);
};


exports.childExec = () => {
    var childProcess = require('child_process');
    var options = { maxBuffer: 100 * 1024, encoding: 'utf8', timeout: 5000 };
    var child = childProcess.exec('dir /B', options, (error, stdout, stderr) => {
        if (error) {
            console.log(error.stack);
            console.log(`Error Code: ${error.code}`);
            console.log(`Error Signal ${error.signal}`);
        }
        console.log(`Results: \n` + stdout);

        if (stderr.length) {
            console.log(`Errors: ${stderr}`);
        }
    });

    child.on('exit', (code) => {
        console.log(`Completed with code: ${code}`);
    })
}