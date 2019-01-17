import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("./config/i18n");

describe("<Comp />", () => {
  it("must match the snapshot", () => {
    const Comp = require("./Comp").default;
    const wrapper = shallow(<Comp />);

    expect(wrapper).toMatchSnapshot();
  });
});
