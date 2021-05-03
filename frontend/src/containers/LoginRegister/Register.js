import React, { useState } from "react";
import axios from "axios";
import Auth from "../../util/Auth";
import { headers } from "../../lib/headers";
import "react-datepicker/dist/react-datepicker.css";

const Register = (props) => {
  const [firstName, setFirstName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();

  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - 30);

  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  const [phoneNumber, setPhoneNumber] = useState();
  const [addressLineOne, setAddressLineOne] = useState();
  const [addressLineTwo, setAddressLineTwo] = useState();
  const [city, setCity] = useState();
  const [postcode, setPostcode] = useState();

  // const [registerError, setRegisterError] = useState();
  // const [loginError, setLoginError] = useState();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "/api/login/",
        { email: email, password: password },
        headers,
      );
      Auth.setToken(res.data.token);
      props.history.push("/myprofile");
    } catch (err) {
      // setLoginError("Incorrect Credentials");
      console.log("Incorrect Credentials");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const registerData = {
      first_name: firstName,
      second_name: surname,
      last_name: surname,
      username: email,
      email: email,
      address_first_line: addressLineOne,
      address_second_line: addressLineTwo,
      address_town: city,
      address_postcode: postcode,
      address_country: "United Kingdom",
      phone_number: phoneNumber,
      password: password,
      password_confirmation: passwordConfirmation,
    };

    try {
      await axios.post("/api/register/", registerData);
      handleLogin();
    } catch (err) {
      // setRegisterError("Incorrect Credentials");
      console.log("Incorrect Credentials");
    }
  };

  return (
    <form>
      <div className="columns names mb-0">
        <div className="field column mb-0">
          <label className="label mb-0">First Name</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <span className="icon is-small is-left register-icon">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>
        <div className="field column">
          <label className="label mb-0">Surname</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              name="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Surname"
            />
            <span className="icon is-small is-left register-icon">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="field mb-3">
        <label className="label mb-0">Email</label>
        <p className="control is-expanded has-icons-left has-icons-right">
          <input
            // className="input is-success"
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="icon is-small is-left register-icon">
            <i className="fas fa-envelope"></i>
          </span>
          {/* <span className="icon is-small is-righ register-icont">
            <i className="fas fa-check"></i>
          </span> */}
        </p>
      </div>
      <div className="columns names mb-0">
        <div className="field column mb-0">
          <label className="label mb-0">Password</label>
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="icon is-small is-left register-icon">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>

        <div className="field column mb-0">
          <label className="label mb-0">Password Confirmation</label>
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password Confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <span className="icon is-small is-left register-icon">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
      </div>

      <div className="columns names mb-0">
        <div className="field column mb-0">
          <label className="label mb-0">Address Line 1</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="addressLineOne"
              value={addressLineOne}
              onChange={(e) => setAddressLineOne(e.target.value)}
              placeholder="Address Line 1"
            />
          </div>
        </div>
        <div className="field column">
          <label className="label mb-0">Address Line 2</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="addressLineTwo"
              value={addressLineTwo}
              onChange={(e) => setAddressLineTwo(e.target.value)}
              placeholder="Address Line 2"
            />
          </div>
        </div>
      </div>

      <div className="columns names mb-0">
        <div className="field column mb-0">
          <label className="label mb-0">City</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
          </div>
        </div>
        <div className="field column">
          <label className="label mb-0">Postal Code</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              placeholder="Postal Code"
            />
          </div>
        </div>
      </div>

      <div className="columns names mb-0">
        <div className="field-body column is-half">
          <label className="label mb-0">Phone Number</label>
          <div className="field is-expanded">
            <div className="field has-addons">
              <p className="control">
                <a className="button is-static">+44</a>
              </p>
              <p className="control is-expanded">
                <input
                  className="input"
                  type="tel"
                  placeholder="Your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="column is-half is-flex is-justify-content-center is-align-items-flex-end">
          <div className="action-button is-flex is-align-items-center">
            {/* <Link
          to={{
            pathname: "/search",
            state: { checkin, checkout, adults, kids, chosenSite },
          }}
        > */}
            <input
              className="button is-danger"
              value="Register"
              type="submit"
              onClick={handleRegister}
            />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
