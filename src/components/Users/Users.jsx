
import React from 'react';
import styles from './users.module.css';
import Paginator from '../Paginator/Paginator';
import User from './User';


let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {


    return <div className={styles.usersPage}>
        <div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
        </div>
       
        <div className={styles.usersColum}>
            {users.map(u => <User
                user={u}
                key={u.id}
                unfollow={props.unfollow}
                follow={props.follow}
                followingInProgress={props.followingInProgress} />

            )

            }
        </div>


    </div >
}



export default Users;





