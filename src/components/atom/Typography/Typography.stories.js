import { storiesOf } from "@storybook/react";
import React, { Fragment } from "react";
import { withDocs } from "storybook-readme";

import Typography from "./Typography";
import readme from "./README.md";

storiesOf("Typography", module)
  .addDecorator(withDocs(readme))
  .add("a simple typography", () =>
    <Fragment>
      <Typography>Headline Text</Typography>
    </Fragment>);
