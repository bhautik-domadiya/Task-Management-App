import React, { createContext, useContext, ReactNode } from 'react';
import { UserData } from '../utils/user.interface';


interface ContextType {
    data: UserData | null;
    updateData: (newData: UserData | null) => void;
}

const UserContext = createContext<ContextType | undefined>(undefined);

interface ContextProviderProps {
    children: ReactNode;
}

const defaultData = {
    email: "",
    id: "",
    name: '',
    role: ''
}

const UserProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [data, setData] = React.useState<UserData | null>(defaultData);

    const updateData = (newData: UserData | null) => {
        setData(newData);
    };

    return (
        <UserContext.Provider value={{ data, updateData }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider };

// Custom hook to access the context
export const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};
