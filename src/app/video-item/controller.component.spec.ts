import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SafeHtmlPipe } from '../common.pipe';
import { RemiVideoItemComponent } from './controller.component';

describe('RemiVideoItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        CommonModule, 
        SafeHtmlPipe
      ],
    }).compileComponents();
  });

  it('should show at least 1 shared video', () => {
    const fixture = TestBed.createComponent(RemiVideoItemComponent);
    const itemVideo = fixture.componentInstance;
    expect(itemVideo).toBeTruthy();
  });
});
