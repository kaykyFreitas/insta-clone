import { HeaderContainer, HeaderMenu, Logo, MenuOpt, SearchBar } from "./style";
import { AiOutlineHeart, AiFillHome } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { GoDiffAdded } from 'react-icons/go';
import { IoNavigateCircleOutline } from 'react-icons/io5';
import logo from '../../instaLogo.png'

export function Header() {


    return(
        <>
            <HeaderContainer>
                <Logo><img src={ logo } alt="Logo" /></Logo>
                <SearchBar placeholder="Search"/>
                <HeaderMenu>
                    <MenuOpt><AiFillHome size="24" /></MenuOpt>
                    <MenuOpt><FiSend size="24" /></MenuOpt>
                    <MenuOpt><GoDiffAdded size="24" /></MenuOpt>
                    <MenuOpt><IoNavigateCircleOutline size="24" /></MenuOpt>
                    <MenuOpt><AiOutlineHeart size="24" /></MenuOpt>
                </HeaderMenu>
            </HeaderContainer>
        </>
    )
}