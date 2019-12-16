import process from "process";

const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export function isDev(): boolean {
    return development;
}

export function apiRoute(controller:string) : string {
    const prefix = 'http://'
    // const domain = isDev() ? 'https://inversion-7d099.firebaseapp.com/' : 'https://inversion-7d099.firebaseapp.com/';
    const domain = isDev() ? `${prefix}localhost:3000` : `${prefix}localhost:3000`;
    return `${domain}/${controller}`
}