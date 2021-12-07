
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './users.module.css';


let User = ({user, followingInProgress, unfollow, follow}) => {


    return <div >
        <span  >
            <NavLink to={'/profile/' + user.id}>
                <div className={styles.users}>
                    <img src={user.photos.small != null ? user.photos.small : "./userPhoto.png"} />
                </div>
            </NavLink>
            <div >
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id);

                    }}>Unfollow</button>

                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id);

                    }}>Follow</button>
                }
            </div>
        </span>
        <span >
            <div >
                <div>{user.name}</div>
                <div className={styles.hz}>{user.status}</div>
            </div>

        </span>
        


    </div >

}



export default User;