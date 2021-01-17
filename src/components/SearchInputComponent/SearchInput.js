import React from 'react';

import {SearchContainer} from './searchinput.style';

function SearchInput({keyword, changeHandler}){
    return(
        <SearchContainer>
            <p><b>Search Headlines:</b></p>
            <input type="text" value={keyword} name="search" data-testid="search" onChange={changeHandler} placeholder="keywords"/>
        </SearchContainer>
    )
}

export default SearchInput;