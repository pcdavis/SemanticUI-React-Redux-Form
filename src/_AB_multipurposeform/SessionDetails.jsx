import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Container, Header, Icon } from "semantic-ui-react";
import validate from './validate'
import { Select } from '../myFormInputs/myFormInputs'
/*---See ExampleUsage.jsx for details on using react-semantic-ui with redux-form -------*/
//NOTE: This uses Form.Button and Form.Input - which affects their functionalilty

const SessionDetails = props => {
  const { handleSubmit } = props
  return (
    <Container>
       <Header as='h1'>
    <Icon name='settings' />
    <Header.Content>
      Session Details
      <Header.Subheader>Basic details of the supervision session</Header.Subheader>
    </Header.Content>
  </Header>


    <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Field
            component={Form.Input}
            label="First name"
            name="firstName"
            placeholder="Patient's first name"
          />
          <Field
            component={Form.Input}
            label="Last name"
            name="lastName"
            placeholder="Patient's last name"
          />
          <Field
            component={Form.Input}
            label="D.O.B."
            name="dob"
            placeholder="Patient's date of birth"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Field
            component={Select}
            label="Supervising BCBA"
            name="bcba"
            options={[
              { key: "11729072", value: "Allison Laurendeau #11729072", text: "Allison Laurendeau" },
              { key: "11833949", value: "Amber Bouvier #11833949", text: "Amber Bouvier" },
              { key: "1073292", value: "Cathy Booth #1073292", text: "Cathy Booth" },
              { key: "11521156", value: "Courtney Jameson #11521156", text: "Courtney Jameson" },
              { key: "11834061", value: "Heather Parilla #11834061", text: "Heather Parilla" },
              { key: "11210221", value: "Jennifer Post #11210221", text: "Jennifer Post" },
              { key: "11313300", value: "Kerri McGilvreay #11313300", text: "Kerri McGilvreay" },
              { key: "11829542", value: "Mary Frugard #11829542", text: "Mary Frugard" },
              { key: "11832185", value: "Melanie DeFlumeri #11832185", text: "Melanie DeFlumeri" },
              { key: "1073290", value: "Nicole Curran #1073290", text: "Nicole Curran" },
              { key: "11520613", value: "Samantha Wolf #11520613", text: "Samantha Wolf" },
              { key: "1073430", value: "Thea Davis  #1073430", text: "Thea Davis" }
            ]}
            placeholder="Select..."
          />
          <Field
            component={Form.Input}
            label="Date of Service"
            name="serviceDate"
            placeholder="Date of service"
          />
          <Field
            component={Form.Input}
            label="Start Time"
            name="startTime"
            placeholder="Start Time"
          />
          <Field
            component={Form.Input}
            label="End Time"
            name="endTime"
            placeholder="End Time"
          />
          <Field
            component={Select}
            label="CPT Code"
            name="cpt"
            options={[
              { key: "97155-1", text: "97155: Protocol Modification", value: "97155" },
              { key: "97155-2", text: "97155: Direction of BT", value: "97155" },
              { key: "97156", text: "97156: Family / Caregiver Training", value: "97156" },
              { key: "97157", text: "97157: Multiple Family / Caregivers Training", value: "97157" },
              { key: "97158", text: "97158: Group Protocol Modification", value: "97158" }
            ]}
            placeholder="Select..."
          />
        </Form.Group>

        <Form.Group inline>
          <Form.Button content='Next' icon='right arrow' labelPosition='right' primary />
        </Form.Group>
    </Form>
    </Container>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SessionDetails)