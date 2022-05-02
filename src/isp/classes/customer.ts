import {
  IndividualCustomerProtocol,
  EntrerpriseCustomerProtocol,
} from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
  fristName: string;
  lastName: string;
  cpf: string;
  cnpj: string;

  constructor(fristName: string, lastName: string, cpf: string) {
    this.fristName = fristName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cnpj = '';
  }
}

export class EnterpriseCustomer implements EntrerpriseCustomerProtocol {
  name: string;
  cnpj: string;
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
