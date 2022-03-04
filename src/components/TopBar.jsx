import './topbar.css'
import { Search, Person,Chat, Notifications } from '@mui/icons-material'

export default function TopBar() {
  return (
    <div className='TopBarContainer'>
      <div className="topBarLeft">
          <span className='logo'>
              Social
          </span>
      </div>
      <div className="topBarCenter">
        <div className="topSearch">
            <span className='searchIcon'>
                <Search />
            </span>
            <input type="search" className='searchInput' placeholder='Search for friends post or videos' />
        </div>
      </div>
      <div className="topBarRight">
          <div className="topLink">
              <span className='topBarLink'>
                  Home
              </span>
              <span className='topBarLink'>
                  Timeline
              </span>
          </div>
          <div className="topBarIcons">
              <div className="topBarItem">
                <Person />
                <span className='topIconbadge'>1</span>
              </div>
              <div className="topBarItem">
                <Chat />
                <span className='topIconbadge'>2</span>
              </div>
              <div className="topBarItem">
                <Notifications />
                <span className='topIconbadge'>3</span>
              </div>
          </div>
          <img src="assest/pexels-pixabay-54101.jpg" className='topBarImg' alt="" />
      </div>
    </div>
  )
}
