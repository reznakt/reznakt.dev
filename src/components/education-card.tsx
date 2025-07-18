import { formatDate, stripUrl } from "@/lib/utils";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
  Tooltip,
} from "@heroui/react";
import React from "react";
import { FaAward, FaBookOpen, FaFlask, FaGraduationCap } from "react-icons/fa6";
import { CollapsibleText } from "./collapsible-text";
import { SocialLink, SocialLinkProps } from "./social-link";

export interface EducationCardProps {
  endDate?: Date;
  institution: {
    logo: React.ComponentType<{ className: string }>;
    name: string;
    url: string;
  };
  program: string;
  specialization?: string;
  startDate: Date;
  thesis?: {
    abstract: React.ReactNode;
    award: boolean;
    keywords?: string[];
    links: SocialLinkProps[];
    title: string;
  };
  type: string;
}

export function EducationCard({
  endDate,
  institution,
  program,
  specialization,
  startDate,
  thesis,
  type,
}: EducationCardProps): React.ReactElement {
  const Logo = institution.logo;

  if (endDate && endDate <= startDate) {
    throw new Error("End date must be after start date.");
  }

  return (
    <Card className="w-xl" isBlurred>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Logo className="w-auto h-20" />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">{type}</h2>
              {!endDate && <Chip size="sm">Ongoing</Chip>}
            </div>
            <p className="text-sm text-muted-foreground">{institution.name}</p>
            <p className="text-sm text-muted-foreground">{`${formatDate(startDate)} - ${endDate ? formatDate(endDate) : "present"}`}</p>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="space-y-4 p-6">
        <div>
          <h3 className="font-semibold flex items-center gap-2">
            <FaGraduationCap />
            Program
          </h3>
          {program}
        </div>
        {specialization && (
          <div>
            <h3 className="font-semibold flex items-center gap-2">
              <FaFlask />
              Specialization
            </h3>
            {specialization}
          </div>
        )}
        {thesis && (
          <div className="space-y-0">
            <h3 className="font-semibold flex items-center gap-2">
              <FaBookOpen />
              Thesis
            </h3>
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">{thesis.title}</h4>
                <Tooltip
                  content={
                    <div className="p-2 flex items-center gap-2">
                      <FaAward color="gold" />
                      Dean's Award for an Outstanding Final Thesis
                    </div>
                  }
                >
                  <Chip variant="faded">
                    <FaAward className="inline" color="gold" /> Dean's Award
                  </Chip>
                </Tooltip>
              </div>
              <CollapsibleText className="text-sm text-muted-foreground">
                {thesis.abstract}
              </CollapsibleText>
              {thesis.keywords && thesis.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {thesis.keywords.map((keyword) => (
                    <Chip key={keyword} size="sm">
                      {keyword}
                    </Chip>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-between items-center">
        <Link
          className="text-sm"
          href={institution.url}
          isExternal
          showAnchorIcon
        >
          {stripUrl(institution.url)}
        </Link>
        {thesis && (
          <div className="flex items-center gap-2">
            {thesis.links.map(
              ({ description, icon: Icon, serviceName, url }) => (
                <SocialLink
                  description={description}
                  icon={Icon}
                  key={url}
                  serviceName={serviceName}
                  url={url}
                />
              ),
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
