import styled from "styled-components";

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
        height: 3.50em;
        border: none;
        border-radius: 2px;
    }

    button {
        width: 10em;
        height: 3.10em;
        border: 2px solid #ffffff;
        border-radius: 2px;
        background-color: #00b8e2;
        color: #ffffff;
        font-weight: bold;
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
        font-size: 1em;
    }

`
export {Form};