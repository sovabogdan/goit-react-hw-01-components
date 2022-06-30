import user from '../data/user.json'
import  Profile  from "./Profile"

const App = () => {
    return <div><Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        src={user.avatar}
        stats={user.stats} /></div>
};
export default App;
