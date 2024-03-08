import ReactStars from 'react-stars';
import Rating from './Rating';
import "./Home.css";
import { useState } from 'react';
function Home({ logoutComponent }) {
    const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');
    const toggleComments = () => {
        setShowComments(!showComments);
      };
      const handleSubmit = () => {
        // Add logic to submit the comment (e.g., send it to a server)
        console.log('Comment submitted:', comment);
        // Clear the comment input field
        setComment('');
      };
      const handleChange = (e) => {
        setComment(e.target.value);
      };

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }
    return (
        <div >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
                        <li>Home</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </div>
                <div>
                    {logoutComponent}
                </div>
            </div>
            <div className='container' >
      {[...Array(25)].map((_, index) => (
        <div key={index} className='card'>
          <h1>My Review {index + 1}</h1>
          <p>John doe</p>
          {/* <p>comment</p> */}
          <span>wow!its a beautifull place</span>
          <Rating className="rating-center" count={5} onChange={ratingChanged} size={24} />
          {showComments && (
        <div className="comment-section">
          <textarea
            value={comment}
            onChange={handleChange}
            placeholder="Write your comment here..."
          ></textarea>
          <button onClick={handleSubmit}>Submit Comment</button>
        </div>
      )}
         {!showComments && ( <button className="button" onClick={toggleComments}>Submit</button>)}
        </div>
      ))}
    </div>
        </div>
    )
}

export default Home;