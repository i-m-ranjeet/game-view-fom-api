import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'

function Slider() {
    const datais = useSelector(state=>state.api);
    const [state,setState]= useState([{
        title:"",
        thumbnail:""
    }]);
    const [id,setId] = useState();
    useEffect(() => {
        setInterval(()=>{
            let n=0
            if (datais.apidata.length >1){
                 n = Math.floor(Math.random()*((datais.apidata.length)-1+1)+1)
                 setId(n);
            }
        },5000)
    }, [datais.apidata]);
    useEffect(() => {
        if (id >1 && datais.apidata.filter((obj)=>obj.id === id).length === 1){
            setState(datais.apidata.filter((obj)=>obj.id === id))
        }
    }, [id]);
    return (
        <div className="slider-container">
            <div className="left-slider">
                <p><span>Platform : </span>  {state[0].platform === undefined ?"Loading. . .":state[0].platform }</p>
                <p><span>Generation : </span>  {state[0].genre === undefined ? "Loading. . .":state[0].genre}</p>
                <p><span>Release Date : </span>  {state[0].release_date === undefined ?"Loading. . .":state[0].release_date}</p>
            </div>
            <div className="slider">
                <div className="image">
                    {state[0].thumbnail === "" 
                    ?
                    <div className="welcome-text">
                        <h1>Welcome to Prime Games</h1>
                        {/* <p>Loading. . .</p> */}
                    </div>
                    :
                    <img src={state[0].thumbnail} alt="" />
                }
                </div>
                <div className="slider-data">
                    <h1>
                        {state[0].title === "" ? "Loading. . .": state[0].title}
                    </h1>
                </div>
            </div>
            <div className="right-slider">
                <p><span>Developer : </span> {state[0].developer === undefined ? "Loading. . .": state[0].developer}</p>
                <p><span>Publisher : </span> {state[0].publisher === undefined ? "Loading. . .":state[0].publisher}</p>
                <p><span>Short Description : </span> {state[0].short_description === undefined ? "Loading. . .":state[0].short_description}</p>
            </div>
        </div>
    )
}

export default Slider
