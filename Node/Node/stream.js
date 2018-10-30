exports.strean_read = () => {
  var stream = require("stream");
  var util = require("util");

  util.inherits(Answers, stream.Readable);
  function Answers(opt) {
    stream.Readable.call(this, opt);
    this.quotes = ["yes", "no", "maybe"];
    this._index = 0;
  }

  Answers.prototype._read = function() {
    if (this._index > this.quotes.length) {
      this.push(null);
    } else {
      this.push(this.quotes[this._index]);
      this._index += 1;
    }
  };

  var r = new Answers();
  console.log("Direct read: " + r.read().toString());
  r.on("data", function(data) {
    console.log("Callback read:" + data.toString());
  });

  r.on("end", function(data) {
    console.log("No more answers");
  });
};

exports.strem_write = () => {
  var stream = require("stream");
  var util = require("util");

  util.inherits(Writer, stream.Writable);
  function Writer(opt) {
    stream.Writable.call(this, opt);
    this.data = new Array();
  }

  Writer.prototype._write = function(data, encoding, callback) {
    this.data.push(data.toString("utf8"));
    console.log("Adding: " + data);
    callback();
  };

  var w = new Writer();
  for (var i = 1; i <= 5; i++) {
    w.write("Item" + i, "utf8");
  }
  w.end("ItemLast");
  console.log(w.data);
};

exports.stream_duplex = () => {
  var stream = require("stream");
  var util = require("util");

  util.inherits(Duplexer, stream.Duplex);
  function Duplexer(opt) {
    stream.Duplex.call(this, opt);
    this.data = [];
  }

  Duplexer.prototype._read = function readItem(size) {
    var chunk = this.data.shift();
    if (chunk == "stop") {
      this.push(null);
    } else {
      if (chunk) {
        this.push(chunk);
      } else {
        setTimeout(readItem.bind(this), 500, size);
      }
    }
  };

  Duplexer.prototype._write = function(data, encoding, callback) {
    this.data.push(data);
    callback();
  };

  var d = new Duplexer();

  d.on("data", function(chunk) {
    console.log("read: ", chunk.toString());
  });

  d.on("end", function() {
    console.log("Message Complete");
  });

  d.write("I think, ");
  d.write("therefore ");
  d.write("I am, ");
  d.write("Rene Descartes");
  d.write("stop");
};

exports.stream_transform = () => {
  var stream = require("stream");
  var util = require("util");
  util.inherits(JSONObjectStream, stream.Transform);

  function JSONObjectStream(opt) {
    stream.Transform.call(this, opt);
  }

  JSONObjectStream.prototype._transform = function(data, encoding, callback) {
    let object = data ? JSON.parse(data.toString()) : "";
    this.emit("object", object);
    object.handled = true;
    this.push(JSON.stringify(object));
    callback();
  };

  JSONObjectStream.prototype._flush = function(cb) {
    cb();
  };

  var tc = new JSONObjectStream();

  tc.on("object", function(object) {
    console.log("Name: %s", object.name);
    console.log("Color: %s", object.color);
  });

  tc.on("data", function(data) {
    console.log("Data: %s", data.toString());
  });

  tc.write('{"name":"Carolinus","color":"Green"}');
  tc.write('{"name":"Solarius","color":"Blue"}');
  tc.write('{"name":"Lo Tae Zhao","color":"Gold"}');
  tc.write('{"name":"Ommadon","color":"Red"}');
};

exports.stream_piped = () => {
  var stream = require("stream");
  var util = require("util");

  util.inherits(Reader, stream.Readable);
  util.inherits(Writer, stream.Writable);

  function Reader(opt) {
    stream.Readable.call(this, opt);
    this._index = 1;
  }

  Reader.prototype._read = function(size) {
    var i = this._index++;
    if (i > 10) {
      this.push(null);
    } else {
      this.push("Item " + i.toString());
    }
  };

  function Writer(opt) {
    stream.Writable.call(this, opt);
    this._index = 1;
  }

  Writer.prototype._write = function(data, encoding, callback) {
    console.log(data.toString());
    callback();
  };

  var r = new Reader();
  var w = new Writer();
  r.pipe(w);
};

exports.zip_buffers = () => {
  var zlib = require("zlib");
  var input = "...............text...............";

  zlib.deflate(input, (err, buffer) => {
    if (!err) {
      console.log("deflate (%s): ", buffer.length, buffer.toString("base64"));

      zlib.inflate(buffer, (err, buffer) => {
        if (!err) {
          console.log("inflate (%s): ", buffer.length, buffer.toString());
        }
      });
      zlib.unzip(buffer, (err, buffer) => {
        if (!err) {
          console.log("unzip deflate (%s): ", buffer.length, buffer.toString());
        }
      });
    }
  });

  zlib.deflateRaw(input, (err, buffer) => {
    if (!err) {
      console.log("", buffer.length, buffer.toString("base64"));

      zlib.inflateRaw(buffer, (err, buffer) => {
        if (!err) {
          console.log("inflateRaw (%s): ", buffer.length, buffer.toString());
        }
      });
    }
  });

  zlib.gzip(input, (err, buffer) => {
    if (!err) {
      console.log("gzip (%s): ", buffer.length, buffer.toString("base64"));

      zlib.gunzip(buffer, (err, buffer) => {
        if (!err) {
          console.log("gunzip (%s)", buffer.length, buffer.toString());
        }
      });

      zlib.unzip(buffer, (err, buffer) => {
        if (!err) {
          console.log("unzip gzip (%s): ", buffer.lengh, buffer.toString());
        }
      });
    }
  });
};

exports.zlib_file = () => {
  var zlib = require("zlib");
  var gzip = zlib.createGzip();

  var fs = require("fs");
  var inFile = fs.createReadStream("starter.js");
  var outFile = fs.createWriteStream("starter.gz");

  inFile.pipe(gzip).pipe(outFile);

  setTimeout(() => {
    var gunzip = zlib.createUnzip({ flush: zlib.Z_FULL_FLUSH });
    var inFile = fs.createReadStream("starter.gz");
    var outFile = fs.createWriteStream("starter.unzipped");
    inFile.pipe(gunzip).pipe(outFile);
  }, 3000);
};
