import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const CalendarComponent = ({ events }) => {

    const localizer = momentLocalizer(moment)

    const eventsTemp = [

        {
            title: "Primer Evento",
            start: moment('2021-06-23 08:00')._d,
            end: moment('2021-06-23 11:00')._d
        },
        {
            title: "Segundo Evento",
            start: moment('2021-06-25 08:00')._d,
            end: moment('2021-06-25 11:00')._d
        },

    ]

    return(
        <div className="calendar-screen">
            <Calendar
                localizer={localizer}
                events={eventsTemp}
            />
            <style jsx>
                {`
                .calendar-screen{
                    display: flex;
                    flex-flow: column;
                    height: 100vh;
                    width: 100%;
                }
                .rbc-calendar{
                    height: 100% !important;
                }
                `}
            </style>
        </div>
    )
}
export default CalendarComponent