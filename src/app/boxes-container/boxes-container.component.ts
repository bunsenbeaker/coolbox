import { AfterContentInit, AfterViewInit, Component, ComponentFactoryResolver, ContentChildren, ElementRef, EmbeddedViewRef, OnInit, QueryList, Renderer2, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation, ViewRef } from '@angular/core';
import { CoolConnectedBoxDirective } from '../cool-connected-box.directive';

@Component({
  selector: 'app-boxes-container',
  templateUrl: './boxes-container.component.html',
  styleUrls: ['./boxes-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoxesContainerComponent implements AfterContentInit, AfterViewInit {

 @ContentChildren(CoolConnectedBoxDirective) boxes?: QueryList<CoolConnectedBoxDirective>;
 @ViewChild('boxesContainer', { read: ViewContainerRef}) boxesContainer?: ViewContainerRef;

 public boxesArray: CoolConnectedBoxDirective[] = [];

 constructor(private vcr: ViewContainerRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {

    if (this.boxesContainer) {

      const projectedViews: EmbeddedViewRef<any>[] =[];

      for (let i=0;i<this.boxesArray.length;i++) {

          projectedViews.push(this.boxesContainer.createEmbeddedView(this.boxesArray[i].template));

          this.renderer.addClass(projectedViews[i].rootNodes[0],'box');

          if (i) {

            this.renderer.appendChild(projectedViews[i-1].rootNodes[0],projectedViews[i].rootNodes[0]);

            if (i===this.boxesArray.length-1) {
              this.renderer.addClass(projectedViews[i].rootNodes[0],'last');
            }
            
          }else 
          {
            this.renderer.addClass(projectedViews[i].rootNodes[0],'first');

          }
      }

      this.renderer.appendChild(this.boxesContainer.element.nativeElement,projectedViews[0].rootNodes[0]);
    }
  }
  
 public ngAfterContentInit(): void {    
    if (this.boxes) {
      this.boxesArray = this.boxes.toArray();   
    }
 }
}
