import "./share.css"
import { PhotoLibrary, LocalOffer, LocationOn, SentimentSatisfiedAlt } from '@mui/icons-material'


export default function Share() {
    return (
        <div className="userShareBox">
            <div className="shareShare">
                <img src="assest/pexels-pavlo-1226402.jpg" alt="" className="feedUserImg" />
                <input type="serach" className="userShareInput" placeholder="Share" />
            </div>
            <hr className="feedHrLine" />
            <div className="shareList">
                <div className="shareItems">
                    <PhotoLibrary className="shareItemIcon" htmlColor="tomato" />
                    <span>Photo or video</span>
                </div>
                <div className="shareItems">
                <LocalOffer className="shareItemIcon" htmlColor="blue" />
                    <span>Tag</span>
                </div>
                <div className="shareItems">
                <LocationOn className="shareItemIcon" htmlColor="green" />
                    <span>Location</span>
                </div>
                <div className="shareItems">
                <SentimentSatisfiedAlt className="shareItemIcon" htmlColor="#ff9d00" />
                    <span>Feelings</span>
                </div>
                <button className="ShareTopBtn">Send</button>
            </div>
        </div>
    )
}
