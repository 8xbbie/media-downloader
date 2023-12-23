import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkContainerComponent } from './link-container.component';

describe('LinkContainerComponent', () => {
  let component: LinkContainerComponent;
  let fixture: ComponentFixture<LinkContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
