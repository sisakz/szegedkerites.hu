import { GraphQLClient, useQuery } from "graphql-hooks";
import { useMemo } from "react";

import { type StructuredTextGraphQlResponse } from "react-datocms";

export const datoClient = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: "Bearer d1f7aedd7e82544c026b44bcdb36d4",
  },
});

export type StaticContentType = {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  content: StructuredTextGraphQlResponse;
  image: {
    url: string;
  };
};

export type ReferenceCardType = {
  id: string;
  name: string;
  title: string;
  date: string;
  brand: {
    name: string;
  };
  fenceType: string;
  image: {
    url: string;
  };
};

const emptyContent: StaticContentType = {
  id: "",
  name: "",
  title: "",
  subtitle: "",
  content: { value: null },
  image: { url: "" },
};

export const useStaticContents = (name: string) => {
  const { loading, error, data } = useQuery(`
{
  allStaticContents {
    id
    name
    title
    subtitle
    content {value}
    image {url}
    _status
    _firstPublishedAt
  }
  _allStaticContentsMeta {
    count
  }
}
  `);

  const staticContents: StaticContentType[] = data?.allStaticContents;
  const contentRaw =
    staticContents?.find((content) => content.name === name) || emptyContent;
  const content = {
    name: contentRaw.name,
    title: contentRaw.title,
    subtitle: contentRaw.subtitle,
    content: contentRaw.content.value as StructuredTextGraphQlResponse,
    image: contentRaw.image?.url,
  };

  return {
    content,
    loading,
    error,
  };
};

export const useReferenceCards = () => {
  const { loading, error, data } = useQuery(`
{
	allReferences {
    id
    name
    title
    date
    brand{name}
    fenceType
    image {url}
  }
}
  `);

  const referenceCards = useMemo(() => {
    if (!data) return [];
    const allReferences: ReferenceCardType[] = data.allReferences || [];
    return allReferences
      .filter((referenceCard) => referenceCard.image !== null)
      .map((referenceCard) => ({
        name: referenceCard.title,
        image: referenceCard.image?.url,
        date: new Date(referenceCard.date).getFullYear().toString(),
        brand: referenceCard.brand?.name,
        fenceType: referenceCard.fenceType,
      }));
  }, [data]);
  console.log("rendering");
  return {
    referenceCards,
    loading,
    error,
  };
};

export const useBenefitCards = () => {
  const { content: benefitCardGarantiee } = useStaticContents(
    "benefit-card-garantiee"
  );
  const { content: benefitCardExperience } = useStaticContents(
    "benefit-card-experience"
  );
  const { content: benefitCardService } = useStaticContents(
    "benefit-card-service"
  );
  const benefitCards = [
    benefitCardExperience,
    benefitCardGarantiee,
    benefitCardService,
  ];

  return {
    benefitCards,
  };
};
