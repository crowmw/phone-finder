import { api } from "./api";
import { PhoneId } from "./search";

interface DetailsResultDataDTO {
  brand: string;
  phone_name: string;
  thumbnail: string;
  phone_images: string[];
  release_date: string;
  dimension: string;
  os: string;
  storage: string;
  specifications: { title: string; specs: { key: string; val: string[] }[] }[];
}

interface DetailsResultDTO {
  status: boolean;
  data: DetailsResultDataDTO;
}

export interface PhoneDetails {
  brand: string;
  released: string;
  dimension: string;
  os: string;
  storage: string;
  battery: string;
  displayType: string;
  displaySize: string;
}

export const fetchDetails = async (id: PhoneId) => {
  const { data } = await api.get<DetailsResultDTO>(id);
  return Promise.resolve(mapDetailsResultDTO(id, data));
};

type Specification = Record<string, Record<string, string[]>>;

const mapDetailsResultDTO = (
  id: PhoneId,
  dto: DetailsResultDTO
): PhoneDetails => {
  const extractSpec = (specs: any[]) =>
    specs.reduce((acc, cur) => ({ ...acc, [cur.key]: cur.val }), {});

  const specs = dto.data.specifications.reduce<Specification>(
    (acc, cur) => ({
      ...acc,
      [cur.title]: extractSpec(cur.specs),
    }),
    {}
  );

  return {
    brand: dto.data.brand,
    released: dto.data.release_date,
    battery: specs.Battery?.Type?.[0] ?? "",
    dimension: specs.Body?.Dimensions?.[0] ?? "",
    os: dto.data.os,
    storage: specs.Memory?.Internal?.[0] ?? "",
    displaySize: specs.Display?.Size?.[0] ?? "",
    displayType: specs.Display?.Type?.[0] ?? "",
  };
};
