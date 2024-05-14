export const EventsCardsList = () => {
  const events = [];
  return (
    <ul>
      {events.map(event => (
        <li key={event._id}>Event Card</li>
      ))}
    </ul>
  );
};
