import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="form-group">
        <label className="titleLabel">{label}</label>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
    </div>
);
const renderRadioField = ({ input, label, type, meta:{touched, error}}) => (
    <div className={"form-group"}>
        <label className="titleLabel">{label}</label>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
    </div>
)
const renderCheckboxField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="form-group">
        <label className="titleLabel">{label}</label>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
    </div>
);

const RsvpForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="firstname" component={renderField} type="text" placeholder="Fornavn" label="Fornavn"/>
            <Field name="lastname" component={renderField} type="text" placeholder="Etternavn" label="Etternavn" />
            <Field name="phone" component={renderField} type="text" placeholder="Tlf" label="Tlf"/>
            <Field name="email" component={renderField} type="text" placeholder="E-post" label="E-post"/>
            <Field name="attend" component={renderRadioField} type="radio" value={"fredag"} label="Kommer fredag"/>
            <Field name="attend" component={renderRadioField} type="radio" value={"lørdag"} label="Kommer lørdag"/>
            <Field name="attend" component={renderRadioField} type="radio" value={"ikke"} label="Deltar ikke"/>
            <Field name="sleepfriday" component={renderCheckboxField} type="checkbox" label="Ønsker overnatting" /> Fredag
            <Field name="sleepsaturday" component={renderCheckboxField} type="checkbox" /> Lørdag
            <Field name="noaccomodation" component={renderCheckboxField} type="checkbox" />Jeg ordner overnatting selv
            <div className="form-group">
                <label className="titleLabel">Allergier</label>
                <Field name="allergies" component="textarea" />
            </div>
            <div className="form-group">
                <label className="titleLabel">Hvilken sang danser du best til?</label>
                <Field name="song_suggestions" component="textarea" />
            </div>
            <div className="form-group">
                <label className="titleLabel"></label>
                <button type="submit" disabled={pristine || submitting}>Rsvp</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Nullstill</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'rsvpForm',
})(RsvpForm);
