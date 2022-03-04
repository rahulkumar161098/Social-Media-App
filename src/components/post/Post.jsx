import './post.css'
import { MoreVert } from '@mui/icons-material'

export default function Post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="topLeft">
                        <img className='postUserImg' src="assest/pexels-pixabay-163036.jpg" alt="" />
                        <span className="postUserName">Rahul Kumar</span>
                    <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="topRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        Hello Frands chai pi lo :)
                    </span>
                    <img className='postImg' src="assest/pexels-pixabay-163036.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='postLikePng' src="assest/like_PNG.png" alt="" />
                        <img className='postLikePng' src="assest/love-emoji-like.png" alt="" />
                        <span className="likeCounter">45 peoples like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment">
                            12 comments on it
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
