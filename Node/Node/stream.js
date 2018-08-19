exports.strean_read = () => {
    var stream = require('stream');
    var util = require('util');

    util.inherits(Answers, stream.Readable);
    function Answers(opt) {
        stream.Readable.call(this, opt);
        this.quotes = ['yes', 'no', 'maybe'];
        this._index = 0;
    };

    Answers.prototype._read = function () {
        if (this._index > this.quotes.length) {
            this.push(null);
        } else {
            this.push(this.quotes[this._index]);
            this._index += 1;
        }
    };

    var r = new Answers();
    console.log('Direct read: ' + r.read().toString());
    r.on('data', function (data) {
        console.log('Callback read:' + data.toString());
    });

    r.on('end', function (data) {
        console.log('No more answers');
    });
};

exports.strem_write = () => {
    var stream = require('stream');
    var util = require('util');

    util.inherits(Writer, stream.Writable);
    function Writer(opt) {
        stream.Writable.call(this, opt);
        this.data = new Array();
    }

    Writer.prototype._write = function (data, encoding, callback) {
        this.data.push(data.toString('utf8'));
        console.log('Adding: ' + data);
        callback();
    }

    var w = new Writer();
    for (var i = 1; i <= 5; i++) {
        w.write('Item'+i,'utf8');
    }
    w.end('ItemLast');
    console.log(w.data);
};

exports.stream_duplex = () => {
    var stream = require('stream');
    var util = require('util');

    util.inherits(Duplexer, stream.Duplex);
    function Duplexer(opt) {
        stream.Duplex.call(this, opt);
        this.data = [];
    }

    Duplexer.prototype._read = function readItem(size) {
        var chunk = this.data.shift();
        if (chunk == 'stop') {
            this.push(null);
        } else {
            if (chunk) {
                this.push(chunk);
            } else {
                setTimeout(readItem.bind(this), 500,size);
            }
        }
    }

    Duplexer.prototype._write = function (data, encoding, callback) {
        this.data.push(data);
        callback();
    }

    var d = new Duplexer();

    d.on('data', function (chunk) {
        console.log('read: ', chunk.toString());
    });

    d.on('end', function () {
        console.log('Message Complete');
    });

    d.write('I think, ');
    d.write('therefore ');
    d.write('I am, ');
    d.write('Rene Descartes');
    d.write('stop');


};
