// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-basic-accounts-detail',
//   templateUrl: './basic-accounts-detail.component.html',
//   styleUrls: ['./basic-accounts-detail.component.css']
// })
// export class BasicAccountsDetailComponent{
//   private routeSub: Subscription;
// constructor(private route: ActivatedRoute) { }

//   ngOnInit() {
//     this.routeSub = this.route.params.subscribe(params => {
//       console.log(params) //log the entire params object
//       console.log(params['id']) //log the value of id
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITransaction, TransactionsServiceService } from 'src/app/api/transactions-service.service';

@Component({
  selector: 'app-basic-accounts-detail',
  templateUrl: './basic-accounts-detail.component.html',
  styleUrls: ['./basic-accounts-detail.component.css']
})
export class BasicAccountsDetailComponent {
  // id: string;
  public transactionData?: ITransaction;

  constructor(private transactionService: TransactionsServiceService, private route: ActivatedRoute) { 
      this.route.params.subscribe((params)=>{
        const transactionId = params['id'];

        this.transactionService.getTransactionDetailId$(transactionId).subscribe((response)=>{
          this.transactionData = response.data;
        })
      })
   }

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     console.log(params['id'])
  //   });
  // }
}
