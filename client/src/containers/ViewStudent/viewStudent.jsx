import React from "react";
import FormComponent from "../../components/Form/form";
import "./viewStudent.css";

function ViewStudent() {
  return (
    <div>
      <h1>
        View Student
      </h1>
     

      <div className="row">
        <div className="col s3">
          <h1>Student Name</h1>
          <hr></hr>
          <h3 className="display-name">Display Name</h3>
          <h1>
            <img src="https://lh3.googleusercontent.com/HbWvsMRoIL7p_QkLEhH6pHKgCfImoXRBkhpGh_zGn9GVs8qhg_rmSJ7_MQS1lAWTLPHnuovKCpajt3rX87pl8lqAdJ_wI9BRYI9VeraZ4fQghUk80KcyAr9aGSC8GbZOc6_BsTiJMMqbNBlWJZealABXTyeeRHswoEiqHds6T_bx1GLji3J2sc1DYemBWHOkv4vxWSz2ZTWus2p-OL6ko0OwbgbvgxlGw2K1GQwYLm9lZHHr_6KRNQiHcOJL6iE11PQIcwFj__7UI4WBEUr4vEaV-wkDvVurvheLgj-oTqRTG5GTk7q8fA1tvirRZaOhttskRD-61cFNlzfdVYAiESiPavhS7PXZERpceIVsATtJnzURDe3jKyl2FcjFbeibwFJuvjaRULWgMBcOVySrYIaHavRcuaExjeWu9l4if-mvuDNB_TdM82UI651e5FUpRZpBJJOJxaqPvI5OHcmgUlzvrComtrouElnPNVh8OkDTp97k01cf2MvHSaQtlHMWfS5kGWOq6nHND9jQA6lcPpatC-x3AKYDFLwgA34BgqXuBZ1dqRMm2zytPFALWt4ha9eJLYjBB3f1SYEuFb1Ozn1_zJlBEDpmKM05F10lv7OaQUXNHAeZu4U3XAoLnH3rCCM6a3dspK5W-B8Es5G-M1_g_FwZFzPlPRUh4r0nS9j4syUS4PVH_jFRFANd=w45-h43-no?authuser=0" />
            11
          </h1>
          <a class="waves-effect waves-light btn" id="edit-student-btn">Edit Student</a>
          <button className="waves-effect waves-light btn" id="delete-student-btn">Delete</button>
        </div>

        <div className="col s9">
            
          <FormComponent>
            <row>
              <div className="col s6">
                <ul>
                  <li className="star-categories">Asking a tough question</li>
                  <li className="star-categories">Asking a tough question</li>
                  <li className="star-categories">Asking a tough question</li>
                  <li className="star-categories">Asking a tough question</li>
                  <li className="star-categories">Asking a tough question</li>
                </ul>
              </div>

              <div className="col s6">
                <h4 className="add-star-header">Add Star</h4>
                <button class="waves-effect waves-light btn" id="add-category-btn">Category</button>
                <button class="waves-effect waves-light btn" id="add-star-btn">Add Star</button>
              </div>
            </row>
          </FormComponent>
        </div>
      </div>
    </div>
  );
}

export default ViewStudent;
