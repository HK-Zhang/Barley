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
};

exports.childProcessExec = () => {
    var childProcess = require('child_process');
    var options = { maxBuffer: 100 * 1024, encoding: 'utf8', timeout: 5000 };
    var child = childProcess.execFile('ping.exe', ['-n', '1', 'google.com'],
        options, (error, stdout, stderr) => {
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
        console.log(`Child completed with code: ${code}`);
    });
};

exports.childProcessSpawnFile = () => {
    var spawn = require('child_process').spawn;
    var options = {
        env: { user: 'brad' },
        detached: false,
        stdio: ['pipe', 'pipe', 'pipe']
    };
    var child = spawn('netstat', ['-e'], options);
    child.stdout.on('data', (data) => {
        console.log(data.toString());
    });
    child.stderr.on('data', (data) => {
        console.log(data.toString());
    });
    child.on('exit', (code) => {
        console.log(`Child exited with code: ${code}`);
    });

}

// 在命令行执行的时候要切换到上述文件的目录中，否则会找不到子进程。node starter.js
exports.childFork = () => {
    var fork = require('child_process').fork;
    var options = {
        env: { user: 'Brad' },
        encoding: 'utf8'
    };

    function makeChild() {
        var child = fork('./chef.js', [], options);
        console.log('fork return pid: ' + child.pid);
        child.on('message', (message) => {
            console.log(`Served: ${message}`);
        });
        child.on("error", (message) => {
            console.log(message);
        })
        return child;
    }

    function sendCommand(child, command) {
        console.log(`Requesting: ${command}`);
        child.send({ cmd:command });
    }

    var child1 = makeChild();
    var child2 = makeChild();
    var child3 = makeChild();

    sendCommand(child1, "makeBreakfast");
    sendCommand(child2, "makeLunch");
    sendCommand(child3, "makeDinner");

    // setTimeout(() => {
    //     console.log("wait");
    // }, 3000);
}
