import {useSelector} from 'react-redux';
import {selectPosts,selectIsLoading} from '../../store/redditSlice'
import './Posts.css'
import {Post} from './Post'
import {PostLoading} from './PostLoading'

export function Posts(){
    const isLoading = useSelector(selectIsLoading)
    const jsonPosts = useSelector(selectPosts);
    let posts=[];

    console.log(jsonPosts)
    if(isLoading){
        for(var i=0;i<25;i++){
            posts.push(<PostLoading />)
        }
    }else{
        posts = jsonPosts.map((post,index)=>{
            return <Post 
                    key={index} 
                    post={post.data}
                /> 
        })
    }
    
    return(
        <div className='flexContainer'>
            {posts}
        </div>
    )
}

