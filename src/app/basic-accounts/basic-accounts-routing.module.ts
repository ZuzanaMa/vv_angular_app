import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicAccountListComponent } from './basic-account-list/basic-account-list.component';
import { BasicAccountsDetailComponent } from './basic-accounts-detail/basic-accounts-detail.component';
import { BasicDetailComponent } from './basic-accounts-detail/basic-detail/basic-detail.component';
import { WithdrawalDetailComponent } from './basic-accounts-detail/withdrawal-detail/withdrawal-detail.component';
import { BasicAccountsModule } from './basic-accounts.module';

const routes: Routes = [
  {
    path: '',
    component: BasicAccountListComponent
    } ,

    {
      path: 'detail/:id',
      component: BasicAccountsDetailComponent
      },
      {
      path: 'basic-accounts-detail/basic-detail',
      component: BasicAccountsDetailComponent
      },
      {
        path: 'basic-accounts-detail/withdrawal-detail',
        component: WithdrawalDetailComponent
        },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicAccountsRoutingModule { }
