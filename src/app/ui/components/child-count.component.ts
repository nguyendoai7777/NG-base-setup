import { Component, inject, OnInit } from '@angular/core';
import { ShareService } from '@services/share.service';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'child-counter',
  template: `
    <p>ChildComponent</p>
    <button (click)="test()">test api</button>
    <button (click)="withoutAuth()">Without Auth</button>
    <ng-template [ngIf]="isNon">
      <p>tada</p>
    </ng-template>
    <!-- <p>Child Timer: {{ ss.polling$ | async }}</p> -->
  `,
  imports: [NgIf],
  standalone: true,
})
export class ChildCounterComponent implements OnInit {
  isNon = true;
  http = inject(HttpClient);
  ngOnInit() {}
  withoutAuth() {
    this.http.get('non-auth').subscribe((l) => {
      console.log('success');
    });
  }
  test() {
    this.http.get('/api/dev').subscribe((l) => {
      console.log('success');
    });
  }

  // ss = inject(ShareService);
}
