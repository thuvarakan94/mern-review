import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Body from "./Reviews";
import NavbarComponent from "./Navbar";
import { Reviews } from "./types";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";

function App() {
  const [result, setResult] = useState<Reviews[]>([]);

  // filter components

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios("http://127.0.0.1:3000/review");

      setResult(data.review);
      console.log(data.review);
    };
    fetchData();
  }, []);

  // average rating
  let Total = 0;
  let length = result.length;
  result.forEach(({ rating }) => (Total += rating));

  // sorting
  const [filteredReview, setfilteredReview] = useState<Reviews[]>([]);
  const numAscending = () => {
    setfilteredReview([...result].sort((a, b) => a.rating - b.rating));
    setfilteredReviewHigh([]);
  };

  const [filteredReviewHigh, setfilteredReviewHigh] = useState<Reviews[]>([]);
  const numAscendingHigh = () => {
    setfilteredReviewHigh([...result].sort((a, b) => b.rating - a.rating));
    setfilteredReview([]);
  };
  // chart

  return (
    <>
      <NavbarComponent />

      <div
        style={{
          height: 100,
          overflow: "hidden",
          padding: "8px",
          width: 300,
        }}
      >
        <Dropdown toggle={function noRefCheck() {}}>
          <DropdownToggle caret>Average Rating {Total / length}</DropdownToggle>
          <DropdownMenu container="body">
            <DropdownItem onClick={() => numAscending()}>
              Low to high
            </DropdownItem>
            <DropdownItem onClick={() => numAscendingHigh()}>
              high to low
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      {filteredReviewHigh.length === 0 ? (
      <div>
      {filteredReview.length === 0 ? (
        <div>
          {result.map((value) => {
            return (
              <Body
                stars={value.rating}
                comment={value.comment}
                timestamp={value.Date.toString()}
              />
            );
          })}
        </div>
      ) : (
        <div>
          {filteredReview.map((value) => {
            return (
              <Body
                stars={value.rating}
                comment={value.comment}
                timestamp={value.Date.toString()}
              />
            );
          })}
        </div>
      )}
      </div> ):(<div>
        {filteredReviewHigh.map((value) => {
            return (
              <Body
                stars={value.rating}
                comment={value.comment}
                timestamp={value.Date.toString()}
              />
            );
          })}
      </div>
      )}
    </>
  );
}

export default App;
