import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import factory from "../ethereum/factory";

/* import layout from "../components/layout"; */

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }

  renderButton() {}

  render() {
    return (
      <div>
        <h2>Open Campaigns</h2>
        {this.renderCampaigns()}
        <Button
          content="Create Campaign"
          icon="add circle"
          labelPosition="right"
          primary
        />
      </div>
    );
  }
}

export default CampaignIndex;
