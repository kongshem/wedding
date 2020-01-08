import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancers = compose(
    applyMiddleware(thunk),
    //composeWithDevTools()
);

const store = createStore(
    rootReducer,
    composedEnhancers
);
export default store;
