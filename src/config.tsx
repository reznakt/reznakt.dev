import { FaEnvelope, FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa6";
import urlSlug from "url-slug";
import packageJson from "../package.json" with { type: "json" };
import {
  default as IsMu,
  default as IsMuIcon,
} from "./assets/icons/is-mu.svg?react";
import MuniFi from "./assets/icons/muni-fi.svg?react";
import { EducationCardProps } from "./components/education-card";
import { SocialLinkProps } from "./components/social-link";

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

export const social = {
  email: {
    description: packageJson.author.email,
    icon: FaEnvelope,
    serviceName: "Email",
    url: `mailto:${packageJson.author.email}`,
  },
  github: {
    description: "@reznakt",
    icon: FaGithub,
    serviceName: "GitHub",
    url: "https://github.com/reznakt",
  },
  gitlab: {
    description: "@reznakt",
    icon: FaGitlab,
    serviceName: "GitLab",
    url: "https://gitlab.com/reznakt",
  },
  linkedin: {
    description: "@reznakt",
    icon: FaLinkedin,
    serviceName: "LinkedIn",
    url: "https://linkedin.com/in/reznakt",
  },
  muni: {
    description: "525055",
    icon: IsMuIcon,
    serviceName: "IS MU",
    url: "https://is.muni.cz/person/525055",
  },
} satisfies Record<string, SocialLinkProps>;

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

const fi = {
  logo: MuniFi,
  name: "Faculty of Informatics, Masaryk University",
  url: "https://www.fi.muni.cz/",
};

export const education = {
  bachelor: {
    endDate: new Date("2025-06"),
    institution: fi,
    program: "Programming and development",
    startDate: new Date("2021-09"),
    thesis: {
      abstract: (
        <div className="space-y-2">
          <p>
            In this thesis, we present{" "}
            <span style={{ fontVariant: "small-caps" }}>svglab</span>, an
            open-source Python toolkit for the programmatic manipulation of
            vector images in the Scalable Vector Graphics (SVG) format.
          </p>
          <p>
            The library provides robust functionality for parsing, modifying,
            and writing SVG documents, offering comprehensive support for
            features defined by the SVG specification.
          </p>
          <p>
            Next, we conduct a survey of existing software in this domain and
            demonstrate that our implementation matches or exceeds the
            capabilities found in even the most feature-rich libraries within
            the Python ecosystem while addressing some of the common limitations
            found therein.
          </p>
          <p>
            Finally, we suggest several possible directions for future work in
            this area.
          </p>
        </div>
      ),
      award: true,
      keywords: [
        "SVG",
        "SVG manipulation",
        "vector graphics",
        "image processing",
        "affine transformations",
        "parsing",
        "parser",
        "computer graphics",
        "XML",
      ],
      links: [
        {
          description: "Thesis Archive",
          icon: IsMu,
          serviceName: "IS MU",
          url: "https://is.muni.cz/th/ddfps/",
        },
        {
          description: "GitHub Repository",
          icon: FaGithub,
          serviceName: "GitHub",
          url: "https://github.com/reznakt/svglab/",
        },
      ],
      title: "A Manipulation Library for Scalable Vector Graphics",
    },
    type: "Bachelor's degree",
  },
  master: {
    institution: fi,
    program: "Artificial intelligence and data processing",
    specialization: "Machine learning and artificial intelligence",
    startDate: new Date("2025-09"),
    type: "Master's degree",
  },
} satisfies Record<string, EducationCardProps>;
