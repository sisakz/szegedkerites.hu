import { GraphQLClient, useQuery } from "graphql-hooks";

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
  content: StructuredTextGraphQlResponse;
  image: {
    url: string;
  };
};

const emptyContent: StaticContentType = {
  id: "",
  name: "",
  title: "",
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
  const content =
    staticContents?.find((content) => content.name === name) || emptyContent;
  return {
    content: content,
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
  const benefitCardsRaw = [
    benefitCardExperience,
    benefitCardGarantiee,
    benefitCardService,
  ];

  const benefitCards = benefitCardsRaw.map((card) => ({
    name: card.name,
    title: card.title,
    content: card.content.value as StructuredTextGraphQlResponse,
    icon: card.image.url,
  }));

  return {
    benefitCards,
  };
};
