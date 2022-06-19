import {
  chain,
  configureChains,
  defaultChains,
  etherscanBlockExplorers,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { providers } from "ethers";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";

const isProd = process.env.NEXT_PUBLIC_RUNTIME_ENV === "production";
const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "";

export const supportedChains = isProd ? [chain.polygon] : [chain.polygonMumbai];

export const { chains } = configureChains(supportedChains, [
  alchemyProvider({ alchemyId }),
  publicProvider(),
]);

export const injectedConnector = new InjectedConnector({
  chains: supportedChains,
  options: { shimChainChangedDisconnect: true, shimDisconnect: true },
});

export const walletConnectConnector = new WalletConnectConnector({
  chains: supportedChains,
  options: {
    chainId: supportedChains[0].id,
    qrcode: true,
  },
});

export const provider = ({ chainId }: { chainId?: any }) =>
  new providers.AlchemyProvider(chainId, alchemyId);

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
