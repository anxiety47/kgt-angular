import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Dog, DogLevel } from "@app/shared/models/dog";
import { Observable, of } from "rxjs";

@Injectable()
export class DogsApiService {
  constructor(private httpClient: HttpClient) {}

  public getAllDogs(): Observable<Dog[]> {
    // return this.httpClient.get<Dog[]>('TODO: ADRES_API')
    return of([{id: 1, name: 'Okruszek', breed: 'Owczarek niemiecki', dateOfBirth: new Date(), level: DogLevel.Expert, workmode: '', notes: 'notatki1'}]);
  }
}