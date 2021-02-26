import * as React from "react";
import styled from "styled-components";
import { render } from "react-dom";

const Item = styled.div.attrs({ className: "foo" })``;
const Item2 = styled(Item).attrs({ className: "bar" })``;

render(<>
  <Item2>
    content
  </Item2>
</>, document.body);
