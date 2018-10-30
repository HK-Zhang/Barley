import { buffer_concat } from "./buffer";

export function fileWrite() {
    var fs = require("fs");
    var config = {
        maxFiles: 20,
        maxConnections: 15,
        rootPath: "/webroot"
    };

    var configTxt = JSON.stringify(config);
    var options = { encoding: "utf8", flag: "w" };
    fs.writeFile("config.txt", configTxt, options, err => {
        if (err) {
            console.log("Config Write Failed.");
        } else {
            console.log("Config Saved");
        }
    });
}

export function fileWriteSync() {
    var fs = require("fs");
    var veggieTray = ["carrots", "celery", "olives"];
    var fd = fs.openSync("veggie.txt", "w");

    while (veggieTray.length) {
        var veggie = veggieTray.pop() + " ";
        var bytes = fs.writeSync(fd, veggie, null, null);
        console.log("Wrote %s %dbytes", veggie, bytes);
    }

    fs.closeSync(fd);
}

export function fileWriteAsync() {
    var fs = require("fs");
    var fruitBowl = ["apple", "orange", "banana", "grapes"];
    var writeFruit = fd => {
        if (fruitBowl.length) {
            var fruit = fruitBowl.pop() + " ";
            fs.write(fd, fruit, null, null, (err, bytes) => {
                if (err) {
                    console.log("File Write Failed.");
                } else {
                    console.log("Wrote: %s %dbytes", fruit, bytes);
                    writeFruit(fd);
                }
            });
        } else {
            fs.close(fd, err => {
                console.log("file is closed");
            });
        }
    };

    fs.open("fruit.txt", "w", (err, fd) => {
        writeFruit(fd);
    });
}

export function fileWriteStream() {
    var fs = require("fs");
    var grains = ["wheat", "rice", "oats"];
    var options = { encoding: "utf8", flag: "w" };
    var fileWriteStream = fs.createWriteStream("grains.txt", options);
    fileWriteStream.on("close", () => {
        console.log("File Closed.");
    });
    while (grains.length) {
        var data = grains.pop() + " ";
        fileWriteStream.write(data);
        console.log("Wrote: %s", data);
    }
    fileWriteStream.end();
}

export function fileRead() {
    var fs = require("fs");
    var options = { encoding: "utf8", flag: "r" };
    fs.readFile("config.txt", options, (err, data) => {
        if (err) {
            console.log("Failed to open Config file.");
        } else {
            console.log("Config Loaded.");
            var config = JSON.parse(data);
            console.log("Max Files:" + config.maxFiles);
            console.log("Max Connections:" + config.maxConnections);
            console.log("Root Path: " + config.rootPath);
        }
    });
}

export function fileReadSync() {
    var fs = require("fs");
    var fd = fs.openSync("veggie.txt", "r");
    var veggies = "";
    do {
        var buf = Buffer.alloc(5);;
        buf.fill();
        var bytes = fs.readSync(fd, buf, null, 5);
        console.log("read %d bytes", bytes);
        veggies += buf.toString();
    } while (bytes > 0);
    fs.closeSync(fd);
    console.log("Veggies: " + veggies);
}

export function fileReadAsync() {
    var fs = require('fs');
    var readFruit = (fd, fruits) => {
        var buf = Buffer.alloc(5);
        buf.fill();
        fs.read(fd, buf, 0, 5, null, (err, bytes, data) => {
            if (bytes > 0) {
                console.log("read %dbytes", bytes);
                fruits += data;
                readFruit(fd, fruits);
            } else {
                fs.close(fd, (err) => {
                    console.log("Fruits: %s", fruits);
                });
            }
        });
    }

    fs.open('fruit.txt', 'r', (err, fd) => {
        readFruit(fd, "");
    })

}

export function fileReadStream() {
    var fs = require('fs');
    var options = { encoding: 'utf8', flag: 'r' };
    var fileReadStream = fs.createReadStream("grains.txt", options);
    fileReadStream.on('data', (chunk) => {
        console.log("Grains: %s", chunk);
        console.log("Read %d bytes of data.", chunk.length);
    });

    fileReadStream.on("close", () => {
        console.log("File Closed.");
    })
}

export function fileStats() {
    var fs = require('fs');
    fs.stat('fileSystem.js', (err, stats) => {
        if (!err) {
            console.log('stats: ' + JSON.stringify(stats, null, ' '));
            console.log(stats.isFile() ? "Is a File" : "Is not a File");
            console.log(stats.isDirectory() ? "Is a Folder" : "Is not a Folder");
            console.log(stats.isSocket() ? "Is a Socket" : "Is not a Socket");
        }
    });
}

export function fileReaddir() {
    var fs = require('fs');
    var Path = require('path');
    var WalkDirs = (dirPath) => {
        console.log(dirPath);
        fs.readdir(dirPath, (err, entries) => {
            for (var idx in entries) {
                var fullPath = Path.join(dirPath, entries[idx]);
                (function (fullPath) {
                    fs.stat(fullPath, (err, stats) => {
                        if (stats && stats.isFile()) {
                            console.log(fullPath);
                        } else if (stats && stats.isDirectory()) {
                            WalkDirs(fullPath);
                        }
                    })
                })(fullPath);
            }
        });
    };

    WalkDirs('./node_modules/babel-core');
}