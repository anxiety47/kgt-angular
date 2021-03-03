export enum DogLevel {
  New = 'Nowy',
  Begginer = 'Początkujący',
  Intermediate = 'Średniozaawansowany',
  Advanced = 'Zaawansowany',
  Expert = 'Ekspert'
}

export interface DogBasicData {
  id: number;
  name: string;
  breed: string;
  // TODO: add field "photo"
  // Consider adding guideId
  guideName: string;
}

export class Dog implements DogBasicData {
  public id: number;
  public name: string;
  public breed: string;
  public guideName: string;
  public dateOfBirth: Date;
  public level: DogLevel;
  public workmode: string;
  public notes: string;
}