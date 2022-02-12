import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setYear,setGenre } from '../reducer/Reducer';


function Actionbar() {
    const dispatch = useDispatch();
    const datais = useSelector(state=>state.api)
    const [years,setYears]=useState([]);
    const [genres,setGenres]=useState([]);

    useEffect(() => {
        setYears([...new Set(datais.years)].sort())
        setGenres([...new Set(datais.genres.map((ele)=>(ele.replace(' ',''))))].sort())
    }, [datais.years]);
    return (
        <div className="actionbar" style={{}}>
            <h1 className="logo">Prime-Games</h1>
            <div className="by">
                <div className="year">
                    <p>{(datais.show_search === true) && (datais.by_year ==="" ? false : true) ? (datais.by_year === "" ? "Sort By Year" : datais.by_year) : "Sort By Year"} &#8595;</p>
                    <div className="options">
                        {
                            years === []? console.log("yesrran"):
                            years.map(ele=>(
                                <p onClick={()=>dispatch(setYear(ele))}>{ele}</p>
                                ))
                            }
                    </div>
                </div>
                <div className="generation">
                    <p>{(datais.show_search === true) && (datais.by_genre ==="" ? false : true) ? (datais.by_genre === "" ? "Sort By Year" : datais.by_genre) : "Sort By Genre"} &#8595;</p>
                    <div className="options">
                        
                    {
                            genres === []? <p>Loading. . .</p>:
                            genres.map(ele=>(
                                <p onClick={()=>dispatch(setGenre(ele))}>{ele}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="search">
                <input type="text" placeholder="Search Here. . ." />
                <div>&#9906;</div>
            </div>
            
        </div>
    )
}

export default Actionbar
