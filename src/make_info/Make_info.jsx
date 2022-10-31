import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Main_settings from './Main_settings/Main_settings';
import Header from './Header/Header';
import Experience from './Experience/Experience';
import Education from './Education/Education'
import Languages from './Languages/Languages';
import './Make_info.scss';



export default function Make_info({ setProfileImg }) {


    const [main_settings, setMain_settings] = useState(true);
    const [header, setHeader] = useState(true);
    const [experience, setExperience] = useState(true);
    const [education, setEducation] = useState(true);
    const [languages, setLanguages] = useState(true);


    // const name = useSelector((state) => {
    //     return state.name.name
    // });

    // const surname = useSelector((state) => {
    //     return state.surname.surname
    // })

    // const mail = useSelector((state) => {
    //     return state.mail.mail
    // })

    // const tel = useSelector((state) => {
    //     return state.tel.tel
    // })

    // const address = useSelector((state) => {
    //     return state.address.address
    // })

    // const main_image = useSelector((state) => {
    //     return state.main_image.main_image
    // })

    // const color_background = useSelector((state) => {
    //     return state.color_background.color_background
    // })



    const ImageHandler = (e) => {
        const selected = e.target.files[0];
        const Allowed_types = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
        if (selected && Allowed_types.includes(selected.type)) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setProfileImg(reader.result);
            };
            reader.readAsDataURL(selected);
        }
    }


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


                    {header && <Header ImageHandler={ImageHandler} />}
                    




                    <div className='main_settings_close_div' onClick={() => {
                        setExperience(!experience);
                    }}>
                        <div className='main_settings_title_icon_div'>
                            <span className='main_settings_title'>Experience</span>
                        </div>
                    </div>

                    {experience && <Experience />}



                    <div className='main_settings_close_div' onClick={() => {
                        setEducation(!education);
                    }}>
                        <div className='main_settings_title_icon_div'>
                            <span className='main_settings_title'>Education</span>
                        </div>
                    </div>

                    {education && <Education />}



                    <div className='main_settings_close_div' onClick={() => {
                        setLanguages(!languages);
                    }}>
                        <div className='main_settings_title_icon_div'>
                            <span className='main_settings_title'>Languages</span>
                        </div>
                    </div>

                    {languages && <Languages />}

            </div>
        </div>

    )
}