import errorIcon from "../assets/icons/error.svg";

export const ErrorRequest = () => {
  return (
    <div className="claims-block_error">
    <img src={errorIcon} alt="Loading" />
    <span>Error!</span>
  </div>
  )
}
