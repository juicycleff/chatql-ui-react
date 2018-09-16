import { storiesOf } from "@storybook/react";
import React, { Fragment } from "react";
import { withDocs } from "storybook-readme";

import Input from "./Input";
import readme from "./README.md";

storiesOf("Input", module)
  .addDecorator(withDocs(readme))
  .add("a simple input", () =>
    <Fragment>
      <Input placeholder="Type a message" />
    </Fragment>);
