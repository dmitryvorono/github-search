import { LoadingComponent } from './../../comp/loading/loading.component';
import {
  ComponentFactoryResolver,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { waitForAsync, TestBed } from '@angular/core/testing';
import { LoadingDirective } from './loading.directive';

describe('LoadingDirective', () => {
  let templateRefStub: Partial<TemplateRef<LoadingComponent>>;
  let vcRefStub: Partial<ViewContainerRef>;
  let componentFactoryResolverStub: Partial<ComponentFactoryResolver>;

  let directive;
  let templateRef;
  let vcRef;
  let componentFactoryResolver;
  beforeEach(
    waitForAsync(() => {
      templateRefStub = {};
      vcRefStub = {
        clear: jasmine.createSpy(),
        createComponent: jasmine.createSpy(),
        createEmbeddedView: jasmine.createSpy(),
      };
      componentFactoryResolverStub = {
        resolveComponentFactory: jasmine.createSpy(),
      };
      TestBed.configureTestingModule({
        declarations: [LoadingComponent, LoadingDirective],
        providers: [
          { provide: TemplateRef, useValue: templateRefStub },
          { provide: ViewContainerRef, useValue: vcRefStub },
          {
            provide: ComponentFactoryResolver,
            useValue: componentFactoryResolverStub,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    templateRef = TestBed.inject(TemplateRef);
    vcRef = TestBed.inject(ViewContainerRef);
    componentFactoryResolver = TestBed.inject(ComponentFactoryResolver);
    directive = new LoadingDirective(
      templateRef,
      vcRef,
      componentFactoryResolver
    );
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should initialize loadingFactory', () => {
    expect(
      componentFactoryResolver.resolveComponentFactory
    ).toHaveBeenCalledWith(LoadingComponent);
  });

  describe('when set the appLoading to true', () => {
    beforeEach(() => {
      directive.appLoading = true;
    });
    it('should clear the view container', () => {
      expect(vcRef.clear).toHaveBeenCalledTimes(1);
    });

    it('should create Loading Component and add it to the view container', () => {
      expect(vcRef.createComponent).toHaveBeenCalledWith(directive.loadingFactory);
    });
  });

  describe('when set the appLoading to false', () => {
    beforeEach(() => {
      directive.appLoading = false;
    });
    it('should clear the view container', () => {
      expect(vcRef.clear).toHaveBeenCalledTimes(1);
    });
    it('should embed the contents of the host template', () => {
      expect(vcRef.createEmbeddedView).toHaveBeenCalledWith(templateRef);
    });
  });

});
