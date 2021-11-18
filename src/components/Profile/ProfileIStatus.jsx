
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import styles from './profileInfo.module.css';



class ProfileStatus extends React.Component {
  state = {
    editeMode: false
  }

  activateEditMode = () => {
    this.setState({
      editeMode: true
    })

  }

  deactivateEditMode = () => {
    this.setState({
      editeMode: false
    })

  }

  render() {
    return (
      <>
        <div >

          {!this.state.editeMode &&

            <div>
              <span onDoubleClick={this.activateEditMode.bind(this)} > {this.props.status} </span>
            </div>
          }

          {this.state.editeMode &&

            <div >
              <input onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
            </div>
          }
        </div>
      </>
    )
  }
}
export default ProfileStatus;