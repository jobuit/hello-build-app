export default function CalendarEvent({ event }) {
  return (
    <div className="shadow p-4 relative flex flex-col">
      <p className="font-semibold">{event.summary}</p>
      <p className="text-sm max-h-14 overflow-hidden">{event.description}</p>
    </div>
  );
}
