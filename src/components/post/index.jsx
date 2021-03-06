import { PostContainer, PostHeader, PostUser, PostUserName, UserContainer, PhotoContainer, PostFooter, ActionsContainer, Likes, PostDescription, ViewAllComents, PostedTime, CommentArea, CommentText, PostComment } from "./style";
import { AiOutlineEllipsis, AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import { BiBookmark } from 'react-icons/bi'
import { HiOutlineEmojiHappy } from 'react-icons/hi'


export function Post(props) {

    return(
        <>
            <PostContainer>

                <PostHeader>
                    <UserContainer>
                        <PostUser><img src={ props.userImage } alt="User" /></PostUser>
                        <PostUserName>{ props.userName }</PostUserName>
                    </UserContainer>
                    <AiOutlineEllipsis />
                </PostHeader>

                <PhotoContainer>
                    <img src={ props.postImg } alt="Post" />
                </PhotoContainer>

                <PostFooter>
                    <ActionsContainer>
                        <div>
                            <AiOutlineHeart size="24" />
                            <AiOutlineMessage size="24"/>
                            <FiSend size="24"/>
                        </div>
                        <BiBookmark size="24"/>
                    </ActionsContainer>

                    <Likes>
                        <img src={ props.likedUserImage } alt="Like"/>
                        <p>Liked by <strong>KaykyFreitas2004</strong> and <strong>others</strong></p>
                    </Likes>

                    <PostDescription>
                        <p><span>{ props.userName }</span>{ props.desc }</p>
                    </PostDescription>

                    <ViewAllComents>View all 32 comments</ViewAllComents>

                    <PostedTime>50 minutes ago</PostedTime>

                    <CommentArea>
                        <HiOutlineEmojiHappy size="35" />
                        <CommentText placeholder="Add a comment..." />
                        <PostComment>POST</PostComment>
                    </CommentArea>


                </PostFooter>

            </PostContainer>
        </>
    )
}