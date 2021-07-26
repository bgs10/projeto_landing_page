import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 960px;
    margin: auto;
    background-color: #000;

`;

export const Bloco = styled.div`
    display: table;
    background-color: #000;
`;

export const Image = styled.img`
    width:40%
    display: table-cell;
    float: left;
    margin-bottom: 30px;
    margin-left: 50px;
`;

export const Email = styled.div`
display: table-cell;
float: left;
align-itens:center;
width: 300px;
margin-top: 20px;
margin-left: 100px;
    
`;

export const TitleH1 = styled.h1`
    margin-left: 20px;
    color:yellow;    
    font-size:40px;
`;

export const TitleH5 = styled.h5`
    color:#fff;    
`;

export const Input = styled.input`
    border: 1px solid #000;
    heigth: 1.5rem;
    padding: 0.2rem 0.5rem;
    border-radius: .25rem 0 0 .25rem;
    
    &:focus,
    &:active{
        outline: none;
        box-shadow: NoEmitOnErrorsPlugin;
    }
`;

export const Button = styled.button`
    heigth: 1.5rem;
    border: 1px solid #000;
    background: yellow;
    margin-left: 10px;
    padding: 0.2rem;
    color: #000;
    border-radius: 0 0.25rem 0.25rem 0;
    font-family: sans-serif;
    font-size: 15px;
    
`;

export const ErrorMsg = styled.span`
    color: red;    
`;

export const SucessMsg = styled.span`
    color: #000;    
`;