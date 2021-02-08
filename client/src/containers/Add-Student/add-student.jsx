import React, { useState } from "react";
import FormComponent from "../../components/Form/form";
import "./add-student.css";

const AddStudent = ({ handleFormSubmit }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setusername] = useState("");

  return (
    <div>
      <div className="row">
        <h1>Add a Student</h1>
      </div>
      <div className="container">
        <FormComponent>
          <div className="row">
            <form
              className="col s12"
              onSubmit={(e) => {
                handleFormSubmit(e, {
                  firstName,
                  lastName,
                  username,
                });
              }}
            >
              <div className="row">
                <div classNames="input-field col s6">
                  <input
                    id="firstName"
                    type="text"
                    className="validate"
                    value={firstName}
                    onChange={(e) => {
                      setfirstName(e.target.value);
                    }}
                  />
                  <label for="firstName">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input
                    id="lastName"
                    type="text"
                    className="validate"
                    value={firstName}
                    onChange={(e) => {
                      setlastName(e.target.value);
                    }}
                  />
                  <label for="lastName">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="username"
                    type="text"
                    className="validate"
                    value={firstName}
                    onChange={(e) => {
                      setusername(e.target.value);
                    }}
                  />
                  <label for="username">Username</label>
                  <div className="helper-text">
                    <img
                      className="star-20"
                      src="https://lh3.googleusercontent.com/HbWvsMRoIL7p_QkLEhH6pHKgCfImoXRBkhpGh_zGn9GVs8qhg_rmSJ7_MQS1lAWTLPHnuovKCpajt3rX87pl8lqAdJ_wI9BRYI9VeraZ4fQghUk80KcyAr9aGSC8GbZOc6_BsTiJMMqbNBlWJZealABXTyeeRHswoEiqHds6T_bx1GLji3J2sc1DYemBWHOkv4vxWSz2ZTWus2p-OL6ko0OwbgbvgxlGw2K1GQwYLm9lZHHr_6KRNQiHcOJL6iE11PQIcwFj__7UI4WBEUr4vEaV-wkDvVurvheLgj-oTqRTG5GTk7q8fA1tvirRZaOhttskRD-61cFNlzfdVYAiESiPavhS7PXZERpceIVsATtJnzURDe3jKyl2FcjFbeibwFJuvjaRULWgMBcOVySrYIaHavRcuaExjeWu9l4if-mvuDNB_TdM82UI651e5FUpRZpBJJOJxaqPvI5OHcmgUlzvrComtrouElnPNVh8OkDTp97k01cf2MvHSaQtlHMWfS5kGWOq6nHND9jQA6lcPpatC-x3AKYDFLwgA34BgqXuBZ1dqRMm2zytPFALWt4ha9eJLYjBB3f1SYEuFb1Ozn1_zJlBEDpmKM05F10lv7OaQUXNHAeZu4U3XAoLnH3rCCM6a3dspK5W-B8Es5G-M1_g_FwZFzPlPRUh4r0nS9j4syUS4PVH_jFRFANd=w45-h43-no?authuser=0"
                    />
                    (Student will login with this)
                    <img
                      className="star-20"
                      src="https://lh3.googleusercontent.com/HbWvsMRoIL7p_QkLEhH6pHKgCfImoXRBkhpGh_zGn9GVs8qhg_rmSJ7_MQS1lAWTLPHnuovKCpajt3rX87pl8lqAdJ_wI9BRYI9VeraZ4fQghUk80KcyAr9aGSC8GbZOc6_BsTiJMMqbNBlWJZealABXTyeeRHswoEiqHds6T_bx1GLji3J2sc1DYemBWHOkv4vxWSz2ZTWus2p-OL6ko0OwbgbvgxlGw2K1GQwYLm9lZHHr_6KRNQiHcOJL6iE11PQIcwFj__7UI4WBEUr4vEaV-wkDvVurvheLgj-oTqRTG5GTk7q8fA1tvirRZaOhttskRD-61cFNlzfdVYAiESiPavhS7PXZERpceIVsATtJnzURDe3jKyl2FcjFbeibwFJuvjaRULWgMBcOVySrYIaHavRcuaExjeWu9l4if-mvuDNB_TdM82UI651e5FUpRZpBJJOJxaqPvI5OHcmgUlzvrComtrouElnPNVh8OkDTp97k01cf2MvHSaQtlHMWfS5kGWOq6nHND9jQA6lcPpatC-x3AKYDFLwgA34BgqXuBZ1dqRMm2zytPFALWt4ha9eJLYjBB3f1SYEuFb1Ozn1_zJlBEDpmKM05F10lv7OaQUXNHAeZu4U3XAoLnH3rCCM6a3dspK5W-B8Es5G-M1_g_FwZFzPlPRUh4r0nS9j4syUS4PVH_jFRFANd=w45-h43-no?authuser=0"
                    />
                  </div>
                </div>
              </div>
            </form>

            <button
              type="submit"
              className="styled-button"
              style={styles.button}
            >
              Add Student
            </button>
          </div>
        </FormComponent>
      </div>
    </div>
  );
};

const styles = {
  button: {
    background:
      "url(https://lh3.googleusercontent.com/O_O0RDSM62-zVSWViayDPWPQFhHom3N648OVvhuzvYycvETeWPKr-Uo4c7_ChM7z5a2zEyzv8rZnfALXKpxNOi335gm-bvdhCYrBm5_lDaxgX6fTzs4GdYmUW-Y_kuv0JAz-TH8NSrks9_6b3KWEt6myl2T7ZN8E--E4LQHynXC7T502X99R9MvP-o4UciAT6XHIV49BZJVyddObTLWCcgFN8NG7J41dWYatJripuVC1fPZOFjYyv6eUKTosIwfvqWWE28pE2idpghPjxvyuLilLGnwz6BXkQ7JDmoMUQ4YqSYQ7ELVFPyG8jJFbgKbSb93W1HEJ91Uj02wIwCBc0nv0Zc_asmKFRj9cp_ztS0YvEFWLj_28ECvlXOt965Rg45Lan6wckmKiGesyDxON8L_dVe7XCEQ_DnynsrjpQNDdiycCwXAXwyLmSuEjADVrGk-8POjQ61fwqjAIBBqovzpxklPh2R-YQJk150bFk4HXPOA-Tp2KUnxIZLpFaJJbyeVi1AGD5HkuS7cen2yh0djFwGa4XfE6PlALPsTMUaR9iG9yqGlLONNBUmCMMkmvlbngVh14Q6EusdRUXIaurMwJadCOfATpWAoyRNM8u3WGnB3kw_o7_b69QNZKcm25Bj3ChFe239jmY8zrw-7VVtztIY27oECXCEpjNQ9qFdORfutctjmuZi350Ebb=w162-h59-no?authuser=0)",
  },
};

export default AddStudent;
