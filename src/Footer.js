import React from 'react';
import { AiFillInstagram, AiFillFacebook,AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styled from 'styled-components';

const FooterComponent = (props) => {
    const {
        className,
        classFooter, 
        classText,
        classIcons,
        text
    }=props
    return (
            <footer className={className + ' ' + classFooter}>
                <p className={classText}>{text}</p>
                <div className={classIcons}>
                    <a target='_blank' href='https://www.instagram.com/daniisa12/'><AiFillInstagram/></a>
                    <a target='_blank' href='https://www.facebook.com/DANI.TKM.4/'><AiFillFacebook/></a>
                    <a target='_blank' href='https://github.com/dani-isabel'><AiFillGithub/></a>
                    <a target='_blank' href='https://www.linkedin.com/in/daniela-isabel-bolivar/'><AiFillLinkedin/></a>           
                </div>
            </footer>
    );
}

const StyledFooter = styled(FooterComponent)`
    &.dark {
        padding: 0 5%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        height: 10vh;
    }
    & .text {
        font-family: Calibri;
        font-size: 24px;
        color:purple;
      }
    & .icons {
        display: flex;
        width: 20%;
        justify-content: space-between;
    }
`;

export { StyledFooter }