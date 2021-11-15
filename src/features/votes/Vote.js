import {
    TiArrowUpOutline,
    TiArrowUpThick,
    TiArrowDownOutline,
    TiArrowDownThick,
  } from 'react-icons/ti';

import {useState} from 'react';
import './Vote.css'

  
export const Vote = (props)=>{
    const [voteValue, setVoteValue] = useState('neutral');
    const [ups,setUps] = useState(props.ups)

    const handleVote = (newValue)=>{
        setVoteValue(newValue)
        let newUps = newValue==='up'?props.ups+1:props.ups-1;
        setUps(newUps)
    }

    const renderArrow = (type)=>{
        switch(type){
            case 'up':
                if(voteValue==='up'){
                    return <TiArrowUpThick className="icon active-up"/>
                }
                return <TiArrowUpOutline className="icon" onClick={()=>handleVote('up')}/>
            case 'down':
                if(voteValue==='down'){
                    return <TiArrowDownThick className="icon active-down"/>
                }
                return <TiArrowDownOutline className="icon" onClick={()=>handleVote('down')}/>
            default:
                return null;
        }
    }

    const renderUps = ()=>{
        if(voteValue==='up'){
            return <div className='active-up'>{ups}</div>
        }else if(voteValue==='down'){
            return <div className='active-down'>{ups}</div>
        }
        return <div>{ups}</div>
    }

    return (
        <div>
            {renderArrow('up')} 
            {renderUps()}
            {renderArrow('down')}
        </div>
    )
}