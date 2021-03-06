import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as GoogleLogo } from '../../img/google__logo.svg'
import {  useGoogleSearch  } from '../../services/google__services'
import './ResultsPage.css'

import SearchControl from '../SearchControl/SearchControl'
import Page from '../Page/Page'

export default function ResultsPage({ SearchValue, setSearchValue }) {
    const { data } = useGoogleSearch(SearchValue);
    let resultsInfo = 
    data &&
    `About ${data.searchInformation.totalResults} 
    results (${data.searchInformation.formattedSearchTime} seconds)`;

    useEffect(() => {
        let searchControl = document.querySelector('.search__control');
        searchControl.style.justifyContent = "flex-start";
        searchControl.style.marginLeft = '1.5em';
    }, [])
    return (
        <div className="results__main">
            <div className="results__header">
                <Link to="/">
                    <GoogleLogo className="results__logo" />
                </Link>
                <SearchControl className="results__input" 
                SearchValue={SearchValue} 
                setSearchValue={setSearchValue}
                hideButtons />
            </div>
           
            <p className="results__info">{resultsInfo}</p>

            <div className="results__container">
                {data?.items.map(page => {
                    return(
                        <Page 
                        key={page.cacheId}
                        displayLink={page.displayLink}
                        link={page.link}
                        title={page.title}
                        snippet={page.snippet}/>
                    );
                })}
            </div>
        </div>
    )
}