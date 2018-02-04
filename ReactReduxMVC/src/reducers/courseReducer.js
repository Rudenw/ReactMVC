import * as types from '../actions/actionTypes';
import initialState from './initialState';

function sortByTitle(a, b) {
    var aTitle = a.title.toLowerCase();
    var bTitle = b.title.toLowerCase();
    return ((aTitle < bTitle) ? -1 : ((aTitle > bTitle) ? 1 : 0));
}

export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses.sort(sortByTitle);
        case types.CREATE_COURSE_SUCCESS:
            return [...state, Object.assign({}, action.course)].sort(sortByTitle);
        case types.UPDATE_COURSE_SUCCESS:
            return [...state.filter(course => course.id !== action.course.id), Object.assign({}, action.course)].sort(sortByTitle);
        default:
            return state;
    }
}