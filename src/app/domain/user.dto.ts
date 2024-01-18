export class UserDto {
  name?: string;
  lastname?: string;
  age?: number;
  gender?: string;
  birthdate?: string;
  picture?: Blob;
  familyQuota?: number;
  userQuota?: number;// from 0 to 100 or more if overloaded
  family?: UserDto[]; // user: prenom, photo, dateNaissance, quota, genre, 
  invoices?: Invoice[];
  city?: City;

  getChildrenTileText() {
    var count = 0;
    for(var fam of this.family!) {
      if(fam.age! <18) {
        count++;
      }
    }
    if(count == 0) {
      return "aucun enfant";
    } else if(count == 1) {
      return "1 enfant";
    } else {
      return count+" enfants";
    }
  }

  isFamilyNumberQuotaReached() {
    for(var fam of this.family!) {
      if(fam.userQuota! >=90) {
        return true;
      }
    }
    return false;
  }

  familyStatus() {
    if(this.age! > 18) {
      return "enfant";
    } else if(this.age! > 64) {
      return "grand-parent";
    } else {
      return "parent";
    }
  }

  

}

export class City {
  quota?: number;
  punishments?: string[];
  punishmentsSoon?: string[];

  constructor(quota: number, punishments: string[],punishmentsSoon: string[]) {
    this.quota = quota;
    this.punishments = punishments;
    this.punishmentsSoon = punishmentsSoon;
  }
}

export class Invoice {
  label?: string;
  date?: string;
  productPrice?: number;
  quota?: number;

  constructor(label: string, date: string, productPrice: number, quota: number) {
    this.label= label;
    this.date = date;
    this.productPrice = productPrice;
    this.quota = quota;
  }

  quotaColor() {
    if(this.quota! < 0) {
      return "transac__credit  transac--positif";
    } else {
      return "transac__credit transac--negatif";
    }
  }

  quotaFormatted() {
    if(this.quota! < 0) {
      return this.quota;
    } else {
      return "+"+this.quota;
    }
  }
}
