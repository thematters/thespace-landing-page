import { utils } from "ethers";

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

export const fairdropABI = [
  'constructor(address token_, address signer_, address owner_, uint256 amountPerAddress_)',
  'error AddressAlreadyClaimed(address account)',
  'error ClaimExpired()',
  'error InvalidSignature()',
  'error TransferFailed(address account, uint256 amount)',
  'error UserIdAlreadyClaimed(bytes32 userId)',
  'event AmountChanged(uint256 amount)',
  'event Claimed(address indexed account, bytes32 indexed userId, uint256 amount)',
  'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
  'event SignerChanged(address indexed signer)',
  'event Swept(address indexed target, uint256 amount)',
  'function addressClaimed(address) view returns (bool)',
  'function amountPerAddress() view returns (uint256)',
  'function claim(address account_, bytes32 userId_, string nonce_, uint256 expiredAt_, uint8 v_, bytes32 r_, bytes32 s_) returns (bool success)',
  'function owner() view returns (address)',
  'function renounceOwnership()',
  'function setAmountPerAddress(uint256 amount_)',
  'function setSigner(address signer_)',
  'function signer() view returns (address)',
  'function sweep(address target_)',
  'function sweepToOwner()',
  'function token() view returns (address)',
  'function transferOwnership(address newOwner)',
  'function userIdClaimed(bytes32) view returns (bool)'
]

export const fairdropInterface = new utils.Interface(fairdropABI);