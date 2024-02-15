import React, { useState } from 'react';
import { UsernameContext, PasswordContext, AgeContext, HobbyContext } from './UserContexts';

export function UsernameContextProvider({ children }) {
    const [username, setUsername] = useState('');
    return (
        <UsernameContext.Provider value={{ username, setUsername }}>
            {children}
        </UsernameContext.Provider>
    );
}

export function PasswordContextProvider({ children }) {
    const [password, setPassword] = useState('');
    return (
        <PasswordContext.Provider value={{ password, setPassword }}>
            {children}
        </PasswordContext.Provider>
    );
}

export function AgeContextProvider({ children }) {
    const [age, setAge] = useState('');
    return (
        <AgeContext.Provider value={{ age, setAge }}>
            {children}
        </AgeContext.Provider>
    );
}

export function HobbyContextProvider({ children }) {
    const [hobby, setHobby] = useState('');
    return (
        <HobbyContext.Provider value={{ hobby, setHobby }}>
            {children}
        </HobbyContext.Provider>
    );
}