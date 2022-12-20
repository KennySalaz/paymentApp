import React, { createContext, useContext, useReducer } from 'react'

export const CreateAppContext = createContext()

const AppContext = ({ reducerApp, children, initialStateApp }) =>
(
    <CreateAppContext.Provider value={useReducer(reducerApp, initialStateApp)} >
        {children}
    </CreateAppContext.Provider>
)

export default AppContext

export const UseContextApp = () => useContext(CreateAppContext)