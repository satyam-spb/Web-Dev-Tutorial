// useContext() : used to send values bw multiple levels of components directly without using props 
// NOTE :  All the child and sub-child (not sure if that's a word but u get the meaning :) ) components of ComponentA has access to the useContext 
// How to : 

// PROVIDER COMPONENT 
// 1. import { createContext } from "react";
// 2. export const MyContextName = createContext(valueOrVariableName) :  create a createContext variable and export it 
// 3. wrap any Children Component within this special provider component (here ComponentB is the child component) 

// // CONSUMER COMPONENT 
// 1. import React,{useContext} from "react";
//    import {mycontextName} from 'location/of/the/providerComponent' 
// 2. const value = useContext(mycontextName) 


import ComponentB from "./ComponentB";
import {createContext, useState } from "react";
export const UserContext = createContext();

function ComponentA(){
    const [user,setUser] = useState("Gaurav Choudhary");
    return(
        <div className="component-box">
            <h1>ComponentA</h1>
            <h2> {`Hello ${user}`} </h2>

            {/* Sending Data Through props all the way to ComponentD, this is called prop drilling :   */}
            {/* <ComponentB user={user}/> */}

            {/* Sending data through useContext  */}
            <UserContext.Provider value={user} >
                <ComponentB />
            </UserContext.Provider>
        </div>
    );
}
export default ComponentA

