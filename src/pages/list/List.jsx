import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
// import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchItem from '../../components/searchItem/SearchItem'
import "./List.css"

function List() {
  
  const location =  useLocation();
  const [date, setDate] = useState(location.state.date);
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false)
  console.log(location);

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lstitle'> Search </h1>
            <div className='lsItem'>
              <label>Destination</label>
              <input  placeholder={destination} type="text"/>
            </div>
            <div className='lsItem'>
              <label>Check-In Date</label>
              <span onClick={()=> setOpenDate(!openDate)} >{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
              { openDate && (<DateRange 
              onChange={
                (item)=> setDate([item.selection])} 
                minDate={new Date()} 
                ranges={date} />)}
            </div>
            <div className='lsItem'>
              <label>Options</label>
              <div className='lsOptions'>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>Min Price <small>per night</small></span>
                <input className='lsOptionInput' type="number"/>
              </div>

              <div className='lsOptionItem'>
                <span className='lsOptionText'>Max Price <small>per night</small></span>
                <input className='lsOptionInput' type="number"/>
              </div>

              <div className='lsOptionItem'>
                <span className='lsOptionText' >Adults </span>
                <input className='lsOptionInput' min={1} placeholder={options.adults} type="number"/>
              </div>

              <div className='lsOptionItem'>
                <span className='lsOptionText'>Children </span>
                <input className='lsOptionInput' min={0} placeholder={options.children} type="number"/>
              </div>

              <div className='lsOptionItem'>
                <span className='lsOptionText'>Room </span>
                <input className='lsOptionInput' min={1}  placeholder={options.room} type="number"/>
              </div>
 
                </div>
            </div>
            <button>Search</button>
          </div>
          <div className='listResult'>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default List