import React from 'react'
import {Vote} from '../votes/Vote'
import './Post.css'

export const Post = (props)=>{
    const {title,subreddit_name_prefixed,author,url,ups} = props.post;
    return (
        <div className="flipCard">
            <div className="flipCardInner">
                <div className="flipCardFront">
                    <h1 className="title">{title}</h1>
                    <Image alt="" src={url} />
                    <p>{subreddit_name_prefixed} </p>
                    <p className="author">{author}</p>
                    
                </div>
                <div className="flipCardBack">
                    <Vote ups={ups} />
                </div>
            </div>
        </div>
    )
}

const Image = (props)=>{
    const source = props.src
    if(source.substring(source.length-3)==='png'||source.substring(source.length-3)==='jpg'){return <img src={props.src}/>}
    return null
}