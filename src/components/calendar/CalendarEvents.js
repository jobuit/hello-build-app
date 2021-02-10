import CalendarEvent from "./CalendarEvent";

export default function CalendarEvents({ events, deleteEvent }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 grid-cols-1 mb-8">
      {events.map((item) => (
        <CalendarEvent key={item.id} event={item} deleteEvent={deleteEvent} />
      ))}
    </div>
  );
}
