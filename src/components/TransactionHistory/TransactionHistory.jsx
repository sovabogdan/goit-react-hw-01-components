import PropTypes from 'prop-types';
import TransactionsItem from './TransactionsItem';
import { Table, TableHead, Row, Column } from './Transactions.styled';

const TransactionHistory = ({ items}) => {
    return (
        <Table>
  <TableHead>
    <Row>
      <Column>Type</Column>
      <Column>Amount</Column>
      <Column>Currency</Column>
    </Row>
  </TableHead>

        <tbody> {items.map(item => (<TransactionsItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}/>
      
  ))}
  </tbody>
</Table>
    );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;