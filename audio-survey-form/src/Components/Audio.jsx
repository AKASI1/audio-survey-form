import { useState } from "react";
import { FaStar } from "react-icons/fa";

/*___________________________________________________________________________________*/

const Audio = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState();
  const rates = props.data[props.mainTypeIndex].sections[props.sectionId].rates;
  return (
    <div className="mb-4 pb-4 border-bottom" style={{ marginLeft: "-30px" }}>
      <div className="d-flex justify-content-between mb-3">
        <span>{props.name}</span>
        <div>
          {[...Array(4)].map((star, i) => {
            const ratingValue = i + 1;
            const isRatedBefore = rates.some(
              (audio) => audio.rate === ratingValue && audio.name !== props.name
            );
            return (
              <label aria-disabled style={{ cursor: "pointer" }} key={i}>
                <input
                  disabled={isRatedBefore}
                  hidden
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => {
                    setRating((prev) =>
                      prev === ratingValue ? null : ratingValue
                    );
                    let arr = [...props.data];
                    rates[props.rateId].rate === ratingValue
                      ? (arr[props.mainTypeIndex].sections[
                          props.sectionId
                        ].rates[props.rateId].rate = null)
                      : (arr[props.mainTypeIndex].sections[
                          props.sectionId
                        ].rates[props.rateId].rate = ratingValue);

                    props.setData(arr);
                  }}
                />
                <FaStar
                  onMouseEnter={() => setHover(!isRatedBefore && ratingValue)}
                  onMouseLeave={() => setHover()}
                  color={
                    ratingValue <= (rating || hover) ? "#ffc107" : "#e4e5e9"
                  }
                />
              </label>
            );
          })}
        </div>
      </div>
      <audio id={props.file} src={props.file} controls></audio>
    </div>
  );
};
export default Audio;

/*___________________________________________________________________________________*/
