import PropTypes from "prop-types";

const WantToCooks = () => {
  return (
    <div>
      <h1>Want To Cooks</h1>
      <div className="">
        <table className="">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Grilled Salmon with Lemon Dill Sauce</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>
                <button>Prepare</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

WantToCooks.propTypes = {};

export default WantToCooks;
