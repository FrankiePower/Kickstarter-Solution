import React from "react";
import { Menu, MenuItem, MenuMenu } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu style={{ marginTop: "20px" }}>
      <MenuItem>CrowdCoin</MenuItem>
      <MenuMenu position="right">
        <MenuItem>Campaigns</MenuItem>
        <MenuItem>+</MenuItem>
      </MenuMenu>
    </Menu>
  );
};

export default Header;
