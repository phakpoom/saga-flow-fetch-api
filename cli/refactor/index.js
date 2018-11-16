const { addToArray, removeFromArray } = require('./array');
const {
    updateSourceCode,
    updateFile,
    isLocalModule,
    isSameModuleSource,
    resolveModulePath,
    acceptFilePathForAst,
    acceptFilePathForLines
} = require('./common');
const { removeFileWhichNoExported } = require('./file');
const {
    addImportFrom,
    addExportFrom,
    removeImportSpecifier,
    removeExportSpecifier,
    sortImport
} = require('./importExport');
const {
    lastLineIndex,
    isStringMatch,
    writeLine,
    removeLines,
} = require('./lines');
const {
    getPkgJson,
    getProjectRoot,
    getCommonFolder,
    getReduxFolder,
    getFeatureFolder,
    info,
    success,
    error,
} = require('./utils');
const {
    getContent,
    getLines,
    getAst,
    save,
    del,
    mkdir,
    dirExists,
    fileExists,
    flush,
    reset,
    fileLines,
    toDel,
    toSave,
    asts,
    dirs,
    mvDirs,
    mvs
} = require('./vio');
const {
    addObjectProperty,
    removeObjectProperty,
} = require('./object');


/*
 We Export seperate for IDE resolve path
 If use ... IDE can't handle its.
 */
module.exports = {
    // array
    addToArray,
    removeFromArray,

    // common
    updateSourceCode,
    updateFile,
    isLocalModule,
    isSameModuleSource,
    resolveModulePath,
    acceptFilePathForAst,
    acceptFilePathForLines,

    // file
    removeFileWhichNoExported,

    // importExport
    addImportFrom,
    addExportFrom,
    removeImportSpecifier,
    removeExportSpecifier,
    sortImport,

    // lines
    lastLineIndex,
    isStringMatch,
    writeLine,
    removeLines,

    // utils
    getPkgJson,
    getProjectRoot,
    getCommonFolder,
    getReduxFolder,
    getFeatureFolder,
    info,
    success,
    error,

    // vio
    getContent,
    getLines,
    getAst,
    save,
    del,
    mkdir,
    dirExists,
    fileExists,
    flush,
    reset,
    fileLines,
    toDel,
    toSave,
    asts,
    dirs,
    mvDirs,
    mvs,

    // object
    addObjectProperty,
    removeObjectProperty,
};
