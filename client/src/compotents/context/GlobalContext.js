import axiox from 'axios';
import React, { createContext } from 'react';


export const DataContext = createContext();


export const DataProvider = ({children}) => {




    return (
        <DataContext.Provider value = 'hello from context'>
         {children}
        </DataContext.Provider>
    )




}