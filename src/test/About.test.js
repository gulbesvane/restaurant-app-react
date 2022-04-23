import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { mount, configure, shallow } from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import About from '../views/About';

configure({adapter: new Adapter()})

test("renders without crashing", () => { 
    const wrapper = mount (<About/>)
})

test("renders Our Story header", () => {
    const wrapper = shallow(<About />);
    const story = <h2>Our Story</h2>;
    expect(wrapper.contains(story)).toEqual(true);
  });
  
  test("renders Our Promise header", () => {
    const wrapper = shallow(<About />);
    const promise = <h2>Our Promise</h2>;
    expect(wrapper.contains(promise)).toEqual(true);
  });