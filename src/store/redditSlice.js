import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUrl = createAsyncThunk(
    'counter/fetchUrl',
    async (url) => {
      const response = await fetch(url);
      try{
        if(response.ok){
        const jsonResponse = await response.json()
        return jsonResponse;
        }
        throw new Error('Request failed')
      }catch(error){
        console.log(error.message)
      }
    
    }
  );

export const redditSlice = createSlice({
    name:'redditSlice',
    initialState:{
      posts:[],
      isLoading:false
    },
    reducers:{
        updateSearchTerm:(state,action)=>{
            state.searchTerm = action.payload.trim().replace(' ','%20');
            console.log(`The new search term has been updated to: ${state.searchTerm}`);
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchUrl.pending, (state) => {
            console.log('Waiting for response.')
            state.isLoading=true;
          })
          .addCase(fetchUrl.fulfilled, (state, action) => {
            state.isLoading=false;
            state.posts = action.payload.data.children
            console.log(state.posts)
          });
      }
})

export const {updateSearchTerm} = redditSlice.actions;
export const selectSearchTerm = (state) => state.redditSlice.searchTerm;
export const selectPosts = (state) => state.redditSlice.posts;
export const selectIsLoading = (state)=> state.redditSlice.isLoading;

export default redditSlice.reducer;
