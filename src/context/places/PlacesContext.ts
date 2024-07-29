import { createContext } from "react";

export interface PlacesContectProps {
    isLoading: boolean,
    userLocation?: [number,number]
}


export const PlacesContext = createContext({} as PlacesContectProps)