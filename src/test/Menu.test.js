import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { mount, configure, shallow } from 'enzyme';
import React from 'react';
import Menu from '../views/Menu';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MenuItem from '../components/MenuItem';


configure({adapter: new Adapter()})

it("renders Menu page without crashing", () => {
  render(<Menu />);
});

test('should render a button with name all', () => {
  render(<Menu />)
  const allButton = screen.getByRole('button', { name: /all/i })
})

test('should render a button with name burgers', () => {
  render(<Menu />)
  const allButton = screen.getByRole('button', { name: /burgers/i })
})

test('should render a button with name drinks', () => {
  render(<Menu />)
  const allButton = screen.getByRole('button', { name: /drinks/i })
})

test('should render a button with name sides', () => {
  render(<Menu />)
  const allButton = screen.getByRole('button', { name: /sides/i })
})

test('should render a button with name desserts', () => {
  render(<Menu />)
  const allButton = screen.getByRole('button', { name: /desserts/i })
})

test("renders Menu header", () => {
  const wrapper = shallow(<Menu />);
  const menu = <h2>menu</h2>;
  expect(wrapper.contains(menu)).toEqual(true);
});

const menuItems = [
  {
    id: 1,
    title: "house special",
    category: "burgers",
    price: 12.15,
    desc: `Bacon, cheese, pickles, tomato, lettuce, egg`,
  },
  {
    id: 2,
    title: "house special",
    category: "burgers",
    price: 12.15,
    desc: `Bacon, cheese, pickles, tomato, lettuce, egg`,
  }
]

describe("", () => {
  it("MenuItem.js accepts menuItems props", () => {
    const wrapper = mount(<MenuItem allItems={menuItems} />);
    expect(wrapper.props().allItems).toEqual(menuItems);
  });
  it("props contains description of the products", () => {
    const wrapper = mount(<MenuItem allItems={menuItems} />);
    const value = wrapper.find("p");
    expect(wrapper.text()).toBe(`house special£12.15Bacon, cheese, pickles, tomato, lettuce, egghouse special£12.15Bacon, cheese, pickles, tomato, lettuce, egg`)
  });
});
