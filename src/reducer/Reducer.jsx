import { createSlice } from "@reduxjs/toolkit";
const initialState={
    years:[],
    by_year:"",
    genres:[],
    by_genre:"",
    apidata:[],
    show_search:false,
    is_searching:false,
    searched:[]
}
 const apiSlice = createSlice({
    name:'apiapp',
    initialState,
    reducers:{
        getData:(state,action)=>{
            state.apidata = action.payload;
            action.payload.map((ele)=>state.years.push(ele.release_date.slice(0,4)));
            action.payload.map(ele=>state.genres.push(ele.genre));
        },
        setYear:(state,action)=>{
            state.by_genre = ""
            state.by_year = action.payload;
            state.show_search = true;
            
            state.searched = state.apidata.filter(ele=>ele.release_date.includes(action.payload));
            console.log(action.payload)
            state.is_searching = true;
        },
        setGenre:(state,action)=>{
            state.by_year = ""
            state.by_genre = action.payload;
            state.show_search = true;
            
            state.searched = state.apidata.filter(ele=>ele.genre.replace(/ /g,"") === action.payload.replace(/ /g,""));
            
            state.is_searching = true;
        },
        closeSearch:(state)=>{
            state.is_searching = false;
            state.show_search = false;
        }
    }
})
export const {getData,setYear,setGenre,closeSearch} = apiSlice.actions
export default apiSlice.reducer
