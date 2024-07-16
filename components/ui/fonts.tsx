import { Open_Sans, Roboto } from "next/font/google";

export const roboto = Roboto({
    weight : ['400' , '500' , '700' , '900'],
    subsets : ['latin'],
})

export const openSans = Open_Sans({
    weight : ['400' , '500' , '700'],
    subsets : ['latin'],
    style : ['normal']
})