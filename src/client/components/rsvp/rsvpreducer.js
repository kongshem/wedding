
import * as actions from '../../redux/actions';

const initialState = {
    test: "test"
};

const rsvpreducer = (state = [], action) => {
    switch (action.type) {
        case actions.TEST:
            return Object.assign({}, state, {
                test: "HEI"
            });
        default:
            return state
    }
}
export default rsvpreducer;