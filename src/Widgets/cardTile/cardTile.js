import React from 'react'

import './cardTile.css'
import zero from '../../Assets/Icons/zero.svg'
import one from '../../Assets/Icons/one.svg'
import two from '../../Assets/Icons/two.svg'
import three from '../../Assets/Icons/three.svg'
import four from '../../Assets/Icons/four.svg'

export default function cardTile(props) {
  return (
    <>
        <div className="card-container">
            <div className="card-id-wrapper">
                <div className="card-id">{props.cardDetails.id}</div>
                <div className="card-profile">
                    <div className="card-profile-initial">{props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}</div>
                    <div className={props.cardDetails.userObj.available ?"card-profile-initial-available card-profile-initial-available-true" : "card-profile-initial-available"}></div>
                </div>
            </div>
            <div className="card-title">
                {props.cardDetails.title}
            </div>
            <div className="card-tag">
                {
                    {
                        0: <div className="card-tag-icon"><img src={zero} alt='icon'/></div>,
                        1: <div className="card-tag-icon"><img src={one} alt='icon'/></div>,
                        2: <div className="card-tag-icon"><img src={two} alt='icon'/></div>,
                        3: <div className="card-tag-icon"><img src={three} alt='icon'/></div>,
                        4: <div className="card-tag-icon"><img src={four} alt='icon'/></div>
                    }[props.cardDetails.priority]
                }

                {
                    props.cardDetails.tag.map((tag) => {
                        return(
                            <div className="card-tag-box">
                                <div className="card-tag-title">{tag}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
