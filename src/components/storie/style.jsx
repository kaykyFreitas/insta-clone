import styled from 'styled-components'

export const StoriesContainer = styled.div`
    margin-top: 85px;
    margin-left: 200px;
    width: 614px;
    height: 120px;
    border: 1px solid #c4c4c4;
    border-radius: 2.5px;

    display: flex;
    align-items: center;

  
`;

export const StoriePost = styled.div`
    width: 66px;
    height: 66px;
    border-radius: 50%;
    margin-left: 20px;

    border: 4px solid orange;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: yellow;
    }
`;
