import { chain, etherscanBlockExplorers } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { providers } from "ethers";

const isProd = process.env.NEXT_PUBLIC_RUNTIME_ENV === "production";

export const supportedChains = isProd ? [chain.polygon] : [chain.polygonMumbai];

export const injectedConnector = new InjectedConnector({
  chains: supportedChains,
  options: { shimDisconnect: true },
});

export const walletConnectConnector = new WalletConnectConnector({
  options: {
    infuraId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "",
    qrcode: true,
  },
});

export const provider = ({ chainId }: { chainId?: any }) =>
  new providers.AlchemyProvider(
    chainId,
    process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
  );

export const webSocketProvider = ({ chainId }: { chainId?: any }) =>
  new providers.AlchemyWebSocketProvider(
    chainId,
    process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
  );

export const maskAddress = (address: string, prefixLen: number = 6) => {
  return `${address.substring(0, prefixLen)}...${address.substring(
    address.length - 4
  )}`;
};

export const formatHash = function (hash: string, isSmallUp = true) {
  if (isSmallUp) {
    return `${hash.slice(2, 6)}...${hash.slice(-4)}`;
  }
  return `${hash.slice(2, 4)}...${hash.slice(-3)}`;
};

export const toPolygonAddressUrl = (address: string) => {
  const url = isProd
    ? etherscanBlockExplorers.polygon.url
    : etherscanBlockExplorers.polygonMumbai.url;
  const maskedAddress = maskAddress(address);

  return {
    url: `${url}/address/${address}`,
    address,
    maskedAddress,
  };
};

export const toPolygonHashUrl = (txHash: string) => {
  const url = isProd
    ? etherscanBlockExplorers.polygon.url
    : etherscanBlockExplorers.polygonMumbai.url;

  return `${url}/tx/${txHash}`;
};
