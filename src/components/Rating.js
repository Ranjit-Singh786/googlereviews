import ReactStars from 'react-stars';

function Rating({count,ratingchange,size,activecolor}) {


  return (
    <div>
      <ReactStars
        count={Number(count)}
        onChange={ratingchange}
        size={size}
        activeColor={activecolor}
      />
    </div>
  );
}

export default Rating;
