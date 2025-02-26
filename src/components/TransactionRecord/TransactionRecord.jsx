import { capitalizeFirstLetter } from "../../js/utils";

function TransactionRecord({ transaction }) {
  return (
    <>
      <td>{capitalizeFirstLetter(transaction.type)}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </>
  );
}

export default TransactionRecord;
