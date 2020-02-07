import * as actions from '../../redux/actions';
import {reset} from 'redux-form';

export function saveRsvpDispatch(data) {
    return (dispatch) => {
        dispatch({type: actions.RSVP_STARTED});
        var isSafari = window.safari !== undefined;
        postToSheets(data)
            .done(function (resp, textStatus, jqXHR) {
                success(dispatch);
            })
            .fail((jqXHR, textStatus, errorThrown) => {
              console.log("FAILED!!!!");
              console.log(jqXHR);
              console.log(textStatus);
              console.log(errorThrown);
                if (jqXHR.status === 200){
                    success(dispatch);
                }else{
                    dispatch({type: actions.RSVP_FAILED});
                }
        }).complete((jqXHR) => {
        });
        if (isSafari) {
          console.log("Takk for at du bruker safari, din dritt!");
          setTimeout(function(){
            success(dispatch);
          },1500);
        }

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
        type: 'POST',
        url: post,
        contentType: 'application/json; charset=UTF-8',
        dataType: 'jsonp',
        crossDomain: true,
        data: thedata
    });
}
