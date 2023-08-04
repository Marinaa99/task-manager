import React, {createContext, useContext, useState, useEffect} from "react";

const users = [
    {
        id: 1,
        email: 'marina.vojinovic@gmail.com',
        password: '12345',
        name: 'Marina Vojinovic'
    },
    {
        id: 2,
        email: 'ksenija.bulatovic@gmail.com',
        password: '111111',
        name: 'Ksenija Bulatovic'
    }
]

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loggedIn = localStorage.getItem('loggedIn');
        const userId = localStorage.getItem('userId');

        if (loggedIn && userId) {
            const currentUser = users.find((user) => user.id === parseInt(userId));
            setUserData(currentUser);
        }
        setLoading(false);

    }, []);

    const login = (email, password) => {
        const currentUser = users.find(user => user.email === email);
        let success = false;

        if(currentUser){
            if(currentUser.password === password){
                setUserData(currentUser);
                localStorage.setItem('loggedIn', true);
                localStorage.setItem('userId', currentUser.id);
                success = true;
            }else{
                setUserData(null);
                localStorage.removeItem('loggedIn');
                localStorage.removeItem('userId');
            }
        }else{
            setUserData(null);
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('userId');
        }

        return success;
    }

    const logout = () => {
        setUserData(null);
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userId');
    }

    return <UserContext.Provider value={{
        userData: userData,
        login: (email, password) => login(email, password),
        logout: () => logout()
    }}>
        {loading ? null : children}
    </UserContext.Provider>
}

export const useUserData = () => {
    return useContext(UserContext);
}

export default UserProvider;