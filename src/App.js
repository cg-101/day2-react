import axios from "axios";
import { useState } from "react";

export default function App() {
  // UI :: JSX
  return (
    <>
      <MyFormComponent />
    </>
  );
}

function MyFormComponent() {
  // statefull
  const [displayMessage, setDisplayMessage] = useState(false);
  const [invalidForm, setInvalidForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);

  /**
   * THIS has all the data
   * About to MAKE API CALL
   */
  const makeRegisterApiCall = async () => {
    console.log(username, password, email);

    // VALIDATION AT THE BEGINING
    if (username === "" || password == "" || email == "") {
      setInvalidForm(true);

      // return, no furterh processing
      return;
    } else {
      setInvalidForm(false);
    }

    // FAKE
    const postUrl = "https://jsonplaceholder.typicode.com/posts";
    const result = await axios({
      method: "POST",
      url: postUrl,
      data: { title: username, body: email, userId: 1 },
    });

    console.log(result);

    // B2:: Display message conditioanlly
    setDisplayMessage(true);
    setTimeout(() => setDisplayMessage(false), 5000);

    // B2:: RESET THE FORM AFTER GETTING THE OUTPUT FROM THE SERVER
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <div>
      <h3>Working with Form Element</h3>

      {displayMessage && (
        <div className="alert alert-primary">Register successfully!</div>
      )}

      <div>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={onChangeUsername}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={onChangePassword}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={onChangeEmail}
        />
      </div>

      {invalidForm && (
        <div className="alert alert-danger">Form is Invalid!!</div>
      )}

      <div>
        <button
          className="btn btn-sm btn-primary"
          onClick={makeRegisterApiCall}
        >
          Register
        </button>
      </div>
    </div>
  );
}
