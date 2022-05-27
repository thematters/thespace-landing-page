export * from "./fetch";
export * from "./wallet";
export * from "./contract";

export const canAddToMetaMask = () =>
  "ethereum" in window && window?.ethereum?.request;

export const addTokenToMetaMask = async () => {
  await window?.ethereum?.request({
    // @ts-ignore
    method: "wallet_watchAsset",
    params: {
      type: "ERC20",
      options: {
        address: process.env.NEXT_PUBLIC_CONTRACT_TOKEN,
        symbol: "SPACE",
        decimals: 18,
        image: "https://thespace.game/img/avatar.png",
      },
    },
  });
};
