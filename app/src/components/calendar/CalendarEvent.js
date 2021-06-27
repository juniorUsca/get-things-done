import React from 'react'

export const CalendarEvent = ({ event }) => {
  const { title, notes } = event

  return (
    <>
      <div className="container-event">
        <div>
          <span className="event-title">
            { title }
          </span>
        </div>
        <div>
          <span>
            { notes }
          </span>
        </div>
        <style jsx>
          {`
                  .event-title{
                      font-size: 17px;
                      font-weight: bold;
                  }
                `}
        </style>
      </div>

    </>
  )
}

export const eventStyleGetter = () => {
  const style = {
    background: '#9ada13',
    borderRadius: '15px',
    display: 'block',
    color: 'white',
    padding: '10px',
  }

  return { style }
}
