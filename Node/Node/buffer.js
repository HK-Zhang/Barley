exports.buffer_write = () => {
    let buf256 = Buffer.alloc(256);
    buf256.fill(0);
    buf256.write("add some text");
    console.log(buf256.toString());
    buf256.write("more text", 9, 9);
    console.log(buf256.toString());
    buf256[18] = 43;
    console.log(buf256.toString());
};

exports.buffer_read = () => {
    var bufUTF8 = Buffer.from("Some UTF8 Text \u00b6 \u30c6 \u20ac","utf8");
    console.log(bufUTF8.toString());
    console.log(bufUTF8.toString('utf8', 5, 9));

    var StringDecoder = require('string_decoder').StringDecoder;
    var decoder = new StringDecoder('utf8');
    console.log(decoder.write(bufUTF8));
    console.log(bufUTF8[18].toString(16));
    console.log(bufUTF8.readUInt32BE(18).toString(16));

};
