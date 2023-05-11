import { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
	auth: any;
	setAuth: (auth: any) => void;
}

export const AuthContext = createContext<AuthContextType>({
	auth: {},
	setAuth: () => { },
});

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [auth, setAuth] = useState({});

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};