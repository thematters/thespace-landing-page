import styles from "./styles.module.sass";

type ClaimDetailProps = {
  categories: { [key: string]: number }[];
  total: number;
};

const ClaimDetail: React.FC<ClaimDetailProps> = ({ categories, total }) => {
  const keys = Object.keys(categories).sort();
  const names = {
    ambassadors: "Ambassadors",
    "collection-owners-0x8515ba8ef2cf2f2ba44b26ff20337d7a2bc5e6d8":
      "Traveloggers",
    historians: "Historians",
    "matters-news-users": "Matters.News Users (Sign-In with Ethereum)",
    moderators: "Moderators",
    "poap-owners-18004": "POAP: Traveloggers Airdrop 2021",
    "poap-owners-19035": "POAP: Traveloggers Fam, Merry Christmas from Zhenya",
    "poap-owners-19036": "POAP: Traveloggers Fam, Merry Christmas from Gena",
    "poap-owners-20539": "POAP: Traveloggers Fam, AMA #1",
    "poap-owners-22376": "POAP: For Matterverse Solitaire authors",
    "poap-owners-24337": "POAP: Traveloggers Fam, AMA #2",
    sharers: "Sharers",
    "token-owners-0x2953399124f0cbb46d2cbacd8a89cf0599974963:3819291189892224204082314286982382342495564934183251953866534461082272006204":
      "PoC Participants: Lunar New Year (Team A)",
    "token-owners-0x2953399124f0cbb46d2cbacd8a89cf0599974963:3819291189892224204082314286982382342495564934183251953866534462181783633980":
      "PoC Participants: Lunar New Year (Team B)",
    "token-owners-0x2953399124f0cbb46d2cbacd8a89cf0599974963:3819291189892224204082314286982382342495564934183251953866534463281295261721":
      "PoC Participants: 706 Dali",
    "token-owners-0x2953399124f0cbb46d2cbacd8a89cf0599974963:3819291189892224204082314286982382342495564934183251953866534464380806889522":
      "PoC Participants: Tiger of The Year",
    "token-owners-0x2953399124f0cbb46d2cbacd8a89cf0599974963:3819291189892224204082314286982382342495564934183251953866534467679341772870":
      "PoC Participants: SnapFingers (Team A)",
    "token-owners-0x2953399124f0cbb46d2cbacd8a89cf0599974963:3819291189892224204082314286982382342495564934183251953866534468778853400646":
      "PoC Participants: SnapFingers (Team B)",
    "token-owners-0x2953399124f0cbb46d2cbacd8a89cf0599974963:3819291189892224204082314286982382342495564934183251953866534473176899911715":
      "PoC Participants: Brave Series RNFT x The Space",
    "token-owners-0x2953399124f0cbb46d2cbacd8a89cf0599974963:3819291189892224204082314286982382342495564934183251953866534481972992933929":
      "PoC Participants: MeTaiwan",
    "token-owners-0x2953399124f0cbb46d2cbacd8a89cf0599974963:3819291189892224204082314286982382342495564934183251953866534483072504561764":
      "Testnet QAs",
    "token-owners-0x2953399124f0cbb46d2cbacd8a89cf0599974963:3819291189892224204082314286982382342495564934183251953866534484172016189460":
      "PoC Participants: Idea Buyers Club",
    "token-owners-0x2953399124f0cbb46d2cbacd8a89cf0599974963:3819291189892224204082314286982382342495564934183251953866534485271527817256":
      "PoC Participants: FAB DAO",
    "token-owners-0x2953399124f0cbb46d2cbacd8a89cf0599974963:4812678764772090908112311131554202768671760291837047113732694594808147083279":
      "Matters AMA: Creator Economy (I)",
    "token-owners-0x2953399124f0cbb46d2cbacd8a89cf0599974963:4812678764772090908112311131554202768671760291837047113732694595907658711050":
      "Discord Mods",
    "transfer-0x70bf60048d634173e29ceda160c0b4300bdba973":
      "Testnet Participants: Round #1",
    "transfer-0x7edbb61ccea2f29e31525d33f310a9ea943c7a89":
      "Testnet Participants: Round #3",
    "transfer-0xa69b77089b1d2b01212128593146125f28f0a7fd":
      "Testnet Participants: Round #2",
  };

  return (
    <div className={styles.table}>
      <div className={styles.table_head}>
        <div className={`${styles.row} row`}>
          <div className="col-9">Category</div>
          <div className="col-3 text-end">Token</div>
        </div>
      </div>

      <div className={styles.table_body}>
        {keys.map((k) =>
          names[k as keyof typeof names] ? (
            <div className={`${styles.row} row`} key={k}>
              <div className="col-9">{names[k as keyof typeof names]}</div>
              <div className="col-3 text-end">
                {categories[k as keyof typeof categories].toLocaleString(
                  "en-US"
                )}
              </div>
            </div>
          ) : null
        )}
      </div>

      <div className={styles.table_foot}>
        <div className={`${styles.row} row`}>
          <div className="col-9">Total Token</div>
          <div className="col-3 text-end">
            $SPACE {total.toLocaleString("en-US")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimDetail;
