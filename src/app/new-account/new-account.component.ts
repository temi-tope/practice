import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:  [LoggingService, AccountsService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // tslint:disable-next-line: no-unused-expression
    this.accountsService.addAcount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
