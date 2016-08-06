function parseJson() {
    var accontStr = '{"name":"Jedi","members":["Yoda","Obi Wan"], \
"number":34512,"location":"A galaxy far, far away"} ';
    var accountObj = JSON.parse(accontStr);
    console.log(accountObj.name);
    console.log(accountObj.members);
    console.log(accountObj.number);
};

function stringify() {
    var accountObj = {
        name: "Baggins",
        number: 10645,
        members: ["Frodo, Bilbo"],
        location: "Shire"
    };
    var accountStr = JSON.stringify(accountObj);
    console.log(accountStr);
};

function buffer_write() {
    buf256 = new Buffer(256);
    buf256.fill(0);
    buf256.write("add some text");
    console.log(buf256.toString());
    buf256.write("more text", 9, 9);
    console.log(buf256.toString());
    buf256[18] = 43;
    console.log(buf256.toString());
};

function buffer_read() {
    var bufUTF8 = new Buffer("Some UTF8 Text \u00b6 \u30c6 \u20ac","utf8");
    console.log(bufUTF8.toString());
    console.log(bufUTF8.toString('utf8', 5, 9));

    var StringDecoder = require('string_decoder').StringDecoder;
    var decoder = new StringDecoder('utf8');
    console.log(decoder.write(bufUTF8));
    console.log(bufUTF8[18].toString(16));
    console.log(bufUTF8.readUInt32BE(18).toString(16));

};

function buffer_copy() {
    var alphabet = new Buffer('abcdefghijklmopqrstuvwxvyz');
    console.log(alphabet.toString());

    //copy full buffer
    var blank = new Buffer(26);
    blank.fill();
    console.log("Blank:" + blank.toString());
    alphabet.copy(blank);
    console.log("Blank:" + blank.toString());

    //copy part of buffer
    var dashes = new Buffer(26);
    dashes.fill('-');
    console.log("Dashes:" + dashes.toString());
    alphabet.copy(dashes,10,10,15);
    console.log("Dashes:" + dashes.toString());

    //copy to and from direct index of buffers
    var dots = new Buffer('------------------------');
    dots.fill('.');
    console.log('dots: ' + dots.toString());

    for (var i = 0; i < dots.length; i++) {
        if (i % 2) {
            dots[i] = alphabet[i];
        }
    }

    console.log('dots: ' + dots.toString());

}

function buffer_slice() {
    var numbers = new Buffer('123456789');
    console.log(numbers.toString());

    var slice = numbers.slice(3, 6);
    console.log(slice.toString());

    slice[0] = '#'.charCodeAt(0);
    slice[slice.length - 1] = '#'.charCodeAt(0);

    console.log(slice.toString());
    console.log(numbers.toString());

}

function buffer_concat() {
    var af = new Buffer('African Swallow?');
    var eu = new Buffer('European Swallow?');
    var question = new Buffer('Air Speed Velocity of an ');
    console.log(Buffer.concat([question, af]).toString());
    console.log(Buffer.concat([question, eu]).toString());
}



function main(){
    //parseJson();
    //stringify();
    //buffer_write();
    //buffer_read();
    //buffer_copy();
    //buffer_slice();
    buffer_concat();
}

main();