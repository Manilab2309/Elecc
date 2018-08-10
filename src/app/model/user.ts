export class User {

  ident: string;
  name: string;
  role: string;
  sign: string;


  // Constructor
  constructor(ident: string, sign: string) {
    this.ident = ident;
    this.sign = sign;
  }

  // Identification code user
  get setIdent(): string {
    return this.ident;
  }

  set getIdent(ident: string) {
    this.ident = ident;
  }

  // Sign user
  get setSign(): string {
    return this.sign;
  }

  set getSign(sign: string) {
    this.sign = sign;
  }

  // Name user
  get setName(): string {
    return this.name;
  }

  set getName(name: string) {
    this.name = name;
  }

  // Role user
  get setRole(): string {
    return this.role;
  }

  set getRole(role: string) {
    this.role = role;
  }

}
