import React from 'react'
import { ReactComponent as GoogleLogo } from '../img/google__logo.svg'
import './Searcher.css'


import SearchControl from './SearchControl'

export default function Searcher({ SearchValue, setSearchValue }) {
    return (
        <div className="searcher__main">
            <GoogleLogo className="google__logo" />
            <SearchControl SearchValue={SearchValue} setSearchValue={setSearchValue}/>
        </div>
    )
}