import { RiCalendarEventLine } from 'react-icons/ri';

import Button from '../button/Button.tsx';

export default function Header() {
  return (
    <div className="w-full py-4 bg-dull-lavender-200 border-b-2 border-dull-lavender-400">
      <div className="flex justify-between items-center px-4">
        <div className="flex gap-2 items-center px-3">
          <RiCalendarEventLine size={42} />
          Event Booking
        </div>
        <Button label="Create Event">Create Event</Button>
      </div>
    </div>
  );
}
