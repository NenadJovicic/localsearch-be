import { Injectable } from '@nestjs/common';
import { DataService } from '../api-data/data.service';
import { PlaceDto } from '../models/place';
import { PlaceConverter } from './place.converter';

@Injectable()
export class PlaceService {
  constructor(
    private readonly dataService: DataService,
    private readonly converter: PlaceConverter,
  ) {}

  async getPlaceById(id: string): Promise<PlaceDto> {
    const place = await this.dataService.getPlaceById(id);
    return this.converter.convertToPlaceDto(place);
  }
}
