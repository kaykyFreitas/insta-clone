import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #c4c4c4;

    background: #fff;

    display: flex;
    align-items: center;

    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;

`;

export const Logo = styled.div`
    font-size: 40;
    font-weight: 300;
    margin-left: 15%;
    width: 103px;
    height: 29px;

`;


export const SearchBar = styled.input`
    width: 268px;
    height: 36px;
    background: rgba(var(--bb2,239,239,239),1);
    border-radius: 8px;
    margin-left: 208px;

    text-decoration: none;
    outline: none;
    border: none;
`;

export const HeaderMenu = styled.div`
    margin-left: 60px;
    display: flex;
`;

export const MenuOpt = styled.div`
    margin-left: 20px
`;