import React, { useState, useEffect } from "react";
import PostService from "../services/post.service";
import LoadingPage from "./Pages/LoadingPage";
import Rating from "@mui/material/Rating";
import { Button1 } from "./Button1";
import "./Styles/BuyComp.css";

function BuyComp() {
  var [courses, setcourses] = useState([]);
  const [loading, setloading] = useState(true);

  // nav to courses page
  // const navigate = useNavigate();
  useEffect(() => {
    setloading(true);
    PostService.getcourseinfo().then(
      (response) => {
        setloading(false);
        setcourses(response.data.data);
        console.log(courses);
      },
      (error) => {
        setloading(false);
        console.log("allcourse", error.response);
      }
    );
  }, []);

  const handleSubmit = async (e) => {};

  return loading ? (
    <LoadingPage />
  ) : (
    <>
      <div className="buying-container">
        <div className="cours-container">
          <h2 className="buying-heading">Buying new course</h2>
          <img src="images/55555555.jpg" alt="course-photo" />
          <h3 className="courseName">{"Course name: " + courses.name}</h3>
          <h4 className="coursCategory">
            {"Course category: " + courses.category}
          </h4>
          <Rating
            className="cards__item__rating"
            name="read-only"
            value="4"
            readOnly
          />
          {/* <h3 className="coursePrice">{courses.price + "$"}</h3> */}
        </div>
        <div className="buy-container">
          <form id="form" onSubmit={handleSubmit}>
            <h5>{"Your balance: "}</h5>
            <h3>{"Course Fees: "}</h3>
            <div className="buy-btn">
              <Button1
                type="submit"
                className="btns"
                buttonStyle="btn--primary--logsign"
                buttonSize="btn--large"
                buttonTrans="btn--logsign"
                buttonPath="/"
              >
                Checkout
              </Button1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BuyComp;
