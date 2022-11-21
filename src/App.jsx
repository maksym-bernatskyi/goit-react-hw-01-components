import Profile from './components/Profile/Profile';
import user from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import data from './data/data.json';
// import FriendList from './components/FriendList/FriendList';
// import friends from './data/friends.json';
// import TransactionsHistory from './components/TransactionHistory/TransactionHistory';
// import transactions from './data/transactions.json';

export default function App() {
  return (
    <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} 
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <Statistics stats={data} />
      {/* <FriendList friends={friends} />
      <TransactionsHistory items={transactions} /> */}
      </>
  );
};
