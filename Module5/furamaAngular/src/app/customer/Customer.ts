import {CustomerType} from './CustomerType';

export interface Customer {
  id?: string;
  customerType?: CustomerType;
  name?: string;
  birthday?: string;
  gender?: boolean;
  idCard?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  flagDelete?: false;
}
