import { Injectable } from '@angular/core';
import { SpeedTest } from './speedtest';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class SpeedtestService {
  private api_url = environment.api_url;

  constructor(private http: HttpClient) { }

  getSpeedtests() {

    return this.http.get<SpeedTest>(this.api_url + 'test').toPromise();

  }

}
