import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import App from '../App';
import LocalStorageMock from './mockStorage'

global.localStorage = new LocalStorageMock;

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('It should have a default state of cardArray set to an empty array', () => {
    expect( wrapper.state('cardArray') ).toEqual([null]);
  });

  it('should render Header and StoredCards', ()=> {
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('StoredCards').length).toEqual(1); 
  })

});