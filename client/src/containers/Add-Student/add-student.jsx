import React from "react";
import FormComponent from '../../components/Form/form';
import "./add-student.css";

function AddStudent() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>Add a Student</h1>
        </div>
        <FormComponent>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input
                  placeholder="First Name"
                  id="first_name"
                  type="text"
                  class="validate"
                />
                <label for="first_name">First Name</label>
              </div>
              <div class="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  class="validate"
                  placeholder="Last Name"
                />
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="username"
                  type="text"
                  class="validate"
                  placeholder="Username"
                />
                <label for="username">Username</label>
                <span class="helper-text">(Student will login with this)</span>
              </div>
            </div>
          </form>

          <button type="submit" style={styles.button}>Add Student</button>
        </div>
        </FormComponent>
      </div>
    </div>
  );
}

const styles = {
    button: {
        background: 'url(https://lh3.googleusercontent.com/O_O0RDSM62-zVSWViayDPWPQFhHom3N648OVvhuzvYycvETeWPKr-Uo4c7_ChM7z5a2zEyzv8rZnfALXKpxNOi335gm-bvdhCYrBm5_lDaxgX6fTzs4GdYmUW-Y_kuv0JAz-TH8NSrks9_6b3KWEt6myl2T7ZN8E--E4LQHynXC7T502X99R9MvP-o4UciAT6XHIV49BZJVyddObTLWCcgFN8NG7J41dWYatJripuVC1fPZOFjYyv6eUKTosIwfvqWWE28pE2idpghPjxvyuLilLGnwz6BXkQ7JDmoMUQ4YqSYQ7ELVFPyG8jJFbgKbSb93W1HEJ91Uj02wIwCBc0nv0Zc_asmKFRj9cp_ztS0YvEFWLj_28ECvlXOt965Rg45Lan6wckmKiGesyDxON8L_dVe7XCEQ_DnynsrjpQNDdiycCwXAXwyLmSuEjADVrGk-8POjQ61fwqjAIBBqovzpxklPh2R-YQJk150bFk4HXPOA-Tp2KUnxIZLpFaJJbyeVi1AGD5HkuS7cen2yh0djFwGa4XfE6PlALPsTMUaR9iG9yqGlLONNBUmCMMkmvlbngVh14Q6EusdRUXIaurMwJadCOfATpWAoyRNM8u3WGnB3kw_o7_b69QNZKcm25Bj3ChFe239jmY8zrw-7VVtztIY27oECXCEpjNQ9qFdORfutctjmuZi350Ebb=w162-h59-no?authuser=0)',
    },
};

export default AddStudent;
