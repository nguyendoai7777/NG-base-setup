import { Directive, inject } from '@angular/core';
import { ShareService } from '@services/share.service';

@Directive({
  selector: '[child]',
  providers: [ShareService],
})
export class ChildDirective {
  ss = inject(ShareService, { host: true });
  constructor() {}
}
