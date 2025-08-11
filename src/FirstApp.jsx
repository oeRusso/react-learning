import { Fragment } from "react"
import PropTypes from 'prop-types'

export const FirstApp = ({title, subtitle}) => {

    if (!title){
        throw new Error('No hay titulo en la app')
    }

    // console.log(props);
    return (
        <>
        <h1>{title}</h1>
            {/* <code>{JSON.stringify(getGreeting())}</code> */}
            <p>{subtitle}</p>
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.number
}



