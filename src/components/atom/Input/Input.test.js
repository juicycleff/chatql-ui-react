import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import Input from "./Input";

describe("Input", () => {

  it("renders without props", () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
