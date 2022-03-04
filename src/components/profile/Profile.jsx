import "./profile.css"
import FeedBar from '../../components/feed/FeedBar'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import RightBar from '../../components/rightBar/RightBar'
import TopBar from '../../components/TopBar'

export default function Profile() {
    return (
        <>
            <TopBar />
            <div className="profile">
                <div className="mainSection">
                    <LeftSideBar />
                    <div className="profileRight">
                        <div className="profileTopRight">
                            hello
                        </div>
                        <div className="profileTopBottm">
                            <FeedBar />
                            <RightBar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
