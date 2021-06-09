import React from "react";
import StarRatings from "react-star-ratings";
import { ProgressBar } from "react-bootstrap";
const Review = ({ reviews, show }) => {
  var reviewArr = [];

  const arr = () => {
    if (reviews) {
      reviews.forEach((item) => {
        reviewArr.push(item.text);
      });
    }
  };
  arr();
  var count = {};
  reviewArr.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });

  var sum = 0;
  for (let item of reviewArr) {
    sum += item;
  }
  var avg;
  if (sum === 0) {
    avg = 0;
  } else {
    var str = (sum / reviewArr.length).toString() 
    avg = Number(str.substring(0,4))
  }

  return (
    <div>
      <div>
        <h3 className="text-start" style={{marginLeft:"90px"}}>Customer feedback</h3>
      </div>
      {show ? (
        <>
          <StarRatings
            rating={(avg)}
            starRatedColor="#ff9f00"
            numberOfStars={5}
            className="star_min"
            name="rating"
            starSpacing="2px"
            starDimension="12px"
          />
        </>
      ) : (
        <div
          style={{ backgroundColor: "#fff", display: "flex"}}
        >
          <div style={{ width: "25%" }}>
            <div style={{ height: "75px",marginTop:"-20px" }}>
              <p className="avgReview">{avg}</p>
              <div style={{marginTop:"-45px"}}>
              <StarRatings
              rating={avg}
              starRatedColor="#ff9f00"
              numberOfStars={5}
              className="star_min"
              name="rating"
              starSpacing="2px"
              starDimension="18px"
            />
            </div>
            <p style={{color:"black"}}>hostel rating</p>
            </div>

           
            
          </div>
          <div style={{ width: "75%", paddingLeft: "30px" }}>
            <div style={{ display: "flex" }}>
              <ProgressBar
                style={{ width: "50%",marginTop:"8px" }}
                variant="warning"
                now={
                  (count[5] / reviewArr.length) * 100 > 0
                    ? (count[5] / reviewArr.length) * 100
                    : 0
                }
              />
              <StarRatings
                rating={5}
                starRatedColor="#ff9f00"
                style={{ width: "50%", }}
                numberOfStars={5}
                name="rating"
                starDimension="20px"
              />
              <div style={{marginTop:"4px",marginLeft:"2px"}}>
              {(count[5] / reviewArr.length) * 100 > 0
                ? (count[5] / reviewArr.length) * 100 + "%"
                : "0%"}
                </div>
            </div>

            <div style={{ display: "flex" ,}}>
              <ProgressBar
                style={{ width: "50%",marginTop:"8px" }}
                variant="success"
                now={
                  (count[4] / reviewArr.length) * 100 > 0
                    ? (count[4] / reviewArr.length) * 100
                    : 0
                }
              />
              <StarRatings
                rating={4}
                starRatedColor="#ff9f00"
                
                numberOfStars={5}
                name="rating"
                starDimension="20px"
              />
               <div style={{marginTop:"4px",marginLeft:"2px"}}>
              <span>
                {(count[4] / reviewArr.length) * 100 > 0
                  ? ((count[4] / reviewArr.length) * 100).toFixed(2) + "%"
                  : "0%"}
              </span>
              </div>
            </div>

            <div style={{ display: "flex", }}>
              <ProgressBar
                style={{ width: "50%",marginTop:"8px" }}
                variant="warning"
                now={
                  (count[3] / reviewArr.length) * 100 > 0
                    ? (count[3] / reviewArr.length) * 100
                    : 0
                }
              />
              <StarRatings
                rating={3}
                starRatedColor="#ff9f00"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
              />
               <div style={{marginTop:"4px",marginLeft:"2px"}}>
              {(count[3] / reviewArr.length) * 100 > 0
                ? ((count[3] / reviewArr.length) * 100).toFixed(2) + "%"
                : "0%"}
                </div>
            </div>
            <div style={{ display: "flex", }}>
              <ProgressBar
                style={{ width: "50%",marginTop:"8px" }}
                variant="warning"
                now={
                  (count[2] / reviewArr.length) * 100 > 0
                    ? (count[2] / reviewArr.length) * 100
                    : 0
                }
              />
              <StarRatings
                rating={2}
                starRatedColor="#ff9f00"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
              />
               <div style={{marginTop:"4px",marginLeft:"2px"}}>
              {(count[2] / reviewArr.length) * 100 > 0
                ? (count[2] / reviewArr.length) * 100 + "%"
                : "0%"}
               </div> 
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;