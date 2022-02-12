import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeSearch } from '../reducer/Reducer';
function Searchcontainer() {
    const dispatch = useDispatch();
    const datais = useSelector(state=>state.api);

    return (
        <div className="search-container">
            <div className="searches">
                <div className="search-detail">
                    <p>Result : <b>{datais.searched.length}</b> Match Found</p> 
                    <p className="close" onClick={()=>dispatch(closeSearch())}>Close Search <span> &#10008;</span></p>
                </div>
                {datais.searched.map((ele)=>(
                    <div className="card">
                        <img src={ele.thumbnail} alt="thumbnail"  />
                        <p>
                            <div>Publisher : {ele.publisher}</div> 
                            <div>Genration :{ele.genre}</div> 
                            <div>Release : {ele.release_date }</div> 
                            <div>Platform : {ele.platform }</div> 
                        </p>
                        <h4> {ele.title}</h4>
                  </div>
                ))}
            </div>
        </div>
    )
}

export default Searchcontainer
