console.log('parent pid: ' + process.pid);
var fork = require('child_process').fork;
//fork方法返回的是子进程
var child = fork('./child.js');
console.log('fork return pid: ' + child.pid);
child.on('message', function (msg) {
    console.log('parent get message: ' + JSON.stringify(msg));
});
child.send({ key: 'parent value' });
