import React from 'react'
import { useHistory } from 'react-router'
import { Button } from '@material-ui/core'
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
            <form className="searcher__control"
            onSubmit={e => handleFormSubmit(e)}>
                 <input type="text" className="search__input" autofocus="autofocus"
                 onChange={e => setSearchValue(e.target.value)}/>
                
                <div className="buttons__container">
                    <Button className="control__button"
                    onClick={e => handleSearch()}>
                        Google Search
                    </Button>
                    <Button className="control__button">I'm Feeling Lucky</Button>
                </div>
            </form>
            :
            <form className="searcher__control">
                 <input type="text" className="search__input" autofocus="autofocus"
                 value={SearchValue}
                 onChange={e => setSearchValue(e.target.value)}/>
            </form>
            }  
        </>
    )
}
