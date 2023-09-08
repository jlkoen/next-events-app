import { RiCalendarEventLine } from 'react-icons/ri';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button
} from '@nextui-org/react';

export default function Header() {
  return (
    <Navbar className="bg-dull-lavender-50 border-b-stone-400 border-1">
      <NavbarBrand>
        <RiCalendarEventLine size={40} />
        <h1 className="pl-2 font-semibold text-lg">Event Booking</h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="http://localhost:3000">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="http://localhost:3000" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="http://localhost:3000">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="http://localhost:3000">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
