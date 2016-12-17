import {combineReducers} from 'redux';
// naming variable "courses" means it will be referenced as "state.courses"
import courses from './courseReducer';

// note use of shorthand property syntax (ES2015)
const rootReducer = combineReducers({
  courses
});

export default rootReducer;
