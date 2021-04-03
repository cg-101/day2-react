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

  const onChangeUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
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
        <input type="password" placeholder="Enter Password" />
      </div>
    </div>
  );
}
