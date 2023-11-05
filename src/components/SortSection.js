import React from 'react'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from '../Context/FilterContext';

const SortSection = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <>
      <div className='sortsection'>
        <div>
          <button
            className={grid_view ? "actives sort-btn" : "sort-btn"}
            onClick={setGridView}>
            <BsFillGridFill className="icon" />
          </button>

          <button
            className={!grid_view ? "actives sort-btn" : " sort-btn"}
            onClick={setListView}>
            <BsList className="icon" />
          </button>
        </div>
        <div>
          <form action="#">
            <select name="sort" id="sort" onClick={sorting}>
              <option value="lowest">price(lowest)</option>
              <option value="highest">price(highest)</option>
              <option value="a-z">price(a-z)</option>
              <option value="z-a">price(z-a)</option>
            </select>
          </form>
        </div>
      </div>

    </>
  )
}

export default SortSection
