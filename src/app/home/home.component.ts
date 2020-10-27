import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    // this.authService.user.subscribe((user) => {
    //   this.isAuthenticated = user != null ? true : false;
    // });

    this.subscription = this.store
      .select('auth')
      .pipe(map((authState) => authState.user))
      .subscribe((user) => {
        this.isAuthenticated = !!user;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
