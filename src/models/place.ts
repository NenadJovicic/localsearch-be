export enum OpeningHoursType {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

export interface OpeningHoursPerDayApi {
  start: string;
  end: string;
  type: OpeningHoursType;
}

export interface OpeningHoursApi {
  days: {
    monday: OpeningHoursPerDayApi[];
    tuesday: OpeningHoursPerDayApi[];
    wednesday: OpeningHoursPerDayApi[];
    thursday: OpeningHoursPerDayApi[];
    friday: OpeningHoursPerDayApi[];
    saturday: OpeningHoursPerDayApi[];
    sunday: OpeningHoursPerDayApi[];
  };
}

export interface PlaceApi {
  displayed_what: string;
  displayed_where: string;
  opening_hours: OpeningHoursApi;
}

export interface OpeningHoursDto {
  day: string;
  working_hours: {
    start?: string;
    end?: string;
    type: OpeningHoursType;
  }[];
}

export interface PlaceDto {
  name: string;
  address: string;
  opening_hours: OpeningHoursDto[];
}
