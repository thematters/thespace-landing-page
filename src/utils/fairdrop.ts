export const getFairdropSignMessage = ({
  account,
  nonce,
  expiredAt,
}: {
  account: string;
  nonce: string;
  expiredAt: number;
}) => `I am signing this message to prove the ownership of this address.

Account: ${account}
Nonce: ${nonce}
Expired At: ${expiredAt}`;
