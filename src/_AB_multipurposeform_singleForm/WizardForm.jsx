import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container} from "semantic-ui-react";
import SessionDetails from './SessionDetails'
import ServiceContext from './ServiceContext'
import FollowUp from './FollowUp'
import GeneralNotes from './GeneralNotes'
import TreatmentGoals from './TreatmentGoals'
import ConfirmationPage from './ConfirmationPage'
import ConfirmationPage2 from './ConfirmationPage2'
import FullForm2 from './FullForm2'

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
		console.log("​WizardForm -> render -> page", page)
    return (
      <Container>

        {page === 1 && <SessionDetails onSubmit={this.nextPage} />}
        {page === 2 && (
          <FullForm2
          previousPage={this.previousPage}
          onSubmit={this.nextPage}
          />
          )}
        {page === 3 && (
          <FollowUp
          previousPage={this.previousPage}
          onSubmit={this.nextPage}
          />
          )}
        {page === 4 && (
          <TreatmentGoals
          previousPage={this.previousPage}
          onSubmit={this.nextPage}
          />
          )}
        {page === 5 && (
          <FullForm2
          previousPage={this.previousPage}
          onSubmit={onSubmit}
          />
          )}

          </Container>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm