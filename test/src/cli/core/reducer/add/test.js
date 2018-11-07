/* eslint-disable */
const assert = require('assert');
const path = require('path');
const { getAstAndCode } = require('../../../../../test');
const refactor = require('../../../../../../cli/refactor');
const reducer = require('../../../../../../cli/core/reducer');

exports.test = () => {
    describe('reducer.js#add', () => {
        afterEach(function() {
            refactor.reset();
        });

        it('should not change if `withReducer === null`', () => {
            const args = {
                feature: 'blank',
                name: 'getPageById',
                type: 'request',
                withSaga: 'reducer',
                withReducer: null
            };

            reducer.add(args);

            const fileLines = refactor.fileLines[refactor.getReduxFolder(args.feature) + 'reducers/reducer.js'];
            assert.equal('undefined', typeof fileLines);
        });

        it('should add a reducer with request type', () => {
            const args = {
                feature: 'blank',
                name: 'getPageById',
                type: 'request',
                withSaga: 'reducer',
                withReducer: 'pageDetail'
            };

            reducer.add(args);

            const fileLines = refactor.fileLines[refactor.getReduxFolder(args.feature) + '/reducers/reducer.js'];
            assert.equal('object', typeof fileLines);

            const expect = getAstAndCode(path.join(__dirname, 'expect_request.js'));
            assert.equal(expect.code, fileLines.join('\n'));
        });

        it('should add a reducer with submit type', () => {
            const args = {
                feature: 'blank',
                name: 'createPage',
                type: 'submit',
                withSaga: 'reducer',
                withReducer: 'createPageResult'
            };

            reducer.add(args);

            const fileLines = refactor.fileLines[refactor.getReduxFolder(args.feature) + '/reducers/reducer.js'];
            assert.equal('object', typeof fileLines);

            const expect = getAstAndCode(path.join(__dirname, 'expect_submit.js'));
            assert.equal(expect.code, fileLines.join('\n'));
        });

        it('should add a reducer with paginate type', () => {
            const args = {
                feature: 'blank',
                name: 'fetchPages',
                type: 'paginate',
                withSaga: 'reducer',
                withReducer: 'pages'
            };

            reducer.add(args);

            const fileLines = refactor.fileLines[refactor.getReduxFolder(args.feature) + '/reducers/reducer.js'];
            assert.equal('object', typeof fileLines);

            const expect = getAstAndCode(path.join(__dirname, 'expect_paginate.js'));
            assert.equal(expect.code, fileLines.join('\n'));
        });
    })
};
