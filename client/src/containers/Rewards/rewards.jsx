import React, { useState } from "react";
import axios from "axios";
import "./rewards.css";
import FormComponent from "../../components/Form/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";

const Rewards = () => {
  const [rewardCategory, setrewardCategory] = useState("");
  const [starCount, setstarCount] = useState("");

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
  };

  return (
    <div>
      <h1>Rewards + Add Rewards</h1>
      <div className="container">
        <FormComponent>
          <div className="row">
            <div className="col s6">
              <ul>
                <li>
                  <h5 className="reward-list-item">
                    <FontAwesomeIcon icon={faStar} /> Asking a tough question in
                    class 
                  </h5>
                  <h5 className="reward-list-item"> (5 Stars)</h5>
                  <a className="btn-floating btn-small waves-effect waves-light red">
                    <FontAwesomeIcon icon={faEdit} />
                  </a>
                  <a
                    className="btn-floating btn-small
                   waves-effect waves-light red"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col s6">
              <h5>Add a Reward Category and How Many Stars</h5>
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
                    type="text"
                    className="validate"
                    value={rewardCategory}
                    onChange={(e) => {
                      setrewardCategory(e.target.value);
                    }}
                  />
                  <label for="rewardCategory">Reward Category</label>

                  <div className="input-field col s12">
                    <input
                      id="starCount"
                      type="text"
                      value={starCount}
                      className="validate"
                      onChange={(e) => {
                        setstarCount(e.target.value);
                      }}
                    />
                    <label for="starCount">Star Count</label>
                  </div>
                  <button className="waves-effect red darken-1 btn add-category-btn">
                    ADD CATEGORY
                  </button>
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
