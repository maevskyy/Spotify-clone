import { create } from "zustand";   

type TCurrent = {
    musicData: TMusic
    show: boolean,
    turnOnMusic: (payload: TMusic) => void
}

type TMusic = {
    url: string,
    title: string,
    author: string,
    image: string
}

export const useCurrentMusic = create<TCurrent>(set => ({
    musicData: {
        url: '',
        title: '',
        author: '',
        image: '',
    },
    show: true,
    turnOnMusic: (payload: TMusic) => set({musicData: payload})
}))