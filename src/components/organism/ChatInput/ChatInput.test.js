import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import ChatInput from "./ChatInput";

describe("ChatInput", () => {

  it("renders without props", () => {
    const tree = renderer.create(<ChatInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
