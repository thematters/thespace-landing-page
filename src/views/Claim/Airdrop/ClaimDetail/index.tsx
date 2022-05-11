import styles from "./styles.module.sass";

type ClaimDetailProps = {
  categories: { [key: string]: number }[];
  total: number;
};

const ClaimDetail: React.FC<ClaimDetailProps> = ({ categories, total }) => {
  const keys = Object.keys(categories).sort();
  const names = {
    "token-0x8515ba8ef2cf2f2ba44b26ff20337d7a2bc5e6d8": "Traveloggers Holder",
    "token-0xcdf8d568ec808de5fcbb35849b5bafb5d444d4c0": "Logbook Holder",
    "transfer-0x70bf60048d634173e29ceda160c0b4300bdba973": "Beta Test #1",
    "transfer-0xa69b77089b1d2b01212128593146125f28f0a7fd": "Beta Test #2",
    "poap-18004": "POAP#18004",
    "poap-19036": "POAP#19036",
    "poap-31209": "POAP#31209",
    "beta-test-3": "Third round Beta test",
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
            $STK {total.toLocaleString("en-US")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimDetail;
