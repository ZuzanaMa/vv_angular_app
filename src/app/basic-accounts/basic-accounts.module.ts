import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAccountsRoutingModule } from './basic-accounts-routing.module';
import { BasicAccountListComponent } from './basic-account-list/basic-account-list.component';
import { BasicAccountsDetailComponent } from './basic-accounts-detail/basic-accounts-detail.component';
import { BasicDetailComponent } from './basic-accounts-detail/basic-detail/basic-detail.component';
import { WithdrawalDetailComponent } from './basic-accounts-detail/withdrawal-detail/withdrawal-detail.component';
import {MatTableModule} from '@angular/material/table';
import { TransactionTypePipe } from '../utils/pipes/transaction-type.pipe';

@NgModule({
  declarations: [
    BasicAccountListComponent,
    BasicAccountsDetailComponent,
    BasicDetailComponent,
    WithdrawalDetailComponent,
    TransactionTypePipe
  ],
  imports: [
    CommonModule,
    BasicAccountsRoutingModule,
    MatTableModule
  ]
})

export class BasicAccountsModule { }
