import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import Typography from "./Typography";

describe("Button", () => {

  it("renders without props", () => {
    const tree = renderer.create(<Typography />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
