import React, { Component, useState, useEffect } from "react";
import CardList from '../containers/cardlist.js'

const users = require('../services/users.json');

const App = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/users')
            .then(Response => Response.json())
            .then(userss => {
                console.log(users)
                setUsers(userss)
            })
    }, [])
    return (
        <div className="tc">
            <h1 className="f1">Usuarios</h1>
            <CardList users={users} />
        </div>
    )
}

export default App;