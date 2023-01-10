import { ErrorMessageLayout } from "./error-message.layout";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

describe("ErrorMessageLayout", () => {
  it("Renders correctly", () => {
    const r = shallow(<ErrorMessageLayout></ErrorMessageLayout>);

    expect(toJson(r)).toMatchSnapshot();
  })
});
