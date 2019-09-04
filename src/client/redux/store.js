import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './rootReducer';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(
    composeWithDevTools(),
    middlewareEnhancer
);

const store = createStore(
    rootReducer,
    composedEnhancers
);
export default store;