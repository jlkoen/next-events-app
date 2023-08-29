import Image from 'next/image';
import { FaCalendarDay } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';

import Button from '../button/Button';

const Card = () => {
  return (
    <article className="w-2/3 md:w-1/3 overflow-hidden rounded-lg shadow transition hover:shadow-lg mb-10">
      <Image
        src="/card-photo.jpeg"
        alt="Card Image"
        width="500"
        height="10"
        className="h-56 w-full object-cover"
      />

      <div className="bg-dull-lavender-100 p-4 sm:p-6">
        <div className="flex justify-between pb-2">
          <div className="flex">
            <FaCalendarDay />
            <time
              dateTime="2023-09-01"
              className="block text-xs pl-2 text-gray-400"
            >
              10th Oct 2022
            </time>
          </div>
          <div className="flex">
            <BiMap />
            <span className="block text-xs pl-1 text-gray-400">
              123 Any Street
            </span>
          </div>
        </div>

        <a href="http://localhost:3000">
          <h3 className="mt-0.5 text-xl font-semibold text-gray-900">
            How to position your furniture for positivity
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
        <div className="flex items-center justify-center">
          <Button link="https://google.com/" label="Book Event" />
        </div>
      </div>
    </article>
  );
};

export default Card;
