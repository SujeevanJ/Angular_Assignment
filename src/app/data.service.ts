import { Injectable } from '@angular/core';
import { BehaviorSubject, AsyncSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // BehaviorSubject - holds current value and emits it to new subscribers
  private userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();

  // AsyncSubject - emits last value when complete
  private asyncDataSubject = new AsyncSubject<any>();
  asyncData$ = this.asyncDataSubject.asObservable();

  // ReplaySubject - replays previous values to new subscribers
  private replayDataSubject = new ReplaySubject<any>(2); // replay last 2 values
  replayData$ = this.replayDataSubject.asObservable();

  constructor() { }

  // send data using BehaviorSubject
  sendUserData(data: any) {
    this.userDataSubject.next(data);
  }

  // get data from BehaviorSubject
  getUserData() {
    return this.userData$;
  }

  // send data using AsyncSubject
  sendAsyncData(data: any) {
    this.asyncDataSubject.next(data);
    this.asyncDataSubject.complete();
  }

  // get data from AsyncSubject
  getAsyncData() {
    return this.asyncData$;
  }

  // send data using ReplaySubject
  sendReplayData(data: any) {
    this.replayDataSubject.next(data);
  }

  // get data from ReplaySubject
  getReplayData() {
    return this.replayData$;
  }
}
