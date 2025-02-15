import { useEffect, useReducer } from "react"
import { PlacesContext } from "./PlacesContext"
import { placesReducer } from "./placesReducer"
import { getUserLocation } from "../../helpers"

export interface PlaceState {
    isLoading: boolean,
    userLocation?: [number, number]
}

const INITIAL_STATE: PlaceState = {
    isLoading: true,
    userLocation: undefined
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({children}: Props) => {
    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)

    useEffect(() => {
        getUserLocation()
            .then( lngLat => dispatch({type: 'setUserLocation', payload: lngLat}))
    },[])
    
  return (
    <PlacesContext.Provider value={{
        ...state
    }}>
        {children}
    </PlacesContext.Provider>
  )
}
