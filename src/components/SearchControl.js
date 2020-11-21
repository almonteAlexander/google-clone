import React from 'react'
import { useHistory } from 'react-router'
import { Button } from '@material-ui/core'
import { ReactComponent as Loupe } from '../img/loupe.svg'
import './SearchControl.css'

export default function SearchControl({ SearchValue, setSearchValue, hideButtons }) {
   
    const history = useHistory();
    let handleSearch = () => {
        if(SearchValue){ history.push(`/search?${SearchValue}`) } 
        else{ return; }
    }

    let handleFormSubmit= (e) => {
        e.preventDefault();
        handleSearch();
    }
    
    return (
        <>
          {!hideButtons ?
            <form className="search__control"
            onSubmit={e => handleFormSubmit(e)}>

                <div className="input__container">
                    <input type="text" className="search__input" placeholder="Search on google..." 
                     autofocus="autofocus" value={SearchValue} onChange={e => setSearchValue(e.target.value)}/>
                    <Loupe className="loupe__svg"/>
                </div>
                 

                <div className="buttons__container">
                    <Button className="control__button"
                    onClick={e => handleSearch()}>
                        Google Search
                    </Button>
                    <Button className="control__button">I'm Feeling Lucky</Button>
                </div>
            </form>
            :
            <form className="search__control">
                <div className="input__container">
                    <input type="text" className="search__input" placeholder="Search on google..." 
                     autofocus="autofocus" value={SearchValue} onChange={e => setSearchValue(e.target.value)}/>
                    <Loupe className="loupe__svg"/>
                </div>
            </form>
            }  
        </>
    )
}