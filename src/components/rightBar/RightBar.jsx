import './rightBar.css'

export default function RightBar() {
  return (
    <div className='rightBox'>
      <div className="righBoxWrapper">
        <div className="birthdayWrapper">
          <img className='birthdayGiftImg' src="assest/gift1.png" alt="" />
          <span className='friendsBirthday'><b>Abhi kumar</b> and <b>3 others</b> have birthday Today</span>
        </div>
        <div className="rightBarAd">
          <img className='rightBarAdImg' src="assest/ad.png" alt="ad" />
        </div>
        <span className='onlineFrinedsText'>Online Friends</span>
        <div className="onlineFrineds">
          <div className="onlineFriendlist">
            <img className='onlineFriendImg' src="assest/pexels-pixabay-33545.jpg" alt="" />
            <div className="onlineIcon"></div>
          </div>
          <span className='onlineFriendName'>Rahul Kumar</span>
        </div>

        <div className="onlineFrineds">
          <div className="onlineFriendlist">
            <img className='onlineFriendImg' src="assest/pexels-pixabay-33545.jpg" alt="" />
            <div className="onlineIcon"></div>
          </div>
          <span className='onlineFriendName'>Rohit Kumar</span>
        </div>
        <div className="onlineFrineds">
          <div className="onlineFriendlist">
            <img className='onlineFriendImg' src="assest/pexels-pixabay-33545.jpg" alt="" />
            <div className="onlineIcon"></div>
          </div>
          <span className='onlineFriendName'>Rohit Gupta</span>
        </div>
        <div className="onlineFrineds">
          <div className="onlineFriendlist">
            <img className='onlineFriendImg' src="assest/pexels-pixabay-33545.jpg" alt="" />
            <div className="onlineIcon"></div>
          </div>
          <span className='onlineFriendName'>Rupak Kumar</span>
        </div>
        <div className="onlineFrineds">
          <div className="onlineFriendlist">
            <img className='onlineFriendImg' src="assest/pexels-pixabay-33545.jpg" alt="" />
            <div className="onlineIcon"></div>
          </div>
          <span className='onlineFriendName'>Abhi Kumar</span>
        </div>
      </div>
    </div>
  )
}
