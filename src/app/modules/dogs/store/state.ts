import { Dog, DogLevel } from "@app/shared/models/dog";

export interface DogsState {
  dogs: Dog[];
  ongoingActions: string[];
}

export const initialDogState: DogsState = {
  dogs: [
    {id: 1, name: 'Puszek', breed: 'Owczarek niemiecki', dateOfBirth: new Date(), level: DogLevel.Expert, workmode: '', notes: 'notatki1'},
    {id: 2, name: 'Azor', breed: 'Golden retriever', dateOfBirth: new Date(), level: DogLevel.Advanced, workmode: '', notes: 'notatki2'},
    {id: 3, name: 'Reks', breed: 'Labrador', dateOfBirth: new Date(), level: DogLevel.New, workmode: '', notes: 'notatki3'},
    {id: 4, name: 'Alex', breed: 'Bernardyn', dateOfBirth: new Date(), level: DogLevel.Intermediate, workmode: '', notes: 'notatki4'},
    {id: 5, name: 'Max', breed: 'Jamnik', dateOfBirth: new Date(), level: DogLevel.Begginer, workmode: '', notes: 'notatki5'},
    {id: 6, name: 'Pimpek', breed: 'Wyżeł', dateOfBirth: new Date(), level: DogLevel.Intermediate, workmode: '', notes: 'notatki6'}
  ],
  ongoingActions: []
}