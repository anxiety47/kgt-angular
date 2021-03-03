import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DogBasicData } from "@app/shared/models/dog";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class DogsApiService {
  constructor(private httpClient: HttpClient) {}

  public getAllDogs(): Observable<DogBasicData[]> {
    return this.httpClient.get<DogBasicData[]>(`${environment.apiUrl}/dogs`);
  }
}