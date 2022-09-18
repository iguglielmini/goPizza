import React, { createContext, useContext, useState, ReactNode } from "react";

type AuthContextData = {};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({});


function AuthProvider({ children }: AuthProviderProps){
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
}

function useAuth(){
    const context = useContext(AuthContext);
    
    return context;
}

export { AuthProvider, useAuth }