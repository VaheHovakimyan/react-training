import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Main_settings from './MainSettings/MainSettings';
import Header from './Header/Header';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Languages from './Languages/Languages';
import Projects from './Projects/Projects';
import './MakeInfo.scss';



export default function Make_info({ setProfileImg }) {


    const [main_settings, setMain_settings] = useState(false);
    const [header, setHeader] = useState(true);
    const [experience, setExperience] = useState(true);
    const [education, setEducation] = useState(true);
    const [languages, setLanguages] = useState(true);
    const [projects, setProjects] = useState(true);


    return (
        <div className='make_info_div'>
            <div className="make_info">



                    <div className='main_settings_close_div' onClick={() => {
                        setMain_settings(!main_settings);
                    }}>
                        <div className='main_settings_title_icon_div'>
                            <span className='main_settings_title'>Main</span>
                        </div>
                    </div>

                    {main_settings && <Main_settings />}
                    




                    <div className='main_settings_close_div' onClick={() => {
                        setHeader(!header);
                    }}>
                        <div className='main_settings_title_icon_div'>
                            <span className='main_settings_title'>Header</span>
                        </div>
                    </div>


                    {header && <Header setProfileImg={setProfileImg} />}
                    


                    <div className='main_settings_close_div' onClick={() => {
                        setEducation(!education);
                    }}>
                        <div className='main_settings_title_icon_div'>
                            <span className='main_settings_title'>Education</span>
                        </div>
                    </div>

                    {education && <Education />}



                    <div className='main_settings_close_div' onClick={() => {
                        setExperience(!experience);
                    }}>
                        <div className='main_settings_title_icon_div'>
                            <span className='main_settings_title'>Experience</span>
                        </div>
                    </div>

                    {experience && <Experience />}



                    <div className='main_settings_close_div' onClick={() => {
                        setLanguages(!languages);
                    }}>
                        <div className='main_settings_title_icon_div'>
                            <span className='main_settings_title'>Languages</span>
                        </div>
                    </div>

                    {languages && <Languages />}



                    <div className='main_settings_close_div' onClick={() => {
                        setProjects(!projects);
                    }}>
                        <div className='main_settings_title_icon_div'>
                            <span className='main_settings_title'>Projects</span>
                        </div>
                    </div>

                    {projects && <Projects />}

            </div>
        </div>

    )
}