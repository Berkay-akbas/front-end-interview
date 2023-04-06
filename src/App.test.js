import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// renders the form
// renders the form with the correct label
// renders the form with the correct input type
// renders the form with the correct id

it('renders the form', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('FormItem').length).toEqual(1);
});

it('renders the form with the correct label', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('FormItem').prop('label')).toEqual('Name');
});