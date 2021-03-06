import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>            
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        wetter
                    </SocialLogo>
                    <WebsiteRights>wetter &copy; {new Date().getFullYear()}. CNPJ 11.111.111/0001-11</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                        <SocialIconLink href="//www.twitter.com/lpescador_" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer