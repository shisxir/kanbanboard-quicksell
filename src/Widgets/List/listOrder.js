import React from 'react'

import './listOrder.css'
import Card from '../cardTile/cardTile.js'
import zero from '../../Assets/Icons/zero.svg'
import one from '../../Assets/Icons/one.svg'
import two from '../../Assets/Icons/two.svg'
import three from '../../Assets/Icons/three.svg'
import four from '../../Assets/Icons/four.svg'
import backlog from '../../Assets/Icons/backlog.svg'
import todo from '../../Assets/Icons/todo.svg'
import progress from '../../Assets/Icons/progress.svg'
import done from '../../Assets/Icons/done.svg'
import cancelled from '../../Assets/Icons/cancelled.svg'
import plusSign from '../../Assets/Icons/plusSign.svg'
import threeDots from '../../Assets/Icons/threeDots.svg'

let count = 0;

export default function listOrder(props) {
  return (
    <>
        <div className="list-container">
            <div className="list-header">
                <div className="list-header-left">
                    {
                        {
                            'status' : <>{
                                {
                                    'Backlog': <div className="list-icon">
                                    <img src={backlog} alt='icon'/>
                                    </div>,
                                    'Todo': <div className="list-icon">
                                    <img src={todo} alt='icon'/>
                                    </div>,
                                    'In progress': <div className="list-icon">
                                    <img src={progress} alt='icon'/>
                                    </div>,
                                    'Done': <div className="list-icon">
                                    <img src={done} alt='icon'/>
                                    </div>,
                                    'Cancelled': <div className="list-icon">
                                    <img src={cancelled} alt='icon'/>
                                    </div>
                                }[props.listTitle]
                            } </>,
                            'user': <></>,
                            'priority' : <>{
                                {
                                    0: <div className="card-tag-icon"><img src={zero} alt='icon'/></div>,
                                    1: <div className="card-tag-icon"><img src={one} alt='icon'/></div>,
                                    2: <div className="card-tag-icon"><img src={two} alt='icon'/></div>,
                                    3: <div className="card-tag-icon"><img src={three} alt='icon'/></div>,
                                    4: <div className="card-tag-icon"><img src={four} alt='icon'/></div>
                                }[props.listTitle]
                            } </>
                        }[props.groupValue]
                    }
                    
                    <div className="list-title">
                        {
                            {
                                'priority' : <>{
                                                props.priorityList
                                                    ? props.priorityList.map(priorityProperty => (
                                                        priorityProperty.priority === props.listTitle
                                                        ? <>{priorityProperty.name}</>
                                                        : null
                                                    ))
                                                    : null
                                                }</>,
                                'status' : <>{props.listTitle}</>,
                                'user' : <>{props.listTitle}</>
                            }[props.groupValue]
                        }
                    </div>
                    <div className="list-sum">{count}</div>
                </div>
                <div className="list-header-right">
                    <div className="list-add-item">
                    <img src={plusSign} alt='icon' />
                    </div>
                    <div className="list-option-item">
                    <img src={threeDots} alt='icon' />
                    </div>
                </div>
            </div>

            <div className="list-card-items">
                {
                    props.ticketDetails.map(ticket => {
                        if(ticket.status === props.listTitle){
                            count++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.priority === props.listTitle){
                            count++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.userObj.name === props.listTitle){
                            count++;
                            return(<Card cardDetails={ticket} />)
                        }
                        return null
                    }, count = 0)
                    
                }
            </div>
        </div>
    </>
  )
}
