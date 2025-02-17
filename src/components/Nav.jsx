import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link as NavbarLink,
  Button,
} from "@heroui/react";
import { Link } from "react-router-dom";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Nav() {
  const [ isMenuOpen, setIsMenuOpen ] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      disableScrollHandler={false}
      className="rounded-full border sticky top-3 border-slate-600"
      isBlurred
      onMenuOpenChange={setIsMenuOpen}
      disableAnimation={true}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-3",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}>
      <NavbarContent className="sm:hidden " justify="start">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ANU</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>


      <NavbarContent className="hidden sm:flex gap-4 w-full" justify="between">
        <NavbarBrand>
          <AcmeLogo />
          <Link to="/#" className="font-bold text-inherit cursor-pointer">ANU</Link>
        </NavbarBrand>
        <NavbarItem>
          <NavbarLink color="foreground" href="#">
            Features
          </NavbarLink>
        </NavbarItem>
        <NavbarItem isActive>
          <NavbarLink color="foreground" aria-current="page" href="#">
            Customers
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink color="foreground" href="#">
            Integrations
          </NavbarLink>
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <NavbarLink href="#">Login</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarMenu className="mt-5">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="mt-1">
            <NavbarLink
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </NavbarLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

