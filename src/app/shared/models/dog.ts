export enum DogLevel {
  New = 'Nowy',
  Begginer = 'Początkujący',
  Intermediate = 'Średniozaawansowany',
  Advanced = 'Zaawansowany',
  Expert = 'Ekspert'
}

export class DogBasicData {
  public id: number;
  public name: string;
  public breed: string;
  public dateOfBirth: Date;
  public level: DogLevel;
  public workmode: string;
  public notes: string;
  // TODO: add fields "photo" and "guideId"
}