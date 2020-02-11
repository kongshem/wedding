import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import RsvpForm from './rsvpForm';
import _ from 'lodash';
import { SubmissionError } from 'redux-form';
import {saveRsvpDispatch} from "./rsvpapi.js";
function mapStateToProps(state) {
    return {
        test: state.rsvpreducer.test,
        uploading: state.rsvpreducer.uploading,
        success: state.rsvpreducer.success,
        failed: state.rsvpreducer.failed,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        submit: (data) => dispatch(saveRsvpDispatch(data)),
    }
};

class Rsvp extends React.Component {

    constructor(props) {
        super(props);
        this.validateAndSubmit = this.validateAndSubmit.bind(this);
    }
    validateCode(code){
        switch (code) {
            case "120":
            case "140":
            case "160":
            case "180":
            case "220":
            case "240":
            case "260":
            case "280":
                return true;
            default:
                return false;
        }
    }
    validateAndSubmit(values){
        if(!values.name){
            throw new SubmissionError({name: 'Mangler navn',_error: 'Feilet!'})
        } else if (!values.phone) {
            throw new SubmissionError({phone: 'Vi trenger ditt telefonnummer', _error: 'Feilet!'})
        } else if (!values.email) {
            throw new SubmissionError({email: 'Vi trenger din epostadresse', _error: 'Feilet!'})
        } else if(!values.email.includes('@')) {
            throw new SubmissionError({email: 'Ugyldig epostadresse', _error: 'Feilet!'})
        } else if (!values.attend){
                throw new SubmissionError({attend: 'Du må fortelle oss om du vil komme', _error: 'Feilet!'})
        }else if (!values.accomodation){
            throw new SubmissionError({accomodation: 'Du må fortelle oss om du trenger overnatting eller ikke', _error: 'Feilet!'})
        }else if (!values.code){
            throw new SubmissionError({code: 'Du må skrive inn koden du fikk av oss', _error: 'Feilet!'})
        }else if (!this.validateCode(values.code)){
            throw new SubmissionError({code: 'Du har tastet inn feil kode', _error: 'Feilet!'})
        } else {
            this.props.submit(values);
        }
    }

    render() {
        return (
            <div className="rsvp">
                <div className={"center"}>
                </div>
                <div className={"center"}>
                    <RsvpForm onSubmit={this.validateAndSubmit} uploading={this.props.uploading} />
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
