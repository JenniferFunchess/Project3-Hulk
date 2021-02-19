import React, { useState, useEffect } from "react";
import axios from "axios";
import "./rewards.css";
import Navbar from "../../components/Navbar/Navbar";
import FormComponent from "../../components/Form/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";

const Rewards = () => {
  const url = window.location.href;
  const urlArray = url.split("/");
  const teacherId = urlArray[urlArray.length - 1];
  console.log(teacherId);
  const [teacher, setTeacher] = useState("");

  const [rewardCategory, setrewardCategory] = useState("");
  const [starCount, setstarCount] = useState("");
  const [rewards, setRewards] = useState([]);
  const [updateDate, setUpdateDate] = useState(new Date());

  useEffect(() => {
    axios
      .get(`/api/signup/${teacherId}`)
      .then((response) => {
        console.log("Teacher get route worked");
        setTeacher(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    (async () => {
      const { data } = await axios.get("/api/rewards");
      setRewards(data);
    })();
  }, [updateDate]);

  const handleFormSubmit = (e, rewards) => {
    console.log("Success");
    e.preventDefault();
    axios
      .post("/api/rewards", rewards)
      .then((response) => {
        console.log(response.data);
        // history.push("/rewards");
      })
      .catch((err) => {
        console.log(err);
        // alert.setAlert({
        //   message: "Failed to create new category.",
        //   type: "danger",
        // });
      });
    setUpdateDate(new Date());
  };

  return (
    <div>
      <Navbar classCode={teacher.classCode} login={false} />
      <h1>Rewards + Add Rewards</h1>
      <div className="container">
        <FormComponent>
          <h4 className="form-header">
            <FontAwesomeIcon icon={faStar} /> Create and Edit Rewards
            <FontAwesomeIcon icon={faStar} />
          </h4>
          <div className="row">
            <div className="col s12 m6">
              <h5 id="reward-count">Reward Categories</h5>
              <ul>
                {rewards.map((reward) => (
                  <li key={reward._id}>
                    <h5 className="reward-list-item">
                      <FontAwesomeIcon icon={faStar} /> {reward.rewardCategory}
                    </h5>
                    <h5 className="reward-list-item">
                      {" "}
                      ({reward.starCount} stars)
                    </h5>
                    <a
                      className="btn-floating btn-small waves-effect waves-light red"
                      onClick={async () => {
                        const setrewardCategory = prompt(
                          "Please enter the new value"
                        );
                        const setstarCount = prompt(
                          "Please enter the new value"
                        );
                        if (!Number(setstarCount)) {
                          alert("Your star count must be a number.");
                        } else {
                          alert(
                            "Your reward category and star count have been updated!"
                          );
                        }
                        await axios.put("/api/rewards/" + reward._id, {
                          // values that will be updated
                          rewardCategory: setrewardCategory,
                          starCount: setstarCount,
                        });
                        setUpdateDate(new Date());
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </a>
                    <a
                      className="btn-floating btn-small
                   waves-effect waves-light red"
                      onClick={async () => {
                        await axios.delete("/api/rewards/" + reward._id);
                        setUpdateDate(new Date());
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col s12 m6">
              <h5 id="reward-count">Add a New Reward + Star Count</h5>
              <div className="input-field col s12">
                <form
                  onSubmit={(e) => {
                    handleFormSubmit(e, {
                      rewardCategory,
                      starCount,
                    });
                    if (!Number(starCount)) {
                      alert("Your star count must be a number");
                    }
                  }}
                >
                  <input
                    id="rewardCategory"
                    placeholder="Reward Category"
                    type="text"
                    className="validate"
                    value={rewardCategory}
                    onChange={(e) => {
                      setrewardCategory(e.target.value);
                    }}
                  />

                  <div className="input-field col s12">
                    <input
                      id="starCount"
                      placeholder="Star Count"
                      type="text"
                      value={starCount}
                      className="validate"
                      onChange={(e) => {
                        setstarCount(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col s12">
                    <button className="waves-effect red darken-1 btn add-category-btn">
                      ADD CATEGORY
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </FormComponent>
      </div>
    </div>
  );
};

export default Rewards;
