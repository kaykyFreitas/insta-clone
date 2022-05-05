import { AsideContainer, SugestionsArea, SugestionsTitle, SuggestionUser, UserArea, UserImage, UserName } from "./style";
import user from '../user.png'

export function Aside(props) {

    return(
        <>
            <AsideContainer>
                <UserArea>
                    <UserImage><img src={ props.userImg } alt="" /></UserImage>
                    <UserName>{ props.userName }</UserName>
                </UserArea>
                <SugestionsArea>
                    <SugestionsTitle>Suggestions For You</SugestionsTitle>

                    <SuggestionUser>
                        <div>
                            <img src={ props.suggestionImg } />
                            <p>{ props.suggestionName }</p>
                        </div>
                        <span>Follow</span>
                    </SuggestionUser>

                    <SuggestionUser>
                        <div>
                            <img src={ props.suggestionImg } />
                            <p>{ props.suggestionName }</p>
                        </div>
                        <span>Follow</span>
                    </SuggestionUser>

                    <SuggestionUser>
                        <div>
                            <img src={ props.suggestionImg } />
                            <p>{ props.suggestionName }</p>
                        </div>
                        <span>Follow</span>
                    </SuggestionUser>

                    <SuggestionUser>
                        <div>
                            <img src={ props.suggestionImg } />
                            <p>{ props.suggestionName }</p>
                        </div>
                        <span>Follow</span>
                    </SuggestionUser>

                    <SuggestionUser>
                        <div>
                            <img src={ props.suggestionImg } />
                            <p>{ props.suggestionName }</p>
                        </div>
                        <span>Follow</span>
                    </SuggestionUser>

                    

                   
                </SugestionsArea>
            </AsideContainer>
        </>
    )
}