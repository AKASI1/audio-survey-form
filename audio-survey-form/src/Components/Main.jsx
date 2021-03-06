import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import AudioType from "./AudioType";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { Link } from "react-router-dom";
import { Context } from "../Storage";

/*___________________________________________________________________________________*/

function Main() {
  const audios = useContext(Context);

  //Info
  const [name, setName] = useState("");
  const [country, setCuontry] = useState("");
  const [age, setAge] = useState(0);

  //Final Data
  const [data, setData] = useState(
    audios.map((a) => ({
      mainType: a.title,
      sections: a.sections.map((s) => ({
        type: s.type,
        comment: "",
        rates: s.audios.map((a) => ({ name: a.name, rate: 0 })),
      })),
    }))
  );
  console.log(data);

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      alert("Please enter valid name");
      return;
    }
    if (country.trim().length === 0) {
      alert("Please enter valid email");
      return;
    }
    if (age < 1) {
      alert("Please enter valid age");
      return;
    }

    addDoc(collection(db, "users"), {
      info: { name, country, age },
      data,
    }).catch((e) => {
      console.error("Error adding document: ", e.message);
    });

    navigate("/report");
  };

  return (
    <form onSubmit={Submit}>
      <Link to={"/report"}>
        <button className="btn btn-info position-absolute end-0 top-0 m-5 text-white">
          See Reports
        </button>
      </Link>

      <Header>Audio Survey Form</Header>
      <p className="text-center mb-5">
        Thank you for participating. <br />
        Please Rate the following audio files
      </p>

      <UserInfo className=" w-25 d-flex flex-column gap-3">
        <div className="name">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
        </div>

        <div className="country">
          <label htmlFor="country">Nationality</label>
          <input
            type="text"
            placeholder="Enter your country"
            value={country}
            onChange={(e) => {
              setCuontry(e.currentTarget.value);
            }}
          />
        </div>

        <div className="age">
          <label htmlFor="age">Your Age</label>
          <input
            min={0}
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.currentTarget.value);
            }}
          />
        </div>
      </UserInfo>

      <section className=" flex-wrap d-flex gap-3 justify-content-between p-4 border-top mt-5">
        {audios.map((audio, id) => (
          <AudioType
            key={id}
            sections={audio.sections}
            mainType={audio.title}
            setData={setData}
            data={data}
          />
        ))}
      </section>

      <button className="btn btn-primary my-5 mx-auto d-flex fs-4">
        Submit
      </button>
    </form>
  );
}
export default Main;

/*___________________________________________________________________________________*/

const Header = styled.h1`
  width: fit-content;
  letter-spacing: -1px;
  margin: 50px auto 20px;
  font-size: 30px;
  font-weight: bold;
  padding: 10px 20px;
  border: 2px solid black;
  position: relative;
  z-index: 1;
  transition: 0.3s;
  cursor: grabbing;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #2196f3;
    top: 50%;
    transform: translateY(-50%);
  }
  &::before {
    left: -30px;
  }
  &::after {
    right: -30px;
  }
  &:hover {
    color: white;
    border: 2px solid white;
    transition-delay: 0.5s;
  }
  &:hover::before {
    z-index: -1;
    animation: right 0.5s linear forwards;
  }
  &:hover::after {
    z-index: -1;
    animation: left 0.5s linear forwards;
  }
`;
/*______________________________________________*/
const UserInfo = styled.div`
  border: 1px solid #eee;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 50%;
  margin: auto;
  input {
    display: block;
    width: 100%;
    margin-bottom: 25px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #f9f9f9;
    caret-color: var(--mcolor);
  }
`;
/*___________________________________________________________________________________*/
