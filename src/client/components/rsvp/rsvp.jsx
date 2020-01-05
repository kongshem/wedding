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
    validateAndSubmit(values){
        if(!values.name){
            throw new SubmissionError({name: 'Mangler navn',_error: 'Feilet!'})
        } else if (!values.email) {
            throw new SubmissionError({email: 'Vi trenger din epostadresse', _error: 'Feilet!'})
        } else if(!values.email.includes('@')) {
            throw new SubmissionError({email: 'Ugyldig epostadresse', _error: 'Feilet!'})
        }else if (!values.accomodation){
            throw new SubmissionError({accomodation: 'Du må fortelle oss om du trenger overnatting eller ikke', _error: 'Feilet!'})
        } else if (!values.attend){
                throw new SubmissionError({attend: 'Du må fortelle oss om du vil komme', _error: 'Feilet!'})
        } else {
            this.props.submit(values);
        }
    }

    render() {
        return (
            <div className="rsvp">

                <div className={"center"}>
                    <span className={"heading"}>
                        RSVP
                    </span>
                </div>
                <div className={"center"}>
                    <RsvpForm onSubmit={this.validateAndSubmit} uploading={this.props.uploading} />
                </div>
                {/*<div className={"center"}>
                    <p>Vennligst gi oss ditt svar innen 31. mars 2020. Vi har mulighet til å stille med overnatting i enkle hytter på Lognvik Gård og nabogården for 200kr per pers. Dette kan vippses til Magnus (41565906) eller Kathrine (48222795). Huk av dersom du ønsker dette.</p>
                </div>*/}
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
