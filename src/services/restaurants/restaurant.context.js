import React,{createContext, useContext,useEffect,useMemo,useState} from "react";
import {restaurantRequest,restaurantsTransform } from "./restaurantservice"
import { LocationContext } from "../location/locationcontext";
export const RestContext=createContext();

export const Restaurantacontext=({children})=>{
    const [restaurants,setRestaurants]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    const {location,keyword}=useContext(LocationContext)
    
    const retrieve=(locationStr)=>{
        setLoading(true)
        setRestaurants([])
        setTimeout(()=>{
           
            restaurantRequest(locationStr)
            .then((res)=>restaurantsTransform(res))
            .then((results)=>{

                setLoading(false)
                setRestaurants(results)
            })
            .catch((err)=>{
                setLoading(false)
                setError(error)
            })
        },2000)
    }
    useEffect(()=>{
        if(location){
            const locationStr=`${location.lat},${location.lng}`
            console.log(locationStr)
            retrieve(locationStr)
        }
    },[location])
    return <RestContext.Provider value={{restaurants,loading,error}}>
        {children}
    </RestContext.Provider>
}