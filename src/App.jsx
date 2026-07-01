/* eslint-disable no-unused-vars */
import { useState } from "react";
import Comments from "../components/Comments";
import Example1 from "../components/Example1";
import Example2 from "../components/Example2";
import { items1, items2 } from "./data/itemsData";
import Example3 from "../components/Example3";

function App() {
  const [items, setItems] = useState(items1);
  // const [userId, setUserId] = useState(1);

  return (
    <>
      {/* <Example1 /> */}

      {/* <div>
        <button onClick={() => setUserId(userId === 1 ? 2 : 1)}>
          Switch to Profile No. {userId === 1 ? 2 : 1}
        </button>
      </div>
      <Example2 key={userId} userId={userId} /> */}

      <button onClick={() => setItems(items2)}>Switch to Items2</button>
      <button onClick={() => setItems(items1)}>Switch to Items1</button>
      <Example3 items={items} />
    </>
  );
}

export default App;
