import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import API from '../../utils/API';

function Login (props) {
    const [username, getUsername] = useState();
    const [password, getPassword] = useState();
    const [errorForm, getErrorForm] = useState(false);
    const history = useHistory();


    const handleSubmit = e => {
        e.preventDefault();
        let data = {username, password}

        API.loginUser(data)
            .then(res => {
                sessionStorage.setItem('auth', true)
                sessionStorage.setItem('id', JSON.stringify(res.data._id))
                props.auth()
                history.push("/my-favorites")
            })
            .catch(res => getErrorForm(true))
    };

    return (
        <div className="flex justify-center mt-24 mb-8">
            <div className="w-full max-w-xs">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input onChange={e => getUsername(e.target.value)}
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               id="username" type="text" placeholder="Username"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input onChange={e => getPassword(e.target.value)}
                               className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                               id="password" type="password" placeholder="******************"/>
                        <p className={errorForm ? "text-red-500 text-xs italic" : "hidden"}>Your password or username are
                            incorrect.</p>
                        <p className={errorForm ? "text-red-500 text-xs italic" : "hidden"}>Try again!</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <a href="/my-favorites">
                            <button
                                className="bg-primary hover:bg-teal-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Log in!
                            </button>
                        </a>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Buy-Spy Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Login;
