import axios from "axios";
import { useEffect,useState } from "react";
import { Pokemon } from "../interfaces/interfaces";

export const usePokemon = (url?: string) => {
    const [pokemon, setPokemon] = useState<null| undefined | Pokemon>();

    const getPokemon = async () => {
        const data:any = await axios.get(url!);
        setPokemon(data.data);
    }

    useEffect(() => {
      getPokemon()
    
     
    }, [])
    return {pokemon}
};