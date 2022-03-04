import './leftSideBar.css'
import {
  RssFeed, Chat,
  VideoLibrary, Groups, Bookmarks, EmojiEvents, Work
} from '@mui/icons-material'

export default function LeftSideBar() {
  return (
    <div className="sideBar">
      <div className="sideWrapper">
        <ul className='listsWrapper'>
          <li className='listItems'>
            <RssFeed className='sideBarIcons' />
            <span className='sideBarListName'>Feed</span>
          </li>
          <li className='listItems'>
            <Chat className='sideBarIcons' />
            <span className='sideBarListName'>Chats</span>
          </li>
          <li className='listItems'>
            <VideoLibrary className='sideBarIcons' />
            <span className='sideBarListName'>Videos</span>
          </li>
          <li className='listItems'>
            <Groups className='sideBarIcons' />
            <span className='sideBarListName'>Groups</span>
          </li>
          <li className='listItems'>
            <Bookmarks className='sideBarIcons' />
            <span className='sideBarListName'>Bookmarks</span>
          </li>
          <li className='listItems'>
            <EmojiEvents className='sideBarIcons' />
            <span className='sideBarListName'>Events</span>
          </li>
          <li className='listItems'>
            <Work className='sideBarIcons' />
            <span className='sideBarListName'>Jobs</span>
          </li>
        </ul>
      </div>
      <button className='sideBtn'>Show More</button>
      <hr className='sideBarHr' />
      <div className="friendsList">
        <ul className='sideBarFriends'>
          <li className='sideBarFriendList'>
            <img src="assest/pexels-pavlo-1226402.jpg" alt="" className='sideBarFriendImg' />
            <span className='sideBarFriendName'>Shyam Sunder</span>
          </li>
          <li className='sideBarFriendList'>
            <img src="assest/pexels-pavlo-1226402.jpg" alt="" className='sideBarFriendImg' />
            <span className='sideBarFriendName'>Abhi Kumar</span>
          </li>
          <li className='sideBarFriendList'>
            <img src="assest/pexels-pixabay-33545.jpg" alt="" className='sideBarFriendImg' />
            <span className='sideBarFriendName'>Rohit Gupta</span>
          </li>
          <li className='sideBarFriendList'>
            <img src="assest/pexels-pavlo-1226402.jpg" alt="" className='sideBarFriendImg' />
            <span className='sideBarFriendName'>Rupak Lumar</span>
          </li>
          <li className='sideBarFriendList'>
            <img src="assest/pexels-pixabay-163036.jpg" alt="" className='sideBarFriendImg' />
            <span className='sideBarFriendName'>Rahul Kumar</span>
          </li>
          <li className='sideBarFriendList'>
            <img src="assest/pexels-pixabay-33545.jpg" alt="" className='sideBarFriendImg' />
            <span className='sideBarFriendName'>Rahul Kumar</span>
          </li>
          <li className='sideBarFriendList'>
            <img src="assest/pexels-pavlo-1226402.jpg" alt="" className='sideBarFriendImg' />
            <span className='sideBarFriendName'>Rahul Kumar</span>
          </li>
          <li className='sideBarFriendList'>
            <img src="assest/pexels-pavlo-1226402.jpg" alt="" className='sideBarFriendImg' />
            <span className='sideBarFriendName'>Rahul Kumar</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
