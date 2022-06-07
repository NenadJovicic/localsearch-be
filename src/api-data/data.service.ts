import { HttpService } from '@nestjs/axios';
import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';
import { PlaceApi } from '../models/place';

@Injectable()
export class DataService {
  private baseUrl = 'https://storage.googleapis.com/coding-session-rest-api/';

  constructor(private readonly httpService: HttpService) {}

  async getPlaceById(id: string): Promise<PlaceApi> {
    const requestAsObservable = this.httpService.get(this.baseUrl + id);
    try {
      const response: AxiosResponse = await lastValueFrom(requestAsObservable);
      return response.data;
    } catch (error) {
      if ((error as AxiosResponse).status === HttpStatus.NOT_FOUND) {
        throw new NotFoundException(null, 'Requested place not found');
      }
      throw new InternalServerErrorException(error);
    }
  }
}
