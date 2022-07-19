import React, { useState, useEffect } from "react";
import CardList from '../containers/cardlist.js'
import ReactLoading from 'react-loading';

const App = () => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/users')
            .then(Response => Response.json())
            .then(userss => {
                setUsers(userss)
            })
    }, [])
    return (
        <div className="tc">
            <h1 className="f1">Usuarios</h1>
            {users == null ?
                <div className="flex justify-center">
                    <ReactLoading type="bubbles" color="red" height={667} width={375} />
                </div>
                :
                <CardList users={users} />
            }
        </div>
    )
}

export default App;