import React from "react";
import Header from "./header";
import { Container } from "semantic-ui-react";

const layout = (props) => {
  return (
    <Container>
      <div>
        <Header />
        {props.children}
      </div>
    </Container>
  );
};
export default layout;
