// import React from 'react'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import "./Header.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {

  const [openDate, setopenDate] = useState (false);
  const [destination, setDestination]= useState("")
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setopenOptions] = useState(false);
  const [options, setOptions]=useState({
    adults : 1,
    children : 0,
    room: 1,
  })

  const navigate = useNavigate(); 
    
  const handleSearch = () => {
      navigate("/hotels", {state:{destination, date, options}})
  }

  const handleOption = (name, operation) => {
    setOptions(prev=>{return{
      ...prev, [name]: operation === "i" ? options[name]+1 : options[name]-1,
    }})

  }

  return (
    <div className="header">
        <div className={type === "list" ? "headerContainer listmode" : "headerContainer"}>
        <div className="headerList">
            <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>

            <div className="headerListItems"> 
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>

            <div className="headerListItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
            </div>

            <div className="headerListItems">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>

            <div className="headerListItems">    
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxies</span>
            </div>
        </div>
         
        { type !=="list" &&
         <>
          <h1 className="headerTitle">
            A lifetime of discounts? Its a genius
        </h1>
        <p className="headerDesc">
            Get rewarded for your travels - unlock instant savings of 10% or more with a free IamBooking Account
        </p>
        <button className="headerBtn">
                Sign In / Register
        </button>
        <div className="headerSearch">

          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon" />
          <input type="text" placeholder="where are you going ?" className="headerSearchInput" onChange={e=>setDestination(e.target.value)}/>
          </div>

          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span onClick={()=>{setopenDate(!openDate)}} className="headerSearchText">{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
          {openDate && <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />}
          </div>

          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          <span onClick={()=>setopenOptions(!openOptions)} className="headerSearchText">{`${options.adults} adult . ${options.children} children . ${options.room} room `}</span>

          {openOptions && <div className="options">
            
            <div className="optionItem">
              <span className="optiontext"> Adults</span>
              <div className="optionCounter">
              <button disabled={options.adults <= 1} className="optionCounterBtn" onClick={()=>handleOption("adults", "d")}> -</button>
              <span className="optionCounterNo">{options.adults}</span>
              <button className="optionCounterBtn"onClick={()=>handleOption("adults", "i")}>+</button>
              </div>
            </div>

            <div className="optionItem">
              <span className="optiontext"> Children</span>
              <div className="optionCounter">
              <button disabled={options.children <= 0} className="optionCounterBtn" onClick={()=>handleOption("children", "d")}>-</button>
              <span className="optionCounterNo">{options.children}</span>
              <button className="optionCounterBtn" onClick={()=>handleOption("children", "i")}>+</button>
              </div> 
            </div>

            <div className="optionItem">
              <span className="optiontext"> Room</span>
              <div className="optionCounter">
              <button disabled={options.room <= 1} className="optionCounterBtn" onClick={()=>handleOption("room", "d")}>-</button>
              <span className="optionCounterNo">{options.room}</span>
              <button className="optionCounterBtn" onClick={()=>handleOption("room", "i")}>+</button>
              </div>
            </div>

          </div>}
          </div>

          <div className="headerSearchItem">
          <button className="headerBtn" onClick={handleSearch} >Search</button>
          </div>

        </div></>}
        </div>
    </div>
  )
}

export default Header