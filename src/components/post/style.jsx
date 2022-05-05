import styled from 'styled-components'

export const PostContainer = styled.div`
    width: 614px;
    height: 884px;

    margin-top: 20px;
    margin-left: 200px;

    border: 1px solid #c4c4c4;
    border-radius: 2.5px;
`;

export const PostHeader = styled.div`
    width: 614px;
    height: 60px;
    border-radius: 2.5px 2.5px 0 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;
    padding-right: 15px;
    padding-left: 15px;
`;

export const UserContainer = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
`;

export const PostUser = styled.div`
    width: 42px;
    height: 42px;
    
    border-radius: 50%;

    img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }
`;

export const PostUserName = styled.h2`
    font-size: 20px;
    margin-left: 15px;
`;

export const PhotoContainer = styled.div`
    width: 614px;
    height: 614px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const PostFooter = styled.div`
    height: 210px;
    border-radius: 0 0 2.5px 2.5px;
`;

export const ActionsContainer = styled.div`
    width: 582px;
    height: 54px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
`;

export const Likes = styled.div`
    width: 582px;
    height: 24px;
    margin: auto;
    display: flex;
    align-items: center;

    margin-bottom: -12.5px;


    img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }

    p {
        margin-left: 10px;
        font: 16px;
    }

`;

export const PostDescription = styled.div`
    width: 582px;
    height: 20px;
    margin: auto;
    margin-bottom: 5px;

    span {
        font-weight: bold;
        margin-right: 5px;
    }
    `;

export const ViewAllComents = styled.p`
    width: 582px;
    height: 14px;
    margin: auto;
    color: #c4c4c4;
    font-size: 14px;
    line-height: 14px;
`;

export const PostedTime = styled.p`
    width: 582px;
    margin: auto;
    margin-top: 5px;
    line-height: 14px;
    font-size: 12px;
    color: #c4c4c4;
`;

export const CommentArea = styled.div`
    width: 582px;
    height: 40px;
    margin: auto;
    margin-top: 12.5px;

    box-sizing: border-box;
    padding-rigth: 15px;


    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CommentText = styled.input`
    width: 460px;
    height: 18px;
    resize: none;
    text-decoration: none;
    outline: none;
    border: none;
    appearance: none;
`;

export const PostComment = styled.p`
    line-height: 0;
    font-size: 16px;
    color: rgba(71, 130, 233, 0.644);
`;