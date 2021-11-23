
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './users.module.css';
import { usersAPI } from "../../api/usersAPI";


let Users = (props) => {


    let pages = [];
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // for (let i = 1; i <= pagesCount; i++) {
    for (let i = 1; i <= 50; i++) {
        pages.push(i);
    }

    return <div className={styles.usersPage}>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}

        </div>

        <div className={styles.usersColum}>
            {props.users.map(u => <div key={u.id}>
                <span >
                    <NavLink to={'/profile/' + u.id}>
                        <div className={styles.users}>
                            <img src={u.photos.small != null ? u.photos.small : "./userPhoto.png"} />
                        </div>
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => {
                                props.unfollow(u.id);

                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => {
                                props.follow(u.id);
                        
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span >
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        {/* <div>{u.location.country}</div> */}
                        {/* <div>{u.location.city}</div> */}

                    </span>
                </span>
            </div>)

            }
        </div >
    </div >
}



export default Users;