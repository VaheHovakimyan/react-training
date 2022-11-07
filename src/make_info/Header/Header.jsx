import { useDispatch, useSelector } from "react-redux";
import { nameValue, selectName } from "../../Features/Header/NameSlice";
import { surnameValue, selectSurname } from "../../Features/Header/SurnameSlice";
import { mailValue, selectMail } from "../../Features/Header/MailSlice";
import { telValue, selectTel } from "../../Features/Header/TelSlice";
import { addressValue, selectAddress } from "../../Features/Header/AddressSlice";

export default function Header({ setProfileImg }) {

    const dispatch = useDispatch();

    const name = useSelector(selectName);
    const surname = useSelector(selectSurname);
    const mail = useSelector(selectMail);
    const tel = useSelector(selectTel);
    const address = useSelector(selectAddress);

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

        <div className='main_settings_open'>

            <div>
                <p>Name</p>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {dispatch(nameValue(e.target.value))}}
                />
            </div>

            <div>
                <p>Surname</p>
                <input
                    type="text"
                    value={surname}
                    onChange={(e) => {dispatch(surnameValue(e.target.value))}}
                />
            </div>

            <div>
                <p>Mail</p>
                <input
                    type="text"
                    value={mail}
                    onChange={(e) => {dispatch(mailValue(e.target.value))}}
                />
            </div>

            <div>
                <p>Tel</p>
                <input
                    type="text"
                    value={tel}
                    onChange={(e) => {dispatch(telValue(e.target.value))}}
                />
            </div>

            <div>
                <p>Address</p>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => {dispatch(addressValue(e.target.value))}}
                />
            </div>

            <input type="file" name="input" id="input" onChange={ImageHandler} />
        </div>

    )
}