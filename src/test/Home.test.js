import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Home from "../views/Home";
import logo from "../views/Home";
import { mount, configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

test("first logo is not crashing", () => {
  render(<Home />);
  const wrapper = mount(<Home />);
  wrapper.find("logo");
  expect(wrapper.contains(logo)).toEqual(true);
});

test("renders Home header", () => {
  const wrapper = shallow(<Home />);
  const home = <h2>Welcome to Burger House... </h2>;
  expect(wrapper.contains(home)).toEqual(true);
});

test("renders bottom header", () => {
  const wrapper = shallow(<Home />);
  const home = <h2>Burger House was established in 2022... </h2>;
  expect(wrapper.contains(home)).toEqual(true);
});
