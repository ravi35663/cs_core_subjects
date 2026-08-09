import React from 'react'
import "./Header.css"
// import { render } from '@testing-library/react'

export default function Header({
    title
}) {
    // return <h1 className="header">{title}</h1>
    return (
        <>
        <h1 className='header' data-testid='header-1'> {title}</h1>
        {/* <h1 title={'Header'} className='header'>Dogs</h1> */}
        </>
    )
}
