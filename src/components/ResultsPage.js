import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as GoogleLogo } from '../img/google__logo.svg'
import SearchControl from './SearchControl'
import useGoogleSearch from './useGoogleSearch'
import './ResultsPage.css'

import Page from './Page'

export default function ResultsPage(props) {
    const { data } = useGoogleSearch(props.SearchValue);
    let resultsInfo = 
    data &&
    `About ${data.searchInformation.totalResults} 
    results (${data.searchInformation.formattedSearchTime} seconds)`;
    return (
        <div className="results__main">
            <div className="results__header">
                <Link to="/">
                    <GoogleLogo className="results__logo" />
                </Link>
                <SearchControl className="results__input" 
                SearchValue={props.SearchValue} 
                setSearchValue={props.setSearchValue}
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