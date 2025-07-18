import IsMu from "@/assets/icons/is-mu.svg?react";
import MuniFi from "@/assets/icons/muni-fi.svg?react";
import { FaGithub } from "react-icons/fa6";
import waves from "vanta/dist/vanta.waves.min";
import { EducationCard } from "../education-card";
import { Section } from "../section";

export function EducationSection(): React.ReactElement {
  const fi = {
    logo: MuniFi,
    name: "Faculty of Informatics, Masaryk University",
    url: "https://www.fi.muni.cz/",
  };

  return (
    <Section
      name="Education"
      vanta={{
        effect: waves,
        effectOptions: { color: 0x202020, shininess: 30 },
      }}
    >
      <div>
        <h1 className="text-5xl font-bold mb-4">Education</h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <EducationCard
            institution={fi}
            program="Artificial intelligence and data processing"
            specialization="Machine learning and artificial intelligence"
            startDate={new Date("2025-09")}
            type="Master's degree"
          />
          <EducationCard
            endDate={new Date("2025-06")}
            institution={fi}
            program="Programming and development"
            startDate={new Date("2021-09")}
            thesis={{
              abstract: (
                <div className="space-y-2">
                  <p>
                    In this thesis, we present{" "}
                    <span style={{ fontVariant: "small-caps" }}>svglab</span>,
                    an open-source Python toolkit for the programmatic
                    manipulation of vector images in the Scalable Vector
                    Graphics (SVG) format.
                  </p>
                  <p>
                    The library provides robust functionality for parsing,
                    modifying, and writing SVG documents, offering comprehensive
                    support for features defined by the SVG specification.
                  </p>
                  <p>
                    Next, we conduct a survey of existing software in this
                    domain and demonstrate that our implementation matches or
                    exceeds the capabilities found in even the most feature-rich
                    libraries within the Python ecosystem while addressing some
                    of the common limitations found therein.
                  </p>
                  <p>
                    Finally, we suggest several possible directions for future
                    work in this area.
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
            }}
            type="Bachelor's degree"
          />
        </div>
      </div>
    </Section>
  );
}
