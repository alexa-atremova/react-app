import * as axios from 'axios';
import React from 'react';
import styles from './users.module.css';


let Users = (props) => {


        let pages = [];
        // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        // for (let i = 1; i <= pagesCount; i++) {
            for (let i = 1; i <= 30; i++) {
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
                        <div className={styles.users}>
                            <img src={u.photos.small != null ? u.photos.small : "./userPhoto.png"} />
                        </div>

                        <div>
                            {u.followerStatus
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>
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