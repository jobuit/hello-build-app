import moment from "moment";

export default function CalendarEvent({ event, deleteEvent }) {
  return (
    <div className="shadow-lg p-4 relative flex flex-col">
      <p
        onClick={() => deleteEvent(event)}
        className="cursor-pointer absolute right-6"
      >
        <i className="fas fa-trash-alt"></i>
      </p>
      <p className="font-bold">{event.summary}</p>
      <p className="text-sm max-h-14 overflow-hidden my-3">
        {event.description}
      </p>
      <p className="text-sm font-semibold">
        <i className="fas fa-calendar-alt mr-1" />
        {`${moment(event.start.dateTime).format("MMM DD HH:mm")} - ${moment(
          event.end.dateTime
        ).format("MMM DD HH:mm")}`}
      </p>
      {event.visibility === "private" ? (
        <p className="text-sm">
          <i className="fas fa-lock mr-1" />
          Private
        </p>
      ) : (
        <p className="text-sm">
          <i className="fas fa-unlock-alt mr-1" />
          Public
        </p>
      )}
      <p className="text-sm">
        {event.status === "confirmed" ? (
          <i className="fas fa-check" />
        ) : (
          <i className="fas fa-exclamation" />
        )}
        {event.status}
      </p>
    </div>
  );
}
