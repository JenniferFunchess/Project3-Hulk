import React, { useState } from "react";
import "./rewards.css";
import FormComponent from "../../components/Form/form";

const Rewards = ({ handleFormSubmit }) => {
  const [rewardCategory, setrewardCategory] = useState("");
  const [starCount, setstarCount] = useState("");

  return (
    <div>
      <h1>Rewards + Add Rewards</h1>
      <div class="container">
        <FormComponent>
          <div class="row">
            <div className="col s6">
              <ul>
                <li>This is a reward category</li>
                <li>This is a reward category</li>
                <li>This is a reward category</li>
                <li>This is a reward category</li>
                <li>This is a reward category</li>
              </ul>
            </div>
            <div className="col s6">
              <h5>Add a Reward Category and How Many Stars</h5>
              <div className="input-field col s6">
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
                    value={rewardCategory}
                    className="validate"
                    onChange={(e) => {
                      setrewardCategory(e.target.value);
                    }}
                  />
                  <label for="rewardCategory">Reward Category</label>

                  <div className="input-field col s6">
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
                </form>
              </div>
              <button className="waves-effect red darken-1 btn">
                ADD CATEGORY
              </button>
            </div>
          </div>
        </FormComponent>
      </div>
    </div>
  );
};

export default Rewards;
