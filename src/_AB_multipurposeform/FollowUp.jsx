import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import { Form, Button, Container, Header, Icon } from "semantic-ui-react";
import { Select, TextArea } from '../myFormInputs/myFormInputs'


const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const FollowUp = props => {
  const { handleSubmit, previousPage } = props
  return (
    <Container>
       <Header as='h2'>
    <Icon name='sticky note outline' />
    <Header.Content>
      Follow Up Notes
      <Header.Subheader>Information regarding next supervision session</Header.Subheader>
    </Header.Content>
  </Header>


    <Form onSubmit={handleSubmit}>
       <Form.Group inline>
          <Field
            component={Select}
            label="Follow up actions"
            name="followUpActions"
            options={[
              { key: "followUp_1", text: "Make stimuli", value: "Make stimuli" },
              { key: "followUp_2", text: "Design protocols", value: "Design protocols" },
              { key: "followUp_3", text: "Design programs", value: "Design programs" },
              { key: "followUp_4", text: "Adjust prompt levels", value: "Adjust prompt levels" },
              { key: "followUp_5", text: "Add new targets", value: "Add new targets" },
              { key: "followUp_6", text: "Adjust PBSP", value: "Adjust PBSP" }
            ]}
            placeholder="Select..."
          />
          </Form.Group>

          <Form.Group widths="equal" >

          <Field
          component={TextArea}
          autoHeight={true}
          label="Scheduling"
          name="scheduling"
          placeholder="Provide details about any upcoming scheduling issues"
        />
          <Field
          component={TextArea}
          autoHeight={true}
          label="Coordination of care"
          name="careCoordination"
          placeholder="Are there any coordination of care issues?"
        />
                  </Form.Group>

<Form.Group widths="equal" >
          <Field
          component={TextArea}
          autoHeight={true}
          label="Caregivers and RBT concerns regarding barriers and safety"
          name="safetyConcerns"
          placeholder="Detail any concerns"
        />
          <Field
          component={TextArea}
          autoHeight={true}
          label="Peer socialization"
          name="peerSocialization"
          placeholder="Describe any peer socialization opportunities"
        />
          </Form.Group>

        <Form.Group inline>
        <Form.Button basic onClick={previousPage} content='Previous' icon='left arrow' labelPosition='left'  />
          <Form.Button primary content='Next' icon='right arrow' labelPosition='right'  />
        </Form.Group>
    </Form>
    </Container>
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(FollowUp)