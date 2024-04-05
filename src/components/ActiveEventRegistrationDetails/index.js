// Write your code here
import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  renderRegisteredView = () => {
    const a = 'a'
    return (
      <div className="registeredViewCont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
          alt="registered"
          className="registeredImage"
        />
        <h1 className="alreadyregisterd-head">
          You have already registered for the event
        </h1>
      </div>
    )
  }

  renderRegistrationsClosedView = () => (
    <div className="RegistrationsClosedView">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrationsClosedImage"
      />
      <h1 className="registrationsClosedHeading">
        Registrations Are Closed Now!
      </h1>
      <p className="stayToonedPara">
        Stay tuned. We will reopen the registrations soon
      </p>
    </div>
  )

  renderYetToRegisterView = () => (
    <div className="yet-to-register-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="para-register">
        A live performance brings so much to your relationship with dance
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  render() {
    const {registration} = this.props
    console.log(registration)
    switch (registration) {
      case 'REGISTERED':
        return this.renderRegisteredView()
      case 'YET_TO_REGISTER':
        return this.renderYetToRegisterView()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationsClosedView()
      default:
        return null
    }
  }
}
export default ActiveEventRegistrationDetails
