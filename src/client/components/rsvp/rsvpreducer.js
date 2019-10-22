
import * as actions from '../../redux/actions';

const initialState = {
    feedback: "",
    uploading: false,
    success: false,
    failed: false,
};

const rsvpreducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.RSVP_STARTED:
            return Object.assign({}, state, {
                uploading: true,
                success: false,
                failed: false
            });
        case actions.RSVP_SUCCESS:
            return Object.assign({}, state, {
                uploading: false,
                success: true,
                failed: false
            });
        case actions.RSVP_FAILED:
            return Object.assign({}, state, {
                uploading: false,
                success: false,
                failed: true
            });
        default:
            return state
    }
}
export default rsvpreducer;
