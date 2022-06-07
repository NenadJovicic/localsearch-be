import { Module } from '@nestjs/common';
import { DataModule } from './api-data/data.module';
import { PlaceModule } from './place/place.module';

@Module({
  imports: [PlaceModule, DataModule],
})
export class AppModule {}
