export class AuthModel{

    user_id!: number;
    name!: String;
    email!: String;
    passwd!: String;
    credit!: number;
    exp!: number;
    iat!: number;
    jti!: String;
    token_type!: String;
  
    constructor(
      user_id?: number,
      name?: String,
      email?: String,
      passwd?: String,
      credit?: number,
      exp?: number,
      iat?: number,
      jti?: String,
      token_type?: String){
  
      user_id=this.user_id;
      name=this.name;
      email=this.email;
      passwd=this.passwd;
      credit=this.credit;
      exp=this.exp;
      iat=this.iat;
      jti=this.jti;
      token_type=this.token_type;
    }
  
  
  }
  