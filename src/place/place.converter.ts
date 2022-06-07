import { Injectable } from '@nestjs/common';
import {
  OpeningHoursApi,
  OpeningHoursDto,
  OpeningHoursPerDayApi,
  OpeningHoursType,
  PlaceApi,
  PlaceDto,
} from '../models/place';

@Injectable()
export class PlaceConverter {
  convertToPlaceDto(data: PlaceApi): PlaceDto {
    return {
      name: data.displayed_what,
      address: data.displayed_where,
      opening_hours: this.getOpeningHours(data.opening_hours),
    };
  }

  private getOpeningHours(openingHours: OpeningHoursApi): OpeningHoursDto[] {
    const daysOrdered = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ];
    return daysOrdered.map((day) => {
      const currentDayOpeningHours: OpeningHoursPerDayApi[] =
        openingHours.days[day];
      if (currentDayOpeningHours) {
        return { day, working_hours: currentDayOpeningHours };
      }
      return { day, working_hours: [{ type: OpeningHoursType.CLOSED }] };
    });
  }
}
