import Post from '../post/Post'
import Share from '../share/Share'
import './feedBar.css'

export default function FeedBar() {
  return (
    <div className='feedBox'>
      <Share />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
