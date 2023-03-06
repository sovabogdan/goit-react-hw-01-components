import PropTypes from 'prop-types';
import { Row, Column } from './Transactions.styled';
const TransactionsItem = ({ type, amount, currency }) => {
    return (
        <>
            <Row>
      <Column>{type}</Column>
      <Column>{amount}</Column>
      <Column>{currency}</Column>
    </Row>
        </>
    );
};

TransactionsItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionsItem;
