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
    validateAndSubmit(values){
        if(!values.firstname){
            throw new SubmissionError({firstname: 'Mangler fornavn',_error: 'Feilet!'})
        } else if(!values.lastname){
            throw new SubmissionError({lastname: 'Mangler etternavn',_error: 'Feilet!'})
        } else if (!values.email) {
            throw new SubmissionError({email: 'Vi trenger din epostadresse', _error: 'Feilet!'})
        } else if(!values.email.includes('@')) {
            throw new SubmissionError({email: 'Ugyldig epostadresse', _error: 'Feilet!'})
        }else if (!values.noaccomodation && !values.sleepfriday && !values.sleepsaturday){
            throw new SubmissionError({noaccomodation: 'Du må fortelle oss om du trenger overnatting eller ikke', _error: 'Feilet!'})
        } else {
            console.log("Alt ok med skjemaet!");
            console.log(values);
            this.props.submit(values);
        }
    }

    render() {
        return (
            <div className="rsvp">
                <p>Vennligst gi oss ditt svar innen 31. mars 2020. Vi har mulighet til å stille med overnatting i enkle hytter på Lognvik Gård og nabogården for 200kr per pers. Dette kan vippses til Magnus (41565906) eller Kathrine (48222795). Huk av dersom du ønsker dette.</p>
                <RsvpForm onSubmit={this.validateAndSubmit} />
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
