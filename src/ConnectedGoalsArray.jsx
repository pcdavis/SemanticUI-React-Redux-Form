import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Form, Grid, Input, Segment, Label, Container } from "semantic-ui-react";
import MyTextArea from './myFormInputs/MyTextArea'

const renderField = ({
  input,
  label,
  width,
  type,
  meta: { touched, error }
}) => (

    <Form.Field error={touched && !!error} width={8}>
      <Input width={8} {...input} placeholder={label} type={type} />
    </Form.Field>

);

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
 <Container >

<button type="button" onClick={() => fields.push({})}>
        Add Member
      </button>
   
    
    {fields.map((member, index) => (


          <Grid key={index} columns={2}>

          <Grid.Column  >
            <Field
              name={`${member}.firstName`}
              type="textarea"
              rows='15'
              component={MyTextArea}
              label="First Name"
              placeholder="Client Goal"
            />
          </Grid.Column>
          <Grid.Column >
            <Field
              name={`${member}.lastName`}
              type="textarea"
              rows='5'
              component={MyTextArea}
              label="Last Name"
              placeholder="Notes"
            />
          </Grid.Column>

          
          </Grid>

      
    ))}

 </Container>
      
  
);

const ConnectedGoalsArray = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="members" component={renderMembers} />

      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

const mapState = state => {
  return { state };
};

export default connect(mapState)(
  reduxForm({
    form: "connectedGoalsArray"
  })(ConnectedGoalsArray)
);
