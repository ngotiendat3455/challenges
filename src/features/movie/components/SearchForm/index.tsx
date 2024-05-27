import Input from 'components/atoms/Input';
import React from 'react';

const SearchForm: React.FC<{
    handleFilter: (text: string) => void
}> = ({
    handleFilter
}) => {
    const inputRef = React.useRef<any>();
    return (
        <div className='searchForm'>
            <form onSubmit={(event) => {
                event.preventDefault();
                if (inputRef.current) {
                    console.log('inputRef.current', inputRef.current.value);
                    handleFilter(inputRef.current.value?.toLowerCase())
                }

            }}>
                <Input
                    id="searchInput"
                    ref={inputRef}
                    isSearch={true}
                    modifiers="dark"
                />
            </form>
        </div>
    )
}

export default SearchForm;