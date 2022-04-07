import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// FROM V11 GITHUB BRANCH:

// import React from 'react';
// import RepoPage from './content/RepoPage';
// import { shallow } from 'enzyme';

// describe('React Step 2 Tests', () => {
//   it('renders without crashing', () => {
//     shallow(<RepoPage />);
//   });

//   const wrapper = shallow(<RepoPage />);
//   it('contains a RepoTable', () => {
//     expect(wrapper.find('RepoTable').length).toBe(1);
//   });
// });