// Write your code here
import './index.css'

const EventItem = props => {
  const {item, imageClicked} = props
  const {id, imageUrl, name, location, registrationStatus} = item

  const clickImage = () => {
    imageClicked(registrationStatus)
  }
  return (
    <li className="list-item">
      <button type="button">
        <img
          onClick={clickImage}
          src={imageUrl}
          alt="event"
          className="imgItem"
        />
      </button>

      <p className="head">{name}</p>
      <p className="para">{location}</p>
    </li>
  )
}
export default EventItem
