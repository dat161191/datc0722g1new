import {Country} from './Country';

export interface Register {
  email?: string,
  password?:string,
  confirmPassword?: string,
  country?: Country,
  age?: number,
  gender?: boolean,
  phone?: string,
}
