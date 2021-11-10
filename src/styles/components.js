import styled from "styled-components";

export const Button = styled.button`
    background: palevioletred;
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid;
    border-radius: 20px;
`

export const HeadText = styled.h1`
    color: palevioletred;
`
export const Outline = styled.div`
    background-color: ${props => props.backColor };
    text-align: center;
    margin: auto;
    max-width: 65%;
`

export const Input = styled.input`
    padding: 0.5em;
    width: 100px;
    margin: 0.5em;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
`

export const VerseDiv = styled.div`
    background-color: papayawhip;
    display: flex;
    justify-content: left;
    border: 2px solid black;

`
export const Small = styled.p`
    font-size: 20px;
    color: palevioletred;
`

