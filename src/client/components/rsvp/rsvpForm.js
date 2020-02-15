import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CircularProgress from "@material-ui/core/CircularProgress";

const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
    <div className="form-group">
        <input {...input} type={type} />
        {touched && error && <span className={'error'}>{error}</span>}
    </div>
);
const renderSelectField = ({ input, type, meta: { touched, error }, children }) => (
    <React.Fragment>
        <select {...input}>
            {children}
        </select>
        {touched && error && <span className={'error'}>{error}</span>}
    </React.Fragment>
)
const required = <span className="obligatorisk">*</span>

const RsvpForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit} className={"theform"}>
            <div className={"rsvp-form"}>
                <div className={"left"}>
                    <label className="titleLabel">{required}Fullt navn</label>
                    <Field name="name" component={renderField} type="text" placeholder="Fullt navn" />
                    <label className="titleLabel">{required}Tlf</label>
                    <Field name="phone" component={renderField} type="text" placeholder="Tlf" />
                    <label className="titleLabel">{required}E-post</label>
                    <Field name="email" component={renderField} type="text" placeholder="E-post"/>
                </div>
                <div className={"right"}>
                    <label className="titleLabel">{required}Svar</label>
                    <div className="form-group">
                        <Field name="attend" component={renderSelectField}>
                                <option></option>
                                <option value="fredag">Kommer fredag</option>
                                <option value="lørdag">Kommer lørdag</option>
                                <option value="ikke">Kan dessverre ikke komme</option>
                        </Field>
                    </div>
                    <label className="titleLabel">{required}Overnatting</label>
                    <div className="form-group">
                        <Field name="accomodation" component={renderSelectField}>
                            <option></option>
                            <option value="JA">Ønsker overnatting</option>
                            <option value="NEI">Jeg ordner overnatting selv</option>
                        </Field>
                    </div>
                </div>
            </div>
            <div className={"all"}>
                <label className="titleLabel textLabel">Allergier</label>
                <div className="form-group">
                    <Field name="allergies" component="textarea" />
                </div>
            </div>
            <div className={"all"}>
                <label className="titleLabel textLabel">Hvilke sanger danser du best til?</label>
                <div className="form-group">
                    <Field name="song_suggestions" component="textarea" />
                </div>
            </div>
            <div className={"all"}>
                <label className="titleLabel">{required}Kode du har fått av oss på sms</label>
                <Field name="code" component={renderField} type="text" placeholder="Kode"/>
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
