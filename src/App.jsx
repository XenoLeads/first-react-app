import { useState } from "react";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <div id="content" onPointerMove={e => setMousePosition({ x: e.clientX, y: e.clientY })}>
      <img
        src="./logo.png"
        alt=""
        className="logo"
        draggable="false"
        style={{
          transform: `translate(${mousePosition.x - 50}px, ${mousePosition.y - 50}px)`,
        }}
      />
    </div>
  );
}

export default App;
