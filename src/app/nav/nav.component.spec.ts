import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { NavComponent } from './nav.component';
import { AuthService } from '../services/auth.service';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let mockAuthService = {
    isAuthenticated: () => false
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        { provide: AuthService, useValue: mockAuthService }
      ],
      imports:[RouterModule.forRoot([])] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('When signed out', () => {
    it('should display signin and signup links', () => {
      expect(fixture.nativeElement.textContent).toContain('Signin');
      expect(fixture.nativeElement.textContent).toContain('Signup');
    })
    
    it('should not display signout and profile links', () => {
      expect(fixture.nativeElement.textContent).not.toContain('Profile');
      expect(fixture.nativeElement.textContent).not.toContain('Signout');
    })
  })

  describe('When signed in', () => {
    xit('should display signout and profile links', () => {
      expect(fixture.nativeElement.textContent).toContain('Profile');
      expect(fixture.nativeElement.textContent).toContain('Signout');
    })

    xit('should not display signin and signup links', () => {
      expect(fixture.nativeElement.textContent).not.toContain('Signin');
      expect(fixture.nativeElement.textContent).not.toContain('Signup');
    })
  })
});
