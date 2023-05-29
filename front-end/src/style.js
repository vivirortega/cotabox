import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  width: 100%;
  height: 10em;
  background-color: #00b8e2;
  position: fixed;
  top: 0px;
  left: 0px;
  gap: 1em;
  align-items: center;
  justify-content: center;

  input {
    width: 20em;
    height: 3.5em;
    border: none;
    border-radius: 2px;
  }

  btn {
    width: 10em;
    height: 3.1em;
    border: 2px solid #ffffff;
    border-radius: 2px;
    background-color: #00b8e2;
    color: #ffffff;
    font-weight: bold;
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-size: 1em;
  }

  btn:hover {
    background-color: #ffffff;
    color: #00b8e2;
  }
`

const Data = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    color: #333333;
    margin-top: 5em;
    font-size: 3em;
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-weight: bolder;
  }

  h2 {
    font-size: 1.3em;
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-weight: 400;
  }
`
export { Form, Data }
