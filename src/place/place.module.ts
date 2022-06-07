import { Module } from '@nestjs/common';
import { DataModule } from '../api-data/data.module';
import { PlaceController } from './place.controller';
import { PlaceConverter } from './place.converter';
import { PlaceService } from './place.service';

@Module({
  imports: [DataModule],
  controllers: [PlaceController],
  providers: [PlaceService, PlaceConverter],
})
export class PlaceModule {}
