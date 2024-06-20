import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Layout from "../../components/layout";

class CampaignShow extends Component {
  static async getInitialProps() {
    props.query.address;

    return {};
  }
  renderCampaignDetails() {
    const items = this.props.campaignBalance;
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Details</h3>
      </Layout>
    );
  }
}

export default CampaignShow;
