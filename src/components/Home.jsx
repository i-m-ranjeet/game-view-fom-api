import React, { useState,useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../reducer/Reducer';
import Actionbar from './Actionbar';
import Slider from './Slider';
import Searchcontainer from './Searchcontainer';
function Home() {
    const dispatch = useDispatch();
    const datais = useSelector(state=>state.api)
    const [state,setState]=useState(datais.apidata)
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        // params: {id: '452'},
        headers: {
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
          'x-rapidapi-key': '04943c6f19msh4b3a757fa11a5abp1ba93djsneb2ae1cd525d'
        }
      };

      useEffect(() => {
          
        axios.request(options).then(function (response) {
          dispatch(getData(response.data))
  
      })
  
        }, [])
    useEffect(() => {
       console.log(datais.apidata)
       
      setState(datais.apidata)

    }, [datais.apidata])
      
    return (
          <>
            <Actionbar/>
            {datais.show_search === true ? <Searchcontainer/> : ""}
            <Slider/>
          <div className="home">
            {state.map(ele=>(
                <div className="card">
                  <Card element={ele} />
                </div>
            ))}
        </div>
          </>
    )
}

export default Home
