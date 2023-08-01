import { create } from "zustand";
import { TSearch } from "../../../types/searchT";

type TSongStore = {
    songs: TSearch[] | [],
    loading: boolean,
    error: boolean,
    addSongs: (payload: TSearch[]) => void

}

export const useSongsStore = create<TSongStore>((set) => ({
    songs: [],
    loading: false,
    error: false,
    addSongs: (payload: TSearch[]) => set(() => ({songs: payload})) 
}))