import React, {useEffect, useState} from 'react';
import UserCard from "./UserCard";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles(() => ({
    divider: {
        backgroundColor: '#d9e2ee',
        margin: '0 20px',
    },
    list: {
        listStyleType: 'none'
    }
}));

export default function UserCards(props) {
    const styles = useStyles();
    let users = props.users;

    return (
        <ul>
            {users.map((carduser) => (
                <li className={styles.list}>
                    <UserCard
                        carduser={carduser}
                    />
                    <Divider variant={'middle'} className={styles.divider}/>
                </li>
            ))}
        </ul>
    )

}