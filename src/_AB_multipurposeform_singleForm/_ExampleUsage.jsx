import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from "semantic-ui-react";
import validate from './validate'
import renderField from './renderField'
import MyTextArea from '../myFormInputs/MyTextArea'
import { Checkbox, Radio, Select, TextArea } from '../myFormInputs/myFormInputs'

/*----Note about regular text input fields:  You don't need any special mappings for semantic's <Form.Input> because it gets passed events from native redux inputs. The situation with other components is more complicated, because the redux <Field> relies on the native events.
ALSO - IMPORTANT!! -- To get React-Semantic-UI functionality to work with redux adn redux-form, YOU MUST use the React-Semantic-UI <Form> to wrap the redux-form <Field> elements. Don't use the redux-form <Form> element.-------*/

const SessionDetails = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
       <Field
          component={Checkbox}
          label="I agree to the Terms and Conditions"
          name="isAgreed"
        />
      <Field
      name='myTextAreaImport'
      label="Notes"
      placeholder='this came from MyTextArea.jsx'
      component={MyTextArea}
      />
      <div>
        <Button primary type="submit" className="next">
          Next
        </Button >
      </div>
      <Form.Group inline>
          <label>Quantity</label>

          <Field
            component={Radio}
            label="One"
            name="quantity"
            radioValue={1}
          />
          <Field
            component={Radio}
            label="Two"
            name="quantity"
            radioValue={2}
          />
          <Field
            component={Radio}
            label="Three"
            name="quantity"
            radioValue={3}
          />
        </Form.Group>

        <Field
          component={TextArea}
          label="About"
          name="about"
          placeholder="Tell us more about you..."
        />

        <Field
          component={Checkbox}
          label="I agree to the Terms and Conditions"
          name="isAgreed"
        />

        <Form.Group inline>
          <Form.Button primary>Submit</Form.Button>
          <Form.Button onClick={console.log('reset')}>Reset</Form.Button>
        </Form.Group>
        <Form.Group widths="equal">
          <Field
            component={Form.Input}
            label="First name"
            name="firstName"
            placeholder="First name"
          />
          <Field
            component={Form.Input}
            label="Last name"
            name="lastName"
            placeholder="Last name"
          />
          <Field
            component={Select}
            label="Gender"
            name="gender"
            options={[
              { key: "m", text: "Male", value: "male" },
              { key: "f", text: "Female", value: "female" }
            ]}
            placeholder="Gender"
          />
        </Form.Group>
    </Form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SessionDetails)