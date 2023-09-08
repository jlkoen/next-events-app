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

const EventCard = () => {
  return (
    <Card className="max-w-md">
      <CardHeader className="flex">
        <Image src="/card-photo.jpeg" />
      </CardHeader>
      <CardBody>
        <p className="mt-0.5 text-xl font-semibold text-gray-800">
          How to position your furniture for positivity
        </p>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
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
                <time
                  dateTime="09-01-2023"
                  className="text-md pl-2 text-gray-600"
                >
                  10th Oct 2022
                </time>
              </div>
              <div className="flex max-w-sm items-center">
                <div className="px-1">
                  <BiMap size={30} />
                </div>
                <span className="text-md pl-1 text-gray-600 max-w-[150px]">
                  123 Any Street Anywhere AL
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
