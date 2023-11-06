import React from 'react'
import { useFilterContext } from '../Context/FilterContext'
import { FaCheck } from "react-icons/fa";
import Formatprice from "./FormatPrice"
const FilterSection = () => {
  const { filters: { text, color, price, maxPrice, minPrice }, updateFilterValue, all_products, clearFilters } = useFilterContext()
  console.log('maxPrice', maxPrice)
  console.log('minPrice', minPrice)

  const getUniqueData = (prod, attr) => {
    let data = prod.map((ele) => {
      return ele[attr]
    })
    console.log('data', data)
    if (attr === "colors") {
      // return (data = ["All", ...new Set([].concat(...data))]);
      data = data.flat();
    }
    return (data = ["all", ...new Set(data)]);
  }


  const categoryData = getUniqueData(all_products, 'category')
  const companyData = getUniqueData(all_products, 'company')
  const colorData = getUniqueData(all_products, 'colors')

  return (
    <>
      <div className='filter-search'>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name='text' placeholder='search' value={text} onChange={updateFilterValue} />
        </form>
      </div>
      <div>
        <p>Category</p>
        {
          categoryData.map((curele, index) => {
            return (
              <button key={index} type="button" name='category' value={curele} onClick={updateFilterValue}>{curele}</button>
            )
          })
        }
      </div>

      <div>
        <p>company</p>
        <select name="company" id="company" onClick={updateFilterValue}>
          {
            companyData.map((curele, index) => {
              return (
                <option key={index} name='company' value={curele}>{curele}</option>
              )
            })
          }
        </select>
      </div>

      <div>
        <p>colors</p>
        {
          colorData.map((curcolor, index) => {
            if (curcolor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curcolor}
                  name="color"
                  className="color-all--style"
                  onClick={updateFilterValue}>
                  all
                </button>
              );
            }
            return (
              <button key={index} name='color' value={curcolor} style={{ backgroundColor: curcolor }} className='color-filter' onClick={updateFilterValue}>
                {color === curcolor ? <FaCheck className="checkStyle" /> : null}
              </button>
            )
          })
        }
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <Formatprice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>
      <div className="filter-clear">
        <button className="" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </>
  )
}

export default FilterSection
