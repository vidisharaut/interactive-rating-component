import { useState } from "react";
import "./App.css";
import star from "./images/icon-star.svg";
import thankyouImg from "./images/illustration-thank-you.svg";

function App() {
  const [selected, setSelected] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderRatings = () => {
    return (
      <div className="container">
        <img className="star" src={star} alt="star" />
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul>
          {[1, 2, 3, 4, 5].map((el) => (
            <li
              onClick={() => setSelected(el)}
              className={el === selected && "active"}
              key={el}
            >
              {el}
            </li>
          ))}
        </ul>

        <button
          onClick={() => {
            if (selected !== 0) {
              setIsSubmitted(true);
            }
          }}
        >
          SUBMIT
        </button>
      </div>
    );
  };

  const renderSubmitted = () => {
    return (
      <div className="container centre">
        <img src={thankyouImg} alt="Thankyou" />
        <p className="selected-rating">You selected {selected} out of 5</p>
        <h1 style={{ fontWeight: "normal" }}>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    );
  };

  return (
    <div className="app">
      <>{isSubmitted ? renderSubmitted() : renderRatings()}</>
    </div>
  );
}

export default App;
