import { Fragment } from "react"





const getGreeting = () => {
    return 'esteban es un cra'
}



export const FirstApp = () => {

    
    return (
        <>
        <h1>HOLA MUNDO</h1>
            <code>{JSON.stringify(getGreeting())}</code>
        </>
    )
}




