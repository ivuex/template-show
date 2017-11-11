const fs = require('fs');

function replaceStr(contentStr, replaceStrPairsObj) {
    console.log('If you can see this line , the replaceStr function was executed! 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, ');

    console.dir(arguments);
    console.log('Above is the arguments in replaceStr function, is it right?');

    const contentStrCheckedType = Object.prototype.toString.call(contentStr);
    if (contentStrCheckedType !== "[object String]") {
        console.dir(contentStrType);
        console.error('Above is the argument contentStr in replaceStr function, it must be as str, but others got: ' + contentStrCheckedType);
    }

    console.dir(contentStr);
    console.log('Above is the argument contentStr in replaceStr function, is it right?');

    for (key in replaceStrPairsObj) {
        if (replaceStrPairsObj.hasOwnProperty(key)) {
            // replacedStr = replaceStr(contentStr, key, replaceStrPairsObj[key]);
            while (contentStr.indexOf(key) !== -1) {
                console.log(key);
                console.log('above is the key in while block.');
                console.log('If you can see this line , the while block replaceStr function was executed!');
                contentStr = contentStr.replace(key, replaceStrPairsObj[key]);
            }
        }
    }
    return contentStr;
}

function handleBuffer(contentBuffer, replaceStrPairsObj) {

    console.dir(arguments);
    console.log('Above is the arguments in handleBuffer function, is it right?');

    const contentStr = contentBuffer.toString('utf-8');
    let replacedStr = replaceStr(contentStr, replaceStrPairsObj);
    console.log(replacedStr);
    console.log('Above is the replacedStr in handleBuffer, is it right? 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, ');
    let handledBuffer = new Buffer(replacedStr, 'utf-8');
    return handledBuffer;
}

module.exports = function (sourceStr, distinationPath, replaceStrPairsObj) {

    // console.dir(arguments);
    // console.log('Above is the arguments in module.exports function, is it right? 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, ');
    //
    // let rs = fs.createReadStream(sourcePath);
    // let ws = fs.createWriteStream(distinationPath);
    //
    // rs.on('data', function (chunk) {
    //     const chunkCheckedType = Object.prototype.toString.call(chunk);
    //     if(chunkCheckedType !== "[object Uint8Array]"){
    //         console.dir(chunk);
    //         console.error('Above is the argument chunk in rs\'s data event binding function, it must be as str, but others got: ' + chunkCheckedType, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, );
    //     }
    let replacedStr = replaceStr(sourceStr, replaceStrPairsObj);
    console.log(distinationPath);
    console.log('Above is the distinationPath in modules.exports callback function, is it right?');
    // return new Promise(function (resolve, reject) {
    return function () {
        fs.writeFileSync(distinationPath, replacedStr);
    }
    // })
    //     chunk = handleBuffer(chunk, replaceStrPairsObj);
    // if (ws.write(chunk) === false) {
    //     rs.pause();
    // }
    // });

    // rs.on('end', function () {
    //     ws.end();
    // });
    //
    // ws.on('drain', function () {
    //     rs.resume();
    // });
};

//In real production, below line must be commented.
// module.exports('../test/replaceMe.txt', '../test/replacedMe.txt', 'my', 'this');