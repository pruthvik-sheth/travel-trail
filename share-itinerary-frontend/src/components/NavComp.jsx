import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link,Button, Switch} from "@nextui-org/react";
import { MoonIcon } from "../assets/MoonIcon";
import { SunIcon } from "../assets/SunIcon";


export default function NavComp({ toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Login",
    "Sign Up",
    "CreateItinerary",
    "Explore"
  ];

  const items = {
    "Home": "/",
    "Login" : "/login",
    "Sign Up" : "/signup",
    "CreateItinerary" : "/create-itinerary",
    "Explore" : "/explore"
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/">
            <img src="/logo.png" style={{ width: '36px', height: '36px', margin:'10px'}}/>
            <p className="font-bold text-inherit">ShareItinerary</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href="/" color="foreground">
            <img src="/logo.png" style={{ width: '36px', height: '36px', margin:'10px'}}/>
            <p className="font-bold text-inherit">ShareItinerary</p>
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/create-itinerary" color="foreground">
            CreateItinerary
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Explore
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button className="hidden lg:flex" as={Link} color="warning" href="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Switch
            defaultSelected
            color="success"
            size="md"
            startContent={<SunIcon/>}
            endContent={<MoonIcon />}
            onChange={toggleDarkMode}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {Object.entries(items).map(([item, link], index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={link} size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
