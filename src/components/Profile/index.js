import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import Skills from "../Skills";
import {ThemeContext} from "../../context/ThemeContext";
import {useAnimation} from "../../use/animation";
import avater from "./avater.jpeg";

const Profile = () => {
    const { backgroundImage, type } = useContext(ThemeContext);
    const { animation } = useAnimation();
    return (
        <div className="profile">
            <div className="profile__banner">
                <div className={`profile__photo ${animation}`} style={{backgroundImage: `url(${backgroundImage})`}} />
                <img src={ avater } alt={type} />
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    Sofiqul Islam
                </div>
                <TypedText
                  dataText={
                      [
                          'Web Developer',
                      ]
                  }
                />
                <SocialLinks/>
                <Info icon="location">
                    Pabna-6600, Bangladesh
                </Info>
                <Skills />
            </div>
            <div className="profile__contact">
                <a href="https://drive.google.com/file/d/1uQ_OckePj93DIuss9MepPw4LcycsRwZa/view?usp=sharing" target="_blank" rel="noreferrer">
                        <span>
                            Download CV
                        </span>
                </a>
                <a href="mailto:sofiquldev@gmail.com">
                        <span>
                            Contact Me
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;
