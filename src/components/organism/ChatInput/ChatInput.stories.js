import { storiesOf } from "@storybook/react";
import React, { Fragment } from "react";
import { withDocs } from "storybook-readme";

import ChatInput from "./ChatInput";
import readme from "./README.md";

storiesOf("ChatInput", module)
  .addDecorator(withDocs(readme))
  .add("a simple chat input", () =>
    <Fragment>
      <ChatInput placeholder="Type a message" />
    </Fragment>);
