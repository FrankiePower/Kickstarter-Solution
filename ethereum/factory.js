import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x59942B4Ef05A1eD26Ef2e3126dAf1027825BDEA8"
);

export default instance;
