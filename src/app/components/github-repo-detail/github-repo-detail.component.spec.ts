import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoDetailComponent } from './github-repo-detail.component';

describe('GithubRepoDetailComponent', () => {
  let component: GithubRepoDetailComponent;
  let fixture: ComponentFixture<GithubRepoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubRepoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
