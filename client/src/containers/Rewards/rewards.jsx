import React, { useState } from "react";
import axios from "axios";
import "./rewards.css";
import FormComponent from "../../components/Form/form";

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
              {/* <ul>
                <li>
                  <a className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">delete</i>
                  </a>
                  <a className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">edit</i>
                  </a>
                  This is a reward category
                </li>
                <li>
                  <a className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">delete</i>
                  </a>
                  <a className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">edit</i>
                  </a>
                  This is a reward category
                </li>
                <li>
                  <a className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">delete</i>
                  </a>
                  <a className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">edit</i>
                  </a>
                  This is a reward category
                </li>
                <li>
                  <a className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">delete</i>
                  </a>
                  <a className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">edit</i>
                  </a>
                  This is a reward category
                </li>
                <li>
                  <a className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">delete</i>
                  </a>
                  <a className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">edit</i>
                  </a>
                  This is a reward category
                </li>
              </ul> */}
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
                  <button className="waves-effect red darken-1 btn">
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
