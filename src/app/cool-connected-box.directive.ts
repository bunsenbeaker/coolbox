import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[coolConnectedBox]'
})
export class CoolConnectedBoxDirective {

  constructor(public template: TemplateRef<any>, public view: ViewContainerRef) { }

}
