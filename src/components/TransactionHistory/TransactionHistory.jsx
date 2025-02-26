import TransactionRecord from "../TransactionRecord/TransactionRecord";
import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  if (items.length === 0) return <div>No Transactions</div>;

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr key={item.id} className={index % 2 !== 0 ? css.even : ""}>
            <TransactionRecord transaction={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
