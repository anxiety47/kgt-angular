import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Dog } from "@app/shared/models/dog";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class DogsApiService {
  constructor(private httpClient: HttpClient) {}

  public getAllDogs(): Observable<Dog[]> {
    return this.httpClient.get<Dog[]>(`${environment.apiUrl}/dogs`);
  }
}