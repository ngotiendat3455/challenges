import React from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
const Sort: React.FC<any> = ({
    products,
    grid_view,
    setListView,
    setGridView
}) => {
    //   const {
    //     filtered_products: products,
    //     grid_view,
    //     setGridView,
    //     setListView,
    //     sort,
    //     updateSort,
    //   } = useFilterContext()
    return (
        <div className="sort">
            <div className='btn-container'>
                <button
                    onClick={setGridView}
                    className={`${grid_view ? 'active' : null}`}
                >
                    <BsFillGridFill />
                </button>
                <button
                    onClick={setListView}
                    className={`${!grid_view ? 'active' : null}`}
                >
                    <BsList />
                </button>
            </div>
            <p>{products.length} movies found</p>
            <hr />
            {/* <form>
                <label htmlFor='sort'>sort by</label>
                <select
                    name='sort'
                    id='sort'
                    value={sort}
                    onChange={updateSort}
                    className='sort-input'
                >
                    <option value='price-lowest'>price (lowest)</option>
                    <option value='price-highest'>price (highest)</option>
                    <option value='name-a'>name (a - z)</option>
                    <option value='name-z'>name (z - a)</option>
                </select>
            </form> */}
        </div>
    )
}

export default Sort;