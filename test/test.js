/* eslint-disable */
const fs = require('fs');
const refactor = require('../cli/refactor');

function getAstAndCode(filePath) {
    return {
        code: refactor.getContent(filePath),
        ast: refactor.getAst(filePath)
    }
}

function walkSync(dir, filelist, needle) {
    const files = fs.readdirSync(dir);

    filelist = filelist || [];
    files.forEach(function(file) {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
            filelist = walkSync(dir + '/' + file, filelist, needle);
        }
        else {
            if (needle === file) {
                filelist.push(dir + '/' + file);
            }
        }
    });

    return filelist;
}

module.exports = {
    getAstAndCode,
    walkSync
};

(() => {
    before(function (){
        global.__TEST__ = true;
    });

    describe('Command line tools', () => {
        describe('Refactor function', () => {
            require('./src/cli/refactor').test();
        });
        describe('Core function', () => {
            require('./src/cli/core').test();
        });
        describe('Manager function', () => {
            require('./src/cli/manager').test();
        });
    });
})();

