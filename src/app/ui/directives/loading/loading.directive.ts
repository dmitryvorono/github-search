import {
  ComponentFactory,
  ComponentFactoryResolver,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { LoadingComponent } from '../../components/loading/loading.component';

@Directive({
  selector: '[appLoading]',
})
export class LoadingDirective {
  loadingFactory: ComponentFactory<LoadingComponent>;

  @Input() set appLoading(loading: boolean | undefined | null) {
    this.vcRef.clear();
    if (loading) {
      this.vcRef.createComponent(this.loadingFactory);
    } else {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.loadingFactory =
      this.componentFactoryResolver.resolveComponentFactory(LoadingComponent);
  }
}
