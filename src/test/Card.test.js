import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Card from '../Card';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should be an object', () => {
    expect(typeof wrapper).toEqual("object");
  });

  it('should render three button components', () => {
    expect(wrapper.find('button').length).toEqual(3);
  });
  
  it('should render the props of title body and quality passed down to it', () => {
    wrapper = mount(
      <Card 
        key='0'
        title={'My Idea'}
        body={'this is the body'}
        quality={'Swill'} 
      />
    );

    expect(wrapper.find('h3').length).toEqual(2);
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('p').text()).toEqual('this is the body')
  });

  // should this method be tested in app?

  // it('should increase quality when the upvote button is clicked', ()=> {
  //   wrapper = mount(
  //     <Card 
  //       key='0'
  //       title={'My Idea'}
  //       body={'this is the body'}
  //       quality={'Swill'} 
  //       upVote={}
  //     />
  //   );
  //   console.log(wrapper)
  //   wrapper.find('.upVote').simulate('click');
  // });

});