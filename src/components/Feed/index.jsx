import { FeedContainer } from "./style";
import { Post } from "../post";
import { Stories } from "../storie";
import user from '../user.png'

export function Feed() {

    return(
        <FeedContainer>
            <Stories />
            <Post userImage={ user }  userName="Kayky Freitas" likedUserImage={ user } />
            <Post />
            <Post />
            <Post />
            <Post />
        </FeedContainer> 
    )
}