const ConfirmationNotification = ({message}) => {
    if (message === null)
    {
        return null
    }
   
    return (
        <div className='confirmation'>
          {message}
        </div>
      )
}

const ErrorNotification = ({message}) => {
    if (message === null)
    {
        return null
    }
   
    return (
        <div className='error'>
          {message}
        </div>
      )
}

export default {ConfirmationNotification, ErrorNotification}