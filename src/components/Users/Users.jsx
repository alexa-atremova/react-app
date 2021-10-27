import React from 'react';
import './Users.css';

const Users = (props) => {
    return <div className="users">
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photo} />
                    </div>

                    <div>
                        {u.followerStatus
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.userName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>

                    </span>
                </span>
            </div>)
        }

    </div >


}

export default Users;