"use client"

import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DateClickArg } from '@fullcalendar/interaction';

const CaregiverCalendar = () => {
    const [events, setEvents] = useState([
        { title: 'Available', start: '2024-12-12T09:00:00', end: '2024-12-12T12:00:00', color: 'green' },
        { title: 'Booked', start: '2024-12-13T14:00:00', end: '2024-12-13T15:00:00', color: 'red' },
    ]);

    const handleDateClick = (info: DateClickArg) => {
        const newEvent = {
            title: 'Available',
            start: info.dateStr,
            end: info.dateStr,
            color: 'green',
        };
        setEvents([...events, newEvent]);
    };

    return (
        <div>
            <h2>Caregiver Availability</h2>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                editable={true}
                selectable={true}
                events={events}
                dateClick={handleDateClick} // Trigger when a date is clicked
            />
        </div>
    );
};

export default CaregiverCalendar;
