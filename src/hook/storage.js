import { useState, useEffect } from 'react';

const STORAGE_KEY = 'itss-project';

function useStorage() {
    const [users, setUsers_] = useState([]);
    useEffect(() => {
        const data = localStorage.getItem(STORAGE_KEY);
        if(!data){
            localStorage.setItem(STORAGE_KEY,JSON.stringify([]));
        }else{
            setUsers(JSON.parse(data));
        }
    }, []);

    const setUsers = users => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
        setUsers_(users);
    };

    return [users, setUsers];
}

export default useStorage;