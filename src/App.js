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

    // FAKE
    const postUrl = "https://jsonplaceholder.typicode.com/posts";
    const result = await axios({
      method: "POST",
      url: postUrl,
      data: { title: username, body: email, userId: 1 },
    });

    console.log(result);

    // B2:: RESET THE FORM AFTER GETTING THE OUTPUT FROM THE SERVER
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <div>
      <h3>Working with Form Element</h3>

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
