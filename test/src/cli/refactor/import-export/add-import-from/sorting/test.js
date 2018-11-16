/* eslint-disable */
const assert = require('assert');
const path = require('path');
const { getAstAndCode } = require('../../../../../../test');
const refactor = require('../../../../../../../cli/refactor');

exports.test = () => {
    describe('importExport.js#sortImport: sorting follow eslint rule', () => {
        it('basic sort', () => {
            const source = getAstAndCode(path.join(__dirname, 'source_1.js'));
            const expect = getAstAndCode(path.join(__dirname, 'expect_1.js'));

            assert.equal(refactor.updateSourceCode(source.code, refactor.sortImport(source.ast)), expect.code);
        });

        it('advance sort', () => {
            const source = getAstAndCode(path.join(__dirname, 'source_2.js'));
            const expect = getAstAndCode(path.join(__dirname, 'expect_2.js'));

            assert.equal(refactor.updateSourceCode(source.code, refactor.sortImport(source.ast)), expect.code);
        });
    })
};
