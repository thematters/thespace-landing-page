import React, { useState } from "react";

import Steps from "./Steps";
import Results from "./Results";

export interface FairdropProps {
  back: () => void;
}

const Fairdrop: React.FC<FairdropProps> = ({ back }) => {  
  const [resultStatus, setResultStatus] = useState('');
  return (
    <>
      {resultStatus !== "" ? (
        <Results status={resultStatus} />
      ) : (
        <Steps
          back={(val) => {
            setResultStatus(val);
          }}
        />
      )}
    </>
  );
};

export default Fairdrop;
