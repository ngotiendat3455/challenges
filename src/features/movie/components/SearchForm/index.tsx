import Input from 'components/atoms/Input';
import React from 'react';

const SearchForm:React.FC<any> = () => {
    const inputRef = React.useRef<any>();
    return (
        <div className='searchForm'>
            <Input 
                id="searchInput"
                ref={inputRef}
                isSearch={true}
                modifiers="dark"
            />
        </div>
    )
}

export default SearchForm;