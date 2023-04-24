import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const PrductsSidebar = ({setClickedCategory,setSearch,setPriceRange,priceRange,setClear}) => {

  const [categories, setCategories] = useState([])
  // const [clickedCategory, setClickedCategory] = useState('')
  // const [priceRange, setPriceRange] = useState(0)

  const handleChange = (event)=>{
    setClickedCategory(event.target.value)
  }

  useEffect(() => {

    axios.get('https://dummyjson.com/products/categories').then((res) => {

      setCategories(res.data)

    })
  }, [])


  return (
    <div>
      <form>
        <input type='text' placeholder='Search' onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
        <div>
          <h5 className='text-xl'>Category</h5>
          <div className='flex flex-col '>
            {
              categories.slice(0, 7).map(category =>
                <div key={category} className='mt-2'>
                  
                  <input type='button' className='bg-white'onClick={handleChange} value={category} />
                </div>
              )
            }
          </div>
          <div>
            <h2>Price</h2>
            <p>${priceRange}</p>
            <input type="range" name="" id="" min="0" max="2000"
              onChange={(event)=>{setPriceRange(event.target.value)}}/>
          </div>
          <button onClick={()=>setClear(true)}>Clear Filters</button>
        </div>
      </form>
    </div>
  )
}

export default PrductsSidebar