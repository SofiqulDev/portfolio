import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";

const Resume = () => {
    return (
        <div className="page" id="resume">
            <Title icon={'fa fa-briefcase'}>
                Resume - Total Commercial Experience {moment().diff('01/07/2020', 'years', true).toFixed(2)} years
            </Title>
            <ResumeItem
                date={'July 2020 - Present'}
                title={'Chief Technology Officer'}
                company={'Techne BD'}
            >
                • Work on front-end with extensive use of Angular, React and native JavaScript for developing SPA. <br/>
                • Develop CSS with SCSS and BEM from sketches.
            </ResumeItem>
            <ResumeItem
                date={'Oct 2020 – Mar 2021'}
                title={'Trainer and Web Developer'}
                company={'Cloud Technology BD'}
                // logo={'https://media-exp1.licdn.com/dms/image/C4D0BAQG3PHtpLchi8A/company-logo_100_100/0?e=1612396800&v=beta&t=yKG1oC59MovpZSDKOO3q9LtgtkNEAFNqreDdam9XFuQ'}
            >
                • Develop clean, maintainable and highly interactive single page web applications using
                Javascript, Angular, React, HTML, SASS. <br/>
                • Responsible for design and development of the web pages from sketches.
            </ResumeItem>
            <ResumeItem
                classNames={'not-last'}
                date={'July 2020 – Oct 2020'}
                title={'LEDP - Trainer'}
                company={'Learning and Earning Project Bangladesh'}
            >
                • 60 days web development instructor and completed two batches including many other projects. <br/>
            </ResumeItem>

            <Title icon={'fa fa-university'}>
                Education
            </Title>
            <ResumeItem
                date={'2017 – Present'}
                title={'National University, Bangladesh'}
                company={'Govt Edward College, Pabna - 6600'}
            >
                BSC in Mathematics
            </ResumeItem>
            <ResumeItem
                date={'2015 – 2017'}
                title={'Alim (Science)'}
                company={'Ataikula Saradangi Fazil Madrasah, Ataikula, Pabna - 6601'}
            >
            </ResumeItem>
            <ResumeItem
                date={'2013 – 2015'}
                title={'Dakhil (Science)'}
                company={'Ataikula Saradangi Fazil Madrasah, Ataikula, Pabna - 6601'}
            >
            </ResumeItem>
        </div>
    );
};

export default Resume;
