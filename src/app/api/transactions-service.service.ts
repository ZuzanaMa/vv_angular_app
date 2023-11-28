import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ITransaction {
  transactionId: number;
  fullName: string;
  transactionType: number;
  accountNumber: string;
  bankCode: string;
  issueDate: string;
  amount: number;
}


@Injectable({
  providedIn: 'root'
})
export class TransactionsServiceService {

  /** GET heroes from the server */
  constructor(private httpClient: HttpClient){}
  getTransactions$(){
    return this.httpClient.get<ITransaction[]>("/api/transaction");
  }

  getTransactionDetailId$(id: string){
    return this.httpClient.get<ITransaction>(`/api/transaction/${id}`);
  }
}


