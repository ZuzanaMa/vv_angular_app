import { Component } from '@angular/core';
import { ITransaction, TransactionsServiceService } from 'src/app/api/transactions-service.service';
import {MatTableModule} from '@angular/material/table';
import { TransactionTypePipe } from 'src/app/utils/pipes/transaction-type.pipe';


// interface ITransaction {
//   transactionId: number;
//   fullName: string;
//   transactionType: number;
//   accountNumber: string;
//   bankCode: string;
//   issueDate: string;
//   amount: number;
// }


// /**
//  * @title Basic use of `<table mat-table>`
//  */
// @Component({
//   selector: 'table-basic-example',
//   styleUrls: ['table-basic-example.css'],
//   templateUrl: 'table-basic-example.html',
//   standalone: true,
//   imports: [MatTableModule],
// })


// export class BasicAccountListComponent {
// public transactionList: ITransaction[] = [];
// displayedColumns: string[] = ['fullName'];

//   constructor(private transactionService: TransactionsServiceService ){
//     this.transactionService.getTransactions$().subscribe((response) => {  
//       this.transactionList = response.data;
//       console.log(response.data);
//     }) 
//   }
// }




@Component({
  selector: 'app-basic-account-list',
  templateUrl: './basic-account-list.component.html',
  styleUrls: ['./basic-account-list.component.css'],
  // standalone: true,
  // imports: [MatTableModule],
})
export class BasicAccountListComponent {
public transactionList: ITransaction[] = [];
displayedColumns: string[] = ['fullName', 'transactionType', 'issueDate', 'amount', 'transactionId'];

  constructor(private transactionService: TransactionsServiceService ){
    this.transactionService.getTransactions$().subscribe((response) => {
      this.transactionList = response.data;
      console.log(response.data);
    }) 
  }
}


