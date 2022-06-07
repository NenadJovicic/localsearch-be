import { Controller, Get, Param } from '@nestjs/common';
import { PlaceService } from './place.service';

@Controller('places')
export class PlaceController {
  constructor(private readonly appService: PlaceService) {}

  @Get(':id')
  getPlaceById(@Param('id') id: string): Promise<any> {
    return this.appService.getPlaceById(id);
  }
}
