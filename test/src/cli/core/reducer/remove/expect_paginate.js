import { take, fork, select, call, takeLatest } from 'redux-saga/effects';
import { doSubmit } from 'react-native-core/api/submit/saga';
import submitReducer from 'react-native-core/api/submit/reducer';
import { doRequest } from 'react-native-core/api/request/saga';
import { CREATE_PAGE, UPDATE_PAGE, UPDATE_PAGE_STATE_KEY, GET_PAGE_BY_ID } from '../constants';
import { createPage, updatePage, getPageById, fetchPages } from '../actions';

export const watchCreatePageSubmit = function*() {
    while (true) {
        const submitAction = yield take(CREATE_PAGE.SUBMIT);

        yield fork(doSubmit, createPage, {
            apiFunction: '__SOME_API__',
            args: []
        });

        const action = yield take([
            CREATE_PAGE.SUBMIT_VALIDATION_FAILED,
            CREATE_PAGE.SUBMIT_SUCCESS,
            CREATE_PAGE.SUBMIT_FAILURE,
        ]);

        if (action.type === CREATE_PAGE.SUBMIT_SUCCESS) {
            // do stuff on success
        }
    }
};


export const watchUpdatePageSubmit = function*() {
    while (true) {
        const submitAction = yield take(UPDATE_PAGE.SUBMIT);

        yield fork(doSubmit, updatePage, {
            apiFunction: '__SOME_API__',
            args: []
        });

        const action = yield take([
            UPDATE_PAGE.SUBMIT_VALIDATION_FAILED,
            UPDATE_PAGE.SUBMIT_SUCCESS,
            UPDATE_PAGE.SUBMIT_FAILURE,
        ]);

        if (action.type === UPDATE_PAGE.SUBMIT_SUCCESS) {
            // do stuff on success
        }
    }
};

export const updatePageReducer = submitReducer(UPDATE_PAGE, UPDATE_PAGE_STATE_KEY);

export const watchGetPageByIdRequest = function*() {
    yield takeLatest(GET_PAGE_BY_ID.REQUEST, function*() {
        // do staff
        yield call(doRequest, getPageById, {
            apiFunction: '__SOME_API__',
            args: []
        })
    });
};

export const watchFetchPagesPaginate = function*() {
    while (true) {
        const action = yield take([FETCH_PAGES.REQUEST, FETCH_PAGES.LOADMORE, FETCH_PAGES.REFRESH]);
        const data = yield select((state) => state.common[FETCH_PAGES_STATE_KEY]);

        yield fork(doRequest, fetchPages, {
            apiFunction: '__SOME_API__',
            args: [
                (action.type === FETCH_PAGES.LOADMORE) ? data.pagination.currentPage + 1 : 1
            ]
        }, {showLoading: action.type === FETCH_PAGES.REQUEST})
    }
};
