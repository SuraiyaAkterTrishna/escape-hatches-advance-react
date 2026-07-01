/* eslint-disable no-unused-vars */
import { useState } from "react";
import Comments from "../components/Comments";
import Example1 from "../components/Example1";
import Example2 from "../components/Example2";

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <>
      {/* <Example1 /> */}

      <div>
        <button onClick={() => setUserId(userId === 1 ? 2 : 1)}>
          Switch to Profile No. {userId === 1 ? 2 : 1}
        </button>
      </div>
      <Example2 key={userId} userId={userId} />
    </>
  );
}

export default App;
