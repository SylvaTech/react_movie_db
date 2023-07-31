import React, { useState, useEffect, useRef } from 'react';
// styles
import { Content, Wrapper } from './SearchBox.styles';
// Image
import searchIcon from '../../images/search-icon.svg';

const SearchBox = ( { setSearchTerm } ) =>{
    const [state, setState] = useState('');
    const initial = useRef(true);
// Cause a delay of 1/2 second (500ms) before searching with the search term
    useEffect(() => {
        // Handle initial re-render
         if(initial.current){
            initial.current=false;
            return;
         }
        const timer = setTimeout(()=>{
            setSearchTerm(state);
        },500)
        // clear timer
        return () => clearTimeout(timer);
    }, [setSearchTerm, state])



    return(
        <Wrapper>
            <Content>
                <img src= {searchIcon} alt='search-icon'/>
                <input 
                type='text' 
                placeholder='Search Movies'
                onChange={event=>setState(event.currentTarget.value)} 
                value={state}              
                />
            </Content>
        </Wrapper> 
    );
};
export default SearchBox;