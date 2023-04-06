import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getThunkPositions } from "../../redux/positions/thunks";
import { getPositions } from "../../redux/positions/selectors";
import { Button } from "../button/Button";
import { addThunkData } from "../../redux/users/thunks";
import { Success } from "../success/Success";
import s from "./PostRequest.module.scss";

export const PostRequest = ({ pageScroll }) => {
  const dispatch = useDispatch();
  const position = useSelector(getPositions);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [position_id, setPosition] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [photoDirty, setPhotoDirty] = useState(false);
  const [nameError, setNameError] = useState("Please enter a name");
  const [phoneError, setPhoneError] = useState("Please enter a phone number");
  const [emailError, setEmailError] = useState(
    "Please enter your email address"
  );
  const [photoError, setPhotoError] = useState(
    "Please upload file less than 5mb"
  );
  const [success, setSucess] = useState(false);

  useEffect(() => {
    dispatch(getThunkPositions());
  }, [dispatch]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
      case "photo":
        setPhotoDirty(true);
        break;
      default:
        console.log(e.target.name);
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const validEmail =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (!validEmail.test(String(e.target.value).toLowerCase())) {
      setEmailError("Please enter correct email");
    } else if (e.target.value.length < 2 || e.target.value.length > 100) {
      setEmailError("Please enter correct email from 2 to 100 characters");
    } else {
      setEmailError("");
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 60) {
      setNameError("Please enter a name consists from 2 to 60 characters");
    } else if (!e.target.value) {
      setNameError("Please enter a name");
    } else {
      setNameError("");
    }
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const validPhone = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
    if (!validPhone.test(String(e.target.value))) {
      setPhoneError("Please enter correct phone number");
    } else {
      setPhoneError("");
    }
  };

  const changePhoto = (e) => {
    const file = e?.size;
    if (file > 5242880) {
      setPhotoError("Please upload file less than 5mb");
    } else {
      setPhoto(e);
      setPhotoError("");
    }
  };

  const isFormEmpty = !photo || !name || !email || !phone || !position_id;
  console.log(photoError);
  console.log(photoDirty);

  const createNewUser = () => {
    if (isFormEmpty) {
      alert("Please enter all required fields");
    } else {
      pageScroll();
      dispatch(addThunkData({ name, email, phone, position_id, photo }));
      setSucess(true);
      setEmail("");
      setName("");
      setPhone("");
      setPosition("");
      setPhoto("Upload your photo");
    }
  };

  return (
    <>
      <section className={s.Container}>
        <h2 className={s.Title}>Working with POST request</h2>
        <form className={s.Form} id="signUp">
          <div className={s.InputSection}>
            <input
              onChange={(e) => nameHandler(e)}
              className={nameDirty && nameError ? s.InputError : s.Input}
              placeholder="Your name"
              type="text"
              name="name"
              value={name}
              minLength="2"
              maxLength="60"
              onBlur={(e) => blurHandler(e)}
              required
            />{" "}
            {nameDirty && nameError && (
              <p className={s.TextError}>{nameError}</p>
            )}
          </div>
          <div className={s.InputSection}>
            <input
              onChange={(e) => emailHandler(e)}
              className={emailDirty && emailError ? s.InputError : s.Input}
              placeholder="Email"
              type="email"
              value={email}
              autoComplete="off"
              name="email"
              onBlur={(e) => blurHandler(e)}
              minLength="2"
              maxLength="100"
              pattern=" /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g"
              required
            />{" "}
            {emailDirty && emailError && (
              <p className={s.TextError}>{emailError}</p>
            )}
          </div>
          <div className={s.InputSectionLast}>
            <input
              onChange={(e) => phoneHandler(e)}
              className={phoneDirty && phoneError ? s.InputError : s.Input}
              placeholder="Phone"
              type="tel"
              value={phone}
              autoComplete="off"
              name="phone"
              id="phone"
              onBlur={(e) => blurHandler(e)}
              pattern="^[\+]{0,1}380([0-9]{9})$)"
              required
            />
            <label htmlFor="phone" className={s.Label}>
              +38 (XXX) XXX - XX - XX
            </label>
            {phoneDirty && phoneError && (
              <p className={s.TextError}>{phoneError}</p>
            )}
          </div>

          <div className={s.RadioList}>
            <h3 className={s.Text}>Select your position</h3>

            {position &&
              position.map((item) => {
                return (
                  <div className={s.RadioLink} key={item.id}>
                    <input
                      className={s.RadioInput}
                      id={item.id}
                      type="radio"
                      name="position_id"
                      value={item.id}
                      onClick={() => setPosition(item.id)}
                      required
                    />
                    <span className={s.RadioFake}></span>
                    <label htmlFor={item.id} className={s.RadioLabel}>
                      {item.name}
                    </label>
                  </div>
                );
              })}
          </div>
          <div
            className={photoDirty && photoError ? s.UploaderError : s.Uploader}
          >
            <input
              className={s.InputFile}
              onChange={(e) => changePhoto(e.target.files[0])}
              type="file"
              name="photo"
              onBlur={(e) => blurHandler(e)}
              alt="Choose file to upload"
              id="photo"
              accept="image/jpeg, image/png image/jpg"
              width={70}
              required
            />
            <label htmlFor="photo">
              <div className={s.PhotoButton}>Upload</div>
              <div className={s.PhotoLabel}>
                {photo ? photo?.name?.slice(0, 20) : <p>Upload your photo</p>}
              </div>
            </label>
          </div>
          {photoDirty && photoError ? (
            <p className={s.TextError} style={{ marginBottom: "50px" }}>
              {photoError}
            </p>
          ) : null}
          {isFormEmpty ? (
            <Button
              onClickPage={() =>
                createNewUser({
                  name,
                  email,
                  phone,
                  position_id,
                  photo,
                })
              }
              type="submit"
              style={{ backgroundColor: "#B4B4B4", margin: "0 auto" }}
              disabled
            >
              Sign up
            </Button>
          ) : (
            <Button
              onClickPage={() =>
                createNewUser({
                  name,
                  email,
                  phone,
                  position_id,
                  photo,
                })
              }
              type="submit"
              style={{ backgroundColor: "#f4e041", margin: "0 auto" }}
            >
              Sign up
            </Button>
          )}
        </form>
      </section>
      {success && <Success />}
    </>
  );
};
