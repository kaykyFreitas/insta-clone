import { AsideContainer, SugestionsArea, SugestionsTitle, SuggestionUser, UserArea, UserImage, UserName } from "./style";
import user from '../user.png'

export function Aside() {

    return(
        <>
            <AsideContainer>
                <UserArea>
                    <UserImage><img src={ user } alt="" /></UserImage>
                    <UserName>kaykyFreitas</UserName>
                </UserArea>
                <SugestionsArea>
                    <SugestionsTitle>Suggestions For You</SugestionsTitle>

                    <SuggestionUser>
                        <div>
                            <img src={ user } />
                            <p>kkakakkaka</p>
                        </div>
                        <span>Follow</span>
                    </SuggestionUser>

                    <SuggestionUser>
                        <div>
                            <img src={ user } />
                            <p>kkakakkaka</p>
                        </div>
                        <span>Follow</span>
                    </SuggestionUser>

                    <SuggestionUser>
                        <div>
                            <img src={ user } />
                            <p>kkakakkaka</p>
                        </div>
                        <span>Follow</span>
                    </SuggestionUser>

                    <SuggestionUser>
                        <div>
                            <img src={ user } />
                            <p>kkakakkaka</p>
                        </div>
                        <span>Follow</span>
                    </SuggestionUser>

                    <SuggestionUser>
                        <div>
                            <img src={ user } />
                            <p>kkakakkaka</p>
                        </div>
                        <span>Follow</span>
                    </SuggestionUser>

                   
                </SugestionsArea>
            </AsideContainer>
        </>
    )
}