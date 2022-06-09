import React, { useEffect, useState } from "react";

import Steps from "./Steps";
import Results, { ResultStatus } from "./Results";
import { useAccount, useNetwork } from "wagmi";

export interface FairdropProps {
  back: () => void;
}

const Fairdrop: React.FC<FairdropProps> = ({ back }) => {
  const { data: accountData } = useAccount();
  const { activeChain } = useNetwork();
  const account = accountData?.address;
  const isUnsupportedNetwork = activeChain?.unsupported;

  const [resultStatus, setResultStatus] = useState<ResultStatus>("");

  useEffect(() => {
    if (!account || isUnsupportedNetwork) {
      back();
      return;
    }
  }, [account, isUnsupportedNetwork]);

  return (
    <>
      {resultStatus !== "" ? (
        <Results status={resultStatus} />
      ) : (
        <Steps setResultStatus={setResultStatus} />
      )}
    </>
  );
};

export default Fairdrop;
