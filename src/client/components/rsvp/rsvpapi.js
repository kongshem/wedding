import * as actions from '../../redux/actions';
import {reset} from 'redux-form';

export function saveRsvpDispatch(data) {
    return (dispatch) => {
        dispatch({type: actions.RSVP_STARTED});
        console.log("APIIIII med dispatch!");
        console.log(data);
        postToSheets(data)
            .done(function (resp, textStatus, jqXHR) {
                console.log(resp);
                success(dispatch);
            })
            .fail((jqXHR, textStatus, errorThrown) => {
                if (jqXHR.status === 200){
                    success(dispatch);
                }else{
                    dispatch({type: actions.RSVP_FAILED});
                }
        });

    }
}
function success(dispatch) {
    dispatch({type: actions.RSVP_SUCCESS});
    dispatch(reset('rsvpForm'));
}

function postToSheets(data){
    const post = 'https://script.google.com/macros/s/AKfycbzeWnDm39-6Gf6B-mo86kSsTut1sWjAvjoeWKAgxXaJrT4xgfc/exec';
    const thedata = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        attend: data.attend,
        accomodation: data.accomodation,
        allergies: data.allergies,
        song_suggestions: data.song_suggestions,
    };
    return $.ajax({
        type: 'GET',
        url: post,
        contentType: 'application/json; charset=UTF-8',
        dataType: 'jsonp',
        crossDomain: true,
        data: thedata
    });
}
