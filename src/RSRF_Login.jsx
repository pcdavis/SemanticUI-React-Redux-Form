import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Icon, Button } from 'semantic-ui-react';
import { LabelInputField, CheckboxField } from 'react-semantic-redux-form';
 
const RSRF_Login = props => {
 
  return (
 
    <Form >
      <Field name='username' component={LabelInputField}
      label={{ content: <Icon color='blue' name='user' size='large'/> }}
      labelPosition='left'
      placeholder='Username'/>
 
      <Field name='password' component={LabelInputField}
      type='password'
      label={{ content: <Icon color='blue' name='lock' size='large'/> }}
      labelPosition='left'
      placeholder='Password'/>
 
      <Form.Group>
      <Field name='remember' component={CheckboxField}
      label='Stay sign in'/>
 
      </Form.Group>
      <Form.Field control={Button} primary
      type='submit'>
      Login
      </Form.Field>
 
    </Form>
  )
}
 
export default reduxForm({
    form: 'RSRF_Login',	// a unique identifier for this form
 
})(RSRF_Login)