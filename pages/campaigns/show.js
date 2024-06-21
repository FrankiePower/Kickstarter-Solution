import React, { Component } from "react";
import { Card, Grid, GridColumn, Button, GridRow } from "semantic-ui-react";
import Layout from "../../components/layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/contribute";
import { Link } from "../../routes";

/* BigInt.prototype.toJSON = function () {
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
}; */

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    };
  }
  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestCount,
      approversCount,
    } = this.props;

    const items = [
      {
        header: manager.toString(),
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create requests to withdraw money",
        style: { overflowWrap: "break-word" },
      },
      {
        header: minimumContribution.toString(),
        meta: "Minimum Contribution(wei)",
        description:
          "You must contribute this minimum wei to become an approver",
      },
      {
        header: requestCount.toString(),
        meta: "Number of Requests",
        description:
          "A request tries to withdraw money from the contract. Requests must be approved by approvers",
      },

      {
        header: approversCount.toString(),
        meta: "Number of Approvers",
        description:
          "Number of people who have already donated to this campaign",
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance(ether)",
        description: "The balance is how much money this campaign has left",
      },
    ];
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Details</h3>
        <Grid>
          <GridRow>
            {" "}
            <GridColumn width={10}>{this.renderCards()}</GridColumn>
            <GridColumn width={6}>
              <ContributeForm address={this.props.address} />
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn>
              {" "}
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </GridColumn>
          </GridRow>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
