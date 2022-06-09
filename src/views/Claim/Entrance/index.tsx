import { useEffect } from "react";
import { useConnect, useAccount, useNetwork } from "wagmi";
import classNames from "classnames";

import { injectedConnector, walletConnectConnector } from "~/utils";

import styles from "./styles.module.sass";

type EntranceProps = {
  next: () => void;
};

const Entrance: React.FC<EntranceProps> = ({ next }) => {
  const {
    activeConnector,
    connect,
    error: connectError,
    isConnecting,
    pendingConnector,
  } = useConnect();
  const { data: accountData } = useAccount();
  const {
    activeChain,
    chains,
    error: networkError,
    switchNetwork,
  } = useNetwork();

  const account = accountData?.address;
  const isUnsupportedNetwork = activeChain?.unsupported;
  const currentChainName = activeChain?.name;
  const targetChainName = chains[0]?.name;
  const targetChainId = chains[0]?.id;
  const errorMessage = connectError?.message || networkError?.message;

  const switchToTargetNetwork = () => {
    if (!switchNetwork) return;

    switchNetwork(targetChainId);
  };

  // go forward if wallet is connected
  useEffect(() => {
    if (!account || isUnsupportedNetwork) {
      return;
    }

    next();
  }, [account, isUnsupportedNetwork]);

  const metaMaskClasses = classNames({
    [styles.metamask]: true,
    [styles.disabled]: !injectedConnector.ready,
    [styles.connecting]:
      isConnecting && pendingConnector?.id === injectedConnector.id,
    [styles.active]: activeConnector?.id === injectedConnector.id,
  });
  const walletConnectClasses = classNames({
    [styles.walletconnect]: true,
    [styles.disabled]: !injectedConnector.ready,
    [styles.connecting]:
      isConnecting && pendingConnector?.id === walletConnectConnector.id,
    [styles.active]: activeConnector?.id === walletConnectConnector.id,
  });
  const amountPerAddress =
    process.env.NEXT_PUBLIC_FAIRDROP_AMOUNT_PER_ADDRESS || "your";

  return (
    <>
      <section className={`${styles.entrance} text-center`}>
        <div className={styles.illu}>
          <figure>
            <img className="img-fluid" src="/img/entrance-illu-1.svg" />
          </figure>
        </div>
        <div className={`${styles.container} container`}>
          <div className={styles.title}>
            <h2>Claim {amountPerAddress} $SPACE</h2>
          </div>
          <div className={styles.text}>
            <span>
              Before claiming $SPACE, let&apos;s connect your wallet first.
            </span>
          </div>

          <div className={styles.wallet}>
            <button
              className={metaMaskClasses}
              onClick={() => connect(injectedConnector)}
            >
              MetaMask
            </button>

            <button
              className={walletConnectClasses}
              onClick={() => connect(walletConnectConnector)}
            >
              WalletConnect
            </button>

            {isUnsupportedNetwork && (
              <p className={styles.error}>
                Unsupported network: {currentChainName}.&nbsp;
                <span role="button" onClick={switchToTargetNetwork}>
                  Switch to {targetChainName}.
                </span>
              </p>
            )}

            {errorMessage && (
              <p className={styles.error}>
                {errorMessage ?? "Failed to connect"}
              </p>
            )}

            {/* {account && (
              <p className={styles.info}>
                {toPolygonAddressUrl(account || "").maskedAddress}
              </p>
            )} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Entrance;
