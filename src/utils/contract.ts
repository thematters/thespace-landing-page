import { utils } from "ethers";

export const claimAirdropABI = [
  "constructor(address token_, bytes32 merkleRoot_, uint256 expireTimestamp_)",
  "event Claimed(address indexed account, uint256 amount)",
  "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
  "function claim(address account, uint256 amount, bytes32[] merkleProof)",
  "function expireTimestamp() view returns (uint256)",
  "function hasClaimed(address) view returns (bool)",
  "function merkleRoot() view returns (bytes32)",
  "function owner() view returns (address)",
  "function renounceOwnership()",
  "function sweep(address target)",
  "function sweepToOwner()",
  "function token() view returns (address)",
  "function transferOwnership(address newOwner)",
];

export const claimAirdropInterface = new utils.Interface(claimAirdropABI);
