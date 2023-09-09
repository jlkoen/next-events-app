import { FaCalendarDay } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button
} from '@nextui-org/react';
import React from 'react';

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
}

const EventCard: React.FC<EventCardProps> = (props) => {
  const { title, description, image, date, location } = props;
  return (
    <Card className="max-w-md">
      <CardHeader className="flex">
        <Image src={image} />
      </CardHeader>
      <CardBody>
        <p className="mt-0.5 text-xl font-semibold text-gray-800">{title}</p>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 mb-4">
          {description}
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="flex">
        <div className="flex px-3 items-center justify-evenly w-full">
          <div className="p-2">
            <div className="flex flex-col">
              <div className="flex items-center m-2">
                <div>
                  <FaCalendarDay size={30} />
                </div>
                <time dateTime={date} className="text-md pl-2 text-gray-600">
                  {date}
                </time>
              </div>
              <div className="flex max-w-sm items-center">
                <div className="px-1">
                  <BiMap size={30} />
                </div>
                <span className="text-md pl-1 text-gray-600 max-w-[150px]">
                  {location}
                </span>
              </div>
            </div>
          </div>

          <Button
            as={Link}
            className=""
            color="primary"
            href="#"
            variant="flat"
          >
            Register
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
