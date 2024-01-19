export class UserDto {
  name?: string = ""
  lastname?: string = ""
  age?: number = 0
  gender?: string = ""
  birthdate?: string = ""
  picture?: Blob;
  familyQuota?: number = 0
  personalQuota?: number = 0// from 0 to 100 or more if overloaded
  familyMembers?: UserDto[] = [] // user: prenom, photo, dateNaissance, quota, genre, 
  invoices?: Invoice[] = []
  city?: City = new City;
}

export class City {
  quota?: number;
  punishments?: string[];
  punishmentsSoon?: string[];



  constructor(quota: number = 0, punishments: string[] = [],punishmentsSoon: string[] = []) {
    this.quota = quota;
    this.punishments = punishments;
    this.punishmentsSoon = punishmentsSoon;
  }
}

export class Invoice {
  productQualifier?: string;
  date?: string;
  productPrice?: number;
  quota?: number;

  constructor(productQualifier: string, date: string, productPrice: number, quota: number) {
    this.productQualifier= productQualifier;
    this.date = date;
    this.productPrice = productPrice;
    this.quota = quota;
  }
}


export class Action {
  id: number;
  label: string;
  quota: number;
  tigName: string;

  constructor(id: number, label: string, quota: number, tigName : string) {
    this.id = id;
    this.label = label;
    this.quota = quota;
    this.tigName = tigName;
  }
}