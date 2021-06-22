import { Calendar, momentLocalizer } from "react-big-calendar";
import { messages } from "./calendar-es";
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarEvent, eventStyleGetter } from "./CalendarEvent";

moment.locale('es')

const eventsTemp = [

    {
        title: "Primer Evento",
        start: moment('2021-06-23 08:00')._d,
        end: moment('2021-06-23 11:00')._d,
        notes:'Descripcion de nota de evento'
    },
    {
        title: "Segundo Evento",
        start: moment('2021-06-25 08:00')._d,
        end: moment('2021-06-25 11:00')._d,
        notes:'Descripcion de nota de evento'
    },

]

const CalendarComponent = ({ events }) => {

    const localizer = momentLocalizer( moment )

    return(
        <div className="calendar-screen">
            <Calendar
                localizer={localizer}
                events={eventsTemp}
                startAccessor="start"
                endAccessor="end"
                messages={ messages }
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEvent,
                }}
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