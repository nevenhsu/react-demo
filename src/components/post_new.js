import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Dropzone from 'react-dropzone'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { createPost, CREATE_POSTS } from '../actions'

class PostsNew extends Component {

    renderField(field) {
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : '' }`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <TextField
                  label="text"
                    className="form-control"
                    type="text"
                    {...field.input}
                />

                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

  renderDropzoneInput = (field) => {
    const files = field.input.value;
    return (
      <div>
        <Dropzone
          name={field.name}
          onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
        >
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
        {files && Array.isArray(files) && (
          <ul>
            { files.map((file, i) => <li key={i}>{file.name}</li>) }
          </ul>
        )}
      </div>
    );
  }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name='title'
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name='categories'
                    component={this.renderField}
                />
                <Field
                    label="Content"
                    name='content'
                    component={this.renderField}
                />

              <Field name="logo" component={this.renderDropzoneInput}/>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn mx-2">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};


    if (!values.title) {
        errors.title = 'Enter a title!'
    }

    if (!values.categories) {
        errors.categories = 'Enter some categories!'
    }

    if (!values.content) {
        errors.content = 'Enter some content!'
    }

    return errors;
}



export default reduxForm({
    form: 'PostsNewForm',
    validate
})(
    connect(null, {createPost})(PostsNew)
);

