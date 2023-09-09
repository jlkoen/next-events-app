import EventCard from '@/components/card/EventCard.tsx';
import { getAllEvents } from '../../data/fake-data';

export default function Home() {
  const allEvents = getAllEvents();

  return (
    <div className="flex flex-col items-center space-y-4 justify-center min-h-screen py-5 bg-dull-lavender-50">
      {allEvents.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
          image={event.image}
          date={event.date}
          location={event.location}
        />
      ))}
    </div>
  );
}
