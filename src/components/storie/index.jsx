import { StoriePost, StoriesContainer } from "./style";
import { useState, useEffect } from "react";

export function Stories() {

    
        const [following, setFollowing] = useState([]);
    
        useEffect( () => {
            fetch('https://api.github.com/users/kaykyFreitas/following')
            .then(response => response.json())
            .then(data => setFollowing(data))
        })

    return(
        <>
            <StoriesContainer>
                {following.map(follow => {
                    return <StoriePost><div><img src={follow.avatar_url} alt="Stories"/></div></StoriePost>
                })}

            </StoriesContainer>
        </>
    )
}