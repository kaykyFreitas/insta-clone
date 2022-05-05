import { FeedContainer } from "./style";
import { Post } from "../post";
import { Stories } from "../storie";
import user from '../user.png'
import { useState, useEffect } from "react";

export function Feed() {

    const [following, setFollowing] = useState([]);

    useEffect( () => {
        fetch('https://api.github.com/users/kaykyFreitas/following')
        .then(response => response.json())
        .then(data => setFollowing(data))
    })


    return(
        <FeedContainer>
            <Stories />
            {following.map(follow => {
                return <Post key={follow.name} desc={ follow.html_url } postImg={ follow.avatar_url } userName={follow.login} userImage={follow.avatar_url} likedUserImage={ user } />
            })}
        </FeedContainer> 
    )
}