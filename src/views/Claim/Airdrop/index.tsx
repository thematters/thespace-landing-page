import React, { useEffect, useState } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { useCountdown } from "~/hooks";
import { fetchWrapper, toPolygonAddressUrl } from "~/utils";

import Empty from "./Empty";
import ClaimDetail from "./ClaimDetail";

import styles from "./styles.module.sass";
import Spinner from "~/components/Spinner";

type ClaimData = {
  proof: string[];
  total: number;
} & { [key: string]: string };

export interface AirdropProps {
  back: () => void;
}

const Airdrop: React.FC<AirdropProps> = ({ back }) => {
  const { data: accountData } = useAccount();
  const { disconnect } = useDisconnect();
  const account = accountData?.address;

  const [isClaimed, setIsClaimed] = useState(false);
  const [canClaim, setCanClaim] = useState(false);
  const { days, hours, minutes, seconds } = useCountdown({
    end: "05/18/2022 00:00:00",
    onEnd: () => setCanClaim(true),
  });

  const [claimData, setClaimData] = useState<ClaimData>();
  const [loading, setLoading] = useState(false);
  const getAccountClaimData = async (account: string) => {
    setLoading(true);

    try {
      const data = await fetchWrapper.get(`/proofs/${account}.json`);
      setClaimData(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (!account) {
      back();
      return;
    }

    getAccountClaimData(account);
  }, [account]);

  const total = claimData?.total || 0;

  return (
    <>
      <section className={styles.airdrop}>
        <div className="container">
          <div className={styles.title}>
            <h2>Claim Your $SPACE</h2>
          </div>
          <div className={styles.wallet_address}>
            Wallet Address:{" "}
            <a
              href={toPolygonAddressUrl(account || "").url}
              target="_blank"
              rel="noreferrer"
            >
              {toPolygonAddressUrl(account || "").maskedAddress}
            </a>
            <button
              className={styles.disconnect}
              type="button"
              onClick={() => disconnect()}
            >
              Change
            </button>
          </div>

          {loading && <Spinner />}

          {!loading && total > 0 && (
            <div className={styles.content}>
              <div
                className={`${styles.claim_time} d-flex flex-column flex-lg-row justify-content-between align-items-start`}
              >
                <span className={styles.claim_time_date}>
                  Claim Time: May 1st 2022 - May 15th 2022
                </span>
                {!canClaim && (
                  <span className={styles.claim_time_countdown}>
                    {days} Days {hours} hours {minutes} min {seconds} sec
                  </span>
                )}
              </div>

              <ClaimDetail categories={claimData as any} total={total} />

              <div className={`${styles.buttons} buttons text-end`}>
                {canClaim ? (
                  <>
                    {isClaimed ? (
                      <button className="btn fill disabled">Claimed</button>
                    ) : (
                      <button className="btn fill">Claim</button>
                    )}
                  </>
                ) : (
                  <button className="btn fill disabled">Claim</button>
                )}
              </div>
            </div>
          )}

          {!loading && total <= 0 && <Empty />}
        </div>
      </section>
    </>
  );
};

export default Airdrop;
