import React from 'react'
import FeedBar from '../../components/feed/FeedBar'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import RightBar from '../../components/rightBar/RightBar'
import TopBar from '../../components/TopBar'
import "./home.css"

export default function Home() {
    return (
        <>
            <div>
                <TopBar />
            </div>
            <div className="mainSection">
                <LeftSideBar />
                <FeedBar />
                <RightBar />
            </div>
        </>
    )
}
