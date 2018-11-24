export function osInfo() {
    var os = require("os");
    console.log("tmpdir :\t" + os.tmpdir());
    console.log("endianness  :\t" + os.endianness());
    console.log("hostname :\t" + os.hostname());
    console.log("type :\t" + os.type());
    console.log("platform :\t" + os.platform());
    console.log("arch :\t" + os.arch());
    console.log("release :\t" + os.release());
    console.log("uptime :\t" + os.uptime());
    console.log("loadavg :\t" + os.loadavg());
    console.log("totalmem :\t" + os.totalmem());
    console.log("freemem :\t" + os.freemem());
    console.log("EOL :\t" + os.EOL);
    console.log("cpus :\t" + JSON.stringify(os.cpus()));
    console.log("networkInterfaces :\t" + JSON.stringify(os.networkInterfaces()));

}

export function utilInherit() {
    var util = require("util");
    var events = require("events");

    function Writer() {
        events.EventEmitter.call(this); // it seems that this line of code have no impact on the result.
    }

    util.inherits(Writer, events.EventEmitter);

    Writer.prototype.write = function (data) {
        this.emit('data', data);
    };

    var w = new Writer();

    console.log(w instanceof events.EventEmitter);
    console.log(Writer.super_ === events.EventEmitter);

    w.on("data", function (data) {
        console.log("Received data: '" + data + "'");
    });

    w.write("Some Data");
}

export function dnsLookup() {
    var dns = require('dns');
    console.log("Resolving www.baidu.com...");
    dns.resolve4("www.baidu.com", function (err, addresses) {
        console.log('IP4 addresses: ' + JSON.stringify(addresses, false, ' '));
        addresses.forEach(function (addr) {
            dns.reverse(addr, function (err, domain) {
                console.log('Reverse for ' + addr + ': ' + JSON.stringify(domain));
            });
        });
    });
}