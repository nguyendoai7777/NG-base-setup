import { Directive, inject } from '@angular/core';
import { ShareService } from '@services/share.service';

@Directive({
  selector: '[parent]',
})
export class ParentDirective {
  ss = inject(ShareService);
  constructor() {}
}
