import React from 'react';
import './Dashboard.css'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import OnBoarding from '../OnBoarding/index.js'
import Home from '../Home/Home.js'
import Menu from '../Menu/Menu.js'
import NewTask from '../NewTask/NewTask.js'
import TaskList from '../TaskList/index.js'
import NewTaskModal from '../Home/NewTaskModal.js'

class Dashboard extends React.Component {

  render() {

    return (

      <div className="dashboard">
        <div className='nav'>
          <Menu />
        </div>

        {this.props.isLoading ? <p className='loading'>Loading...</p> :
            <div className='appRoutes'>
              <Route path='/onboarding' render={props => <OnBoarding {...props} />} />

              <Route exact path='/' render={props => <Home {...props} />} />
              <Route path='/NewTask' render={props => <NewTask {...props} />} />
              <Route path='/taskList' render={props => <TaskList {...props} />} />
              <Route path='/taskModal' render={props => <Home {...props} />} />

            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userTasks: state.userTasks,
  userData: state.userData,
  isLoading: state.isLoading,
})

export default withRouter(connect(mapStateToProps)(Dashboard));