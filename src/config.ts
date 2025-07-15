import { FaEnvelope, FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa6";
import IsMuIcon from "./assets/icons/ismu.svg?react";

interface Link {
  accountName?: string;
  icon: React.ComponentType;
  serviceName: string;
  url: string;
}

const firstName = "Tomáš";
const lastName = "Režňák";

export const author = { firstName, lastName, name: `${firstName} ${lastName}` };

export const site = {
  description: `${author.name}'s personal website`,
  title: author.name,
};

export const links: Record<string, Link> = {
  email: {
    icon: FaEnvelope,
    serviceName: "Email",
    url: "mailto:tomas.reznak@volny.cz",
  },
  github: {
    accountName: "reznakt",
    icon: FaGithub,
    serviceName: "GitHub",
    url: "https://github.com/reznakt",
  },
  gitlab: {
    accountName: "reznakt",
    icon: FaGitlab,
    serviceName: "GitLab",
    url: "https://gitlab.com/reznakt",
  },
  linkedin: {
    accountName: "reznakt",
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
