import { api } from "./api";

interface PhoneDTO {
  brand: string;
  phone_name: string;
  slug: string;
  image: string;
  detail: string;
}

interface SearchResultDTO {
  data: {
    title: string;
    phones: PhoneDTO[];
  };
  status: boolean;
}

export type PhoneId = string;

export interface Phone {
  id: PhoneId;
  name: string;
  brand: string;
  imageUrl: string;
}

export type SearchResult = Record<PhoneId, Phone>;

export const fetchSearchResult = async (query: string) => {
  const url = `search`;
  const { data } = await api.get<SearchResultDTO>(url, {
    params: {
      query,
    },
  });
  return mapSearchResultDTO(data);
};

const mapSearchResultDTO = (dto: SearchResultDTO): SearchResult =>
  dto.data.phones.reduce<SearchResult>(
    (acc, p) => ({
      ...acc,
      [p.slug]: {
        id: p.slug,
        name: p.phone_name,
        brand: p.brand,
        imageUrl: p.image,
      },
    }),
    {}
  );
