import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Header } from "semantic-ui-react";
import SessionDetails from "./SessionDetails";
import ServiceContext from "./ServiceContext";
import FollowUp from "./FollowUp";
import TreatmentGoals from "./TreatmentGoals";

class FullForm2 extends Component {
  render() {
    const { onSubmit } = this.props;
    console.log("​FullForm2 -> render -> props", this.props);
    return (
      <Container>
        <SessionDetails />
        <ServiceContext />
        <FollowUp />
        <TreatmentGoals />
      </Container>
    );
  }
}

// FullForm2.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// }

export default FullForm2;
