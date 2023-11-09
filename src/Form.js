import React, { useState } from "react";
import axios from "axios";

function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [doctor, setDoctor] = useState("");
  const [meetingMode, setMeetingMode] = useState("");
  const [dateValue, setDateValue] = useState(new Date());

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateDoctor = (e) => {
    setDoctor(e.target.value);
  };
  const test = () => {
    setToShow(0);
  };
  const APIrequest = async () => {
    await axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: {
        firstName,
        lastName,
        email,
        doctor,
        meetingMode,
        dateValue,
      },
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    // props.fun(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    props.fun(0);

    await APIrequest();

    props.fun(1);
  };
  const updateMeetingMode = (e) => {
    setMeetingMode(e.target.value);
  };
  const updateDateValue = (e) => {
    setDateValue(e.target.value);
  };

  return (
    <>
      <h1> Book a Session </h1>
      <p> Fill the form below to book a virtual session with the doctor </p>
      <h4> Basic Info </h4>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={updateFirstName} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={updateLastName} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={updateEmail} />
        </label>
        <br />
        <br />
        <label>
          Doctor:
          <br />
          <select value={doctor} onChange={updateDoctor}>
            <option value="">Select your Doctor</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>

        <br />
        <br />

        {doctor == "" ? (
          ""
        ) : (
          <>
            <label>
              Where?
              <br /> <br />
              <div onChange={updateMeetingMode}>
                <input type="radio" value={meetingMode} name="mode" /> Google
                Meet
                <br />
                <input type="radio" value={meetingMode} name="mode" /> Phone
              </div>
            </label>
            <br /> <br />
            <label>
              When?
              <br /> <br />
              <input type="date" value={dateValue} onChange={updateDateValue} />
            </label>
          </>
        )}

        <br />
        <br />
        <button type="submit">Confirm Booking</button>
      </form>
    </>
  );
}

function Pending() {
  return <h1> Scheduling the appointment... </h1>;
}

export default function Fragment() {
  const [toShow, setToShow] = useState(1);
  const updateToShow = (val) => {
    console.log(val);
    setToShow(val);
  };

  return toShow === 1 ? <Form fun={updateToShow} /> : <Pending />;
}
