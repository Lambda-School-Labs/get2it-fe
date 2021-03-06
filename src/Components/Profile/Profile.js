import React from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from '../../actions.js'
import './Profile.css'

class Profile extends React.Component {
  constructor(props) {
    super(props)

    const { displayName } = this.props.userData

    this.state = {
      displayName: displayName,
    }
  }

  updatedProfile = evt => {
    evt.preventDefault()

    const payload = {
      id: this.props.userID,
      displayName: this.state.displayName,
      // password: this.props.userData.password
    }

    const id = this.props.userID

    this.props.updateUser(payload, id)
    setTimeout(() => {
      this.props.history.push('/')
    }, 200)
  }

  handleChange = evt => {
    evt.preventDefault()

    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    const { displayName } = this.state;
    const { isLoading, error } = this.props;

    return (
      <div className="profile">
        <h3 className="pageTitle">{this.props.userData.displayName}</h3>
        <i className="fas fa-user-circle profileImg"></i>
        <form className="registerForm proForm" onSubmit={this.updatedProfile}>
          {error && <p className="error">{error}</p>}

          <div className="inputContainer">
            <label to="displayName">
              <i id="registerIcon" className="far fa-user-circle"></i>
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              placeholder="Display Name"
              value={displayName}
              onChange={this.handleChange}
              required
            />
            <br />
          </div>

          {isLoading ? (
            <p>Saving changes, please wait...</p>
          ) : (
            <button className="registerButton" type="submit">
              Update Profile
            </button>
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
  userID: state.userID,
});

const mapDispatchToProps = {
  updateUser,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));