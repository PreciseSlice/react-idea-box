import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import StoredCards from '../StoredCards';

describe('StoredCards', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<StoredCards cardArray={[
        {title: 'Title 1', body: 'This is the body.', quality: 'Swill', id: 1516493309426},
        {title: 'Title 2', body: 'This is another body.', quality: 'Swill', id: 1516493321802},
        {title: 'Title 3', body: 'This is the third body.', quality: 'Swill', id: 1516493332946}
      ]} 
    />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should be an object', () => {
    expect(typeof wrapper).toEqual("object");
  });

  it('should render 3 Card components since three cards where passed down', () => {
    expect(wrapper.find('Card').length).toEqual(3);
  })

  it('should mount 3 Card components since 3 where passed down', () => {

    expect(wrapper.find('p').length).toEqual(3);
    expect(wrapper.find('h3').length).toEqual(6);
    expect(wrapper.find('p').first().text()).toEqual('This is the body.')
  })

});