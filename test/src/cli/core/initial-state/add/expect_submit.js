import { makeInitialState } from 'react-native-core/api/paginate/reducer';
import { FETCH_PAGES_STATE_KEY, GET_PAGE_BY_ID_STATE_KEY, CREATE_PAGE_STATE_KEY } from './constants';

const initialState = {
    ...makeInitialState(FETCH_PAGES_STATE_KEY),
    [GET_PAGE_BY_ID_STATE_KEY]: null,
    [CREATE_PAGE_STATE_KEY]: null,
};

export default initialState;
