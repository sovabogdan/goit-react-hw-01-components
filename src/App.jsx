import TransactionHistory from './components/TransactionHistory'
import FriendList from './components/FriendList'
import Statistics from './components/Statistics';
import Profile from './components/Profile';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <><Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
    
  );
};
