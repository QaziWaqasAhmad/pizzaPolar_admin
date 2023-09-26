import { useState } from "react";
import  SyncLoader  from "react-spinners/SyncLoader";
// import ClipLoader from "react-spinners/ClipLoader";



export function Loader({ isLoading }) {
  let [color, setColor] = useState("#000");

  return (
    <div className="sweet-loading">
      <SyncLoader
        color={color}
        loading={isLoading}
        // cssOverride={override}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}


