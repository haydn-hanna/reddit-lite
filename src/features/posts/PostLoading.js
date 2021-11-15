import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import './Post.css'

export const PostLoading = (props)=>{
    return (
        <div className="flipCard">
            <div className="flipCardInner">
                <div className="flipCardFront">
                    <Skeleton height="50px" width="250px"/>
                    <Skeleton  height="100px" width="250px"/>
                    <Skeleton count={2} width="250px"/>
                </div>
            </div>
        </div>
    )
}

export default PostLoading;