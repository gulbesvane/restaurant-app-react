import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { mount, configure, shallow } from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import About from '../views/About';

configure({adapter: new Adapter()})

test('renders without crashing', () => { 
    const wrapper = mount (<About/>)
})