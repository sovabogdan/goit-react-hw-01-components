import user from '../data/user.json'
import data from '../data/user.json'
import Profile from 'components/profile/Profile'
import Statistics from 'components/statistics/Statistics'

const App = () => {
    return (<>
        <div>
            <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        src={user.avatar}
        stats={user.stats} />
</div>
        <div>
            <Statistics title="Upload stats" stats={data} />
        </div>
        </>
    );
};
export default App;
