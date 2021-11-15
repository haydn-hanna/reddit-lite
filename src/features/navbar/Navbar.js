import {useSelector, useDispatch} from 'react-redux';
import {updateSearchTerm,selectSearchTerm,fetchUrl} from '../../store/redditSlice'
import './Navbar.css';

export function Navbar(){
    const currentSearchTerm = useSelector(selectSearchTerm);
    const searchUrl = `https://www.reddit.com/search.json?q=`
    const dispatch = useDispatch();
    const onFormSubmit = (e)=>{
        e.preventDefault()
        dispatch(fetchUrl(searchUrl+currentSearchTerm))
    }
    return(
        <div className="navContainer">
            <div className="col">
                <img src='reddit-logo.png' />
            </div>
            <div className="col">
                <form onSubmit={onFormSubmit}>
                    <input onChange={(e)=>dispatch(updateSearchTerm(e.target.value))}type='text'></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}