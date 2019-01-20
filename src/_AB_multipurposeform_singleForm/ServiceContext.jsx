import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import { Form, Divider, Container, Header, Icon } from "semantic-ui-react";
import { Radio, Select } from '../myFormInputs/myFormInputs'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const ServiceContext = props => {
  const { handleSubmit, previousPage } = props
  return (
    <Container>
       <Header as='h2'>
    <Icon name='street view' />
    <Header.Content>
      Service Context
      <Header.Subheader>Context in which services were provided</Header.Subheader>
    </Header.Content>
    <hr/>
  </Header>


    <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">

          <Field
            component={Form.Input}
            label="Others Present"
            name="othersPresent"
            placeholder="List other people present at time of service"
          />

          <Field
            component={Select}
            label="Location"
            name="locationOfServices"
            options={[
              { key: "home", text: "Home", value: "home" },
              { key: "office", text: "Office", value: "office" },
              { key: "community", text: "Community", value: "community" }
            ]}
            placeholder="Select..."
          />
          </Form.Group>

          <Form.Group inline>
          <label>Caregivers present?</label>
          <Field
            component={Radio}
            label="Yes"
            name="caregiversPresent"
            radioValue={true}
          />
          <Field
            component={Radio}
            label="No"
            name="caregiversPresent"
            radioValue={false}
          />
          </Form.Group>

          <Form.Group inline>
          <label>Patient present?</label>
          <Field
            component={Radio}
            label="Yes"
            name="patientPresent"
            radioValue={true}
          />
          <Field
            component={Radio}
            label="No"
            name="patientPresent"
            radioValue={false}
          />
          </Form.Group>

          <Form.Group inline>
          <label>Was service provided face-to-face?</label>
          <Field
            component={Radio}
            label="Yes"
            name="faceToFace"
            radioValue={true}
          />
          <Field
            component={Radio}
            label="No"
            name="faceToFace"
            radioValue={false}
          />
          </Form.Group>


    </Form>
    <Divider hidden />
    </Container>
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(ServiceContext)