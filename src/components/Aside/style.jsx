import styled from 'styled-components';

export const AsideContainer = styled.div`
    width: 290px;
    height: 380px;
    border-radius: 2.5px;

    box-sizing: border-box;
    padding: 20px;

    position: fixed;
    z-index: 3;
    top: 85px;
    left: 830px;
`;

export const UserArea = styled.div`
    width: 250px;
    height: 56px;

    box-sizing: border-box;

    display: flex;
    align-items: center;
`;

export const UserImage = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 50%;


    img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    background: yellow;
`;

export const UserName = styled.p`
    font-size: 18px;
    font-weight: medium;
    margin-left: 10px;
`;

export const SugestionsArea = styled.div`
    width: 250px;
    height: 270px;
`;

export const SugestionsTitle = styled.p`
    font-size: 16px;
    color: grey;
`;


export const SuggestionUser = styled.div`
    width: 250px;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
    }

    div img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    div p {
        margin-left: 10px;
        color: black;
    }

    span {
        color: royalblue;
    }
`;

