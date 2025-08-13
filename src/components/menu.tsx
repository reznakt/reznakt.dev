import { links, sections } from "@/config";
import { useHash } from "@/hooks/hash";
import { slugToHash } from "@/lib/utils";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { useState } from "react";
import { FaDownload, FaTerminal } from "react-icons/fa6";

export function Menu(): React.ReactElement {
  const hash = useHash({
    allowedHashes: sections.map(({ slug }) => slugToHash(slug)),
    defaultHash: "#home",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className="fixed z-100"
      classNames={{
        item: [
          "flex",
          "relative",
          "items-center",
          "h-full",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:mb-4",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[1px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      isBordered
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
    >
      <NavbarBrand>
        <Link className="font-bold flex gap-4" href="#home">
          <FaTerminal size={24} />
          Tomáš Režňák
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        {sections.map(({ name, slug }) => (
          <NavbarItem isActive={hash === slugToHash(slug)} key={slug}>
            <Link href={slugToHash(slug)}>{name}</Link>
          </NavbarItem>
        ))}
        <NavbarItem className="ml-4">
          <Button
            as="a"
            color="default"
            href={links.cv}
            startContent={<FaDownload />}
            target="_blank"
            variant="bordered"
          >
            Download CV
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
        onChange={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />

      <NavbarMenu>
        {sections.map(({ name, slug }) => (
          <NavbarMenuItem isActive={hash === slugToHash(slug)} key={slug}>
            <Link
              href={slugToHash(slug)}
              onPress={() => {
                setIsMenuOpen(false);
              }}
            >
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
            className="flex items-center gap-2"
            href={links.cv}
            isExternal
            onPress={() => {
              setIsMenuOpen(false);
            }}
          >
            <FaDownload /> Download CV
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
