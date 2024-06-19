import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x6b251F4CBE0fB01961fC6FBD45FDB29c2c2234Ad"
);

export default instance;
