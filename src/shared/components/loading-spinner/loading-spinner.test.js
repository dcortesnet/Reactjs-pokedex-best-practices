import { LoadingSpinnerLayout } from "./loading-spinner.layout";
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

describe("LoadingSpinnerLayout", () => {
  it("Renders correctly", () => {
    const r = shallow(<LoadingSpinnerLayout></LoadingSpinnerLayout>);

    expect(toJson(r)).toMatchSnapshot();
  })
});
