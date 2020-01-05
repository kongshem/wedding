import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CircularProgress from "@material-ui/core/CircularProgress";

const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
    <div className="form-group">
        <input {...input} type={type} />
        {touched && error && <span className={'error'}>{error}</span>}
    </div>
);

const RsvpForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit} className={"theform"}>
            <div className={"rsvp-form"}>
                <div className={"left"}>
                    <label className="titleLabel">Fullt navn</label>
                    <Field name="name" component={renderField} type="text" placeholder="Fullt navn" />
                    <label className="titleLabel">Tlf</label>
                    <Field name="phone" component={renderField} type="text" placeholder="Tlf" />
                    <label className="titleLabel">E-post</label>
                    <Field name="email" component={renderField} type="text" placeholder="E-post"/>
                </div>
                <div className={"right"}>
                    <label className="titleLabel">Svar</label>
                    <div className="form-group">
                        <Field name="attend" component={"select"}>
                                <option></option>
                                <option value="fredag">Kommer fredag</option>
                                <option value="lørdag">Kommer lørdag</option>
                                <option value="ikke">Kan dessverre ikke komme</option>
                        </Field>
                    </div>
                    <label className="titleLabel">Overnatting</label>
                    <div className="form-group">
                        <Field name="accomodation" component={"select"}>
                            <option></option>
                            <option value="JA">Ønsker overnatting</option>
                            <option value="NEI">Jeg ordner overnatting selv</option>
                        </Field>
                    </div>
                </div>
            </div>
            <div className={"all"}>
                <label className="titleLabel">Allergier</label>
                <div className="form-group">
                    <Field name="allergies" component="textarea" />
                </div>
            </div>
            <div className={"all"}>
                <label className="titleLabel">Hvilken sang danser du best til?</label>
                <div className="form-group">
                    <Field name="song_suggestions" component="textarea" />
                </div>
            </div>
            <div className="form-group">
                <button type="submit" disabled={pristine || submitting}>
                    {!props.uploading &&
                        "Send svar"
                    }
                    {props.uploading &&
                        <CircularProgress />
                    }
                </button>

            </div>
        </form>
    );
};

export default reduxForm({
    form: 'rsvpForm',
})(RsvpForm);
