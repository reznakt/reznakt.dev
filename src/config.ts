import { FaEnvelope, FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa6";
import urlSlug from "url-slug";
import packageJson from "../package.json" with { type: "json" };
import IsMuIcon from "./assets/icons/is-mu.svg?react";

interface Link {
  accountName?: string;
  icon: React.ComponentType;
  serviceName: string;
  url: string;
}

const [firstName, lastName] = packageJson.author.name.split(" ");

export const author = {
  firstName,
  fullName: packageJson.author.name,
  lastName,
};

export const site = {
  description: packageJson.description,
  title: author.fullName,
};

export const social: Record<string, Link> = {
  email: {
    accountName: packageJson.author.email,
    icon: FaEnvelope,
    serviceName: "Email",
    url: `mailto:${packageJson.author.email}`,
  },
  github: {
    accountName: "@reznakt",
    icon: FaGithub,
    serviceName: "GitHub",
    url: "https://github.com/reznakt",
  },
  gitlab: {
    accountName: "@reznakt",
    icon: FaGitlab,
    serviceName: "GitLab",
    url: "https://gitlab.com/reznakt",
  },
  linkedin: {
    accountName: "@reznakt",
    icon: FaLinkedin,
    serviceName: "LinkedIn",
    url: "https://linkedin.com/in/reznakt",
  },
  muni: {
    accountName: "525055",
    icon: IsMuIcon,
    serviceName: "IS MU",
    url: "https://is.muni.cz/person/525055",
  },
};

const sectionNames = [
  "Home",
  "Education",
  "Experience",
  "Technology",
  "Projects",
] as const;
export type SectionName = (typeof sectionNames)[number];

export const sections = sectionNames.map((name) => ({
  name,
  slug: urlSlug(name),
}));
