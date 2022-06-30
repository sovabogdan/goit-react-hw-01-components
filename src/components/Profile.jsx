export const Profile = ({username, tag, location, avatar, stats}) => {
    return <><div>{avatar}</div><h2>{username}</h2><p>@{tag}</p><p>{location}</p><div>{stats}</div></>
};