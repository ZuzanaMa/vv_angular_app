import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'transactionType',
})

export class TransactionTypePipe implements PipeTransform {

  transform(transactionType: number): string {
    switch (transactionType) {
      case 0: return 'DEBIT transaction';
      case 1: return 'ATM withdrawal';
      default: return '';
    }
  }

}

export interface ITransaction {
  transactionId: number;
  fullName: string;
  transactionType: number;
  accountNumber: string;
  bankCode: string;
  issueDate: string;
  amount: number;
}
