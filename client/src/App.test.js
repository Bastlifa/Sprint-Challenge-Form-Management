import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"
import "@testing-library/jest-dom/extend-expect"
import UserCards from './components/UserCards';
import RegistrationForm from './components/RegistrationForm'
import { getByText, fireEvent } from '@testing-library/react';



describe('<UserCards />', () =>
{
  it('renders without crashing', () => {
    rtl.render(<UserCards users={[{name:"testName", course:"testCourse"}]}/>)
  });

})

describe('<RegistrationForm />', () =>
{
  it('resets the username input on submit', () => {
    let regWrap = rtl.render(<RegistrationForm/>)
    const submitBtn = regWrap.getByTestId("submitBtn")
    fireEvent.click(submitBtn)
    expect(regWrap.getByTestId("usernameInput").value).toBe("")
  });

})