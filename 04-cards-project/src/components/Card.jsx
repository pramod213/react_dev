import React from 'react'
import {Bookmark} from "lucide-react";

const Card = () => {
  return (
    <div className="card">

        <div>
            <div className="top">
                <img src="https://st3.depositphotos.com/1001860/16375/i/1600/depositphotos_163757632-stock-photo-amazon-logo-on-a-white.jpg" alt="" />
                <button>Save <Bookmark size={11}/>  </button>
            </div>

            <div className="center">
                <h3>Amazon <span>5 days ago </span> </h3>
                <h2>Senior UI/UX Designer </h2>
            <div  className='tag'>
                <h4>Part-Time </h4>
                <h4>Senior Level  </h4>
            </div>
        </div>
    </div>

        <div className="bottom">
            <div>
                <h3>$120/hr </h3>
                <p>Mumbai ,India </p>
            </div>
            <div>
                <button>Apply now </button>
            </div>
        </div>
    </div>
)
}

export default Card
