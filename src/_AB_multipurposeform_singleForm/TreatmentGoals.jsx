import React, { Fragment } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'
import { Form, Button, Container, Header, Icon, Segment, Label, Divider } from "semantic-ui-react";
import { Select, TextArea } from '../myFormInputs/myFormInputs'


const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false


  const renderGoals = ({ fields, meta: { error, submitFailed } }) => (
    <Fragment>
      {fields.map((goal, index) => (

          <Segment padded key={index}>
            <Label attached="top left">Goal #{index + 1}</Label>

          <Form.Group inline>
            <Field
            component={Select}
            label="Supervisor Action"
            name={`${goal}.supervisorAction`}
            options={[
                { key: "goalType_1", text: "Modified programs", value: "Modified programs" },
              { key: "goalType_2", text: "Modeled", value: "Modeled" },
              { key: "goalType_3", text: "Direction of BT", value: "Direction of BT" },
              { key: "goalType_4", text: "IOA / Fidelity ", value: "IOA / Fidelity" },
              { key: "goalType_5", text: "Not observed ", value: "Not observed" }
            ]}
            placeholder="Select..."
          />
            <Button
                  icon="trash alternate"
                  size="tiny"
                  color="red"
                  type="button"
                  title="Delete"
                  style={{height:'35px', position: 'absolute', right: '3%'}}
                  onClick={() => fields.remove(index)}
                />
          </Form.Group>


            <Form.Group widths='equal'>

                <Field
                  name={`${goal}.description`}
                  type="text"
                  autoHeight={true}
                  component={TextArea}
                  label="Goal"
                  placeholder="Enter the patient goal"
                />

                <Field
                  name={`${goal}.notes`}
                  type="text"
                  autoHeight={true}
                  component={TextArea}
                  label="Notes"
                  placeholder="Additional Notes"
                />

            </Form.Group>


          </Segment>

      ))}
      <br />
      <Button primary type="button" onClick={() => fields.push({})}>
        New Goal
      </Button>
      {submitFailed && error && <span>{error}</span>}
    </Fragment>
  );

const TreatmentGoals = props => {
  const { handleSubmit, previousPage } = props
  return (
    <Container>
       <Header as='h2'>
    <Icon name='chart bar' />
    <Header.Content>
      Treatment Goals
      <Header.Subheader>Information regarding next supervision session</Header.Subheader>
    </Header.Content>
    <hr/>
  </Header>


    <Form onSubmit={handleSubmit}>



          <FieldArray name="goals" component={renderGoals} />




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
})(TreatmentGoals)