import { SafePipe } from './safe.pipe';
import {TestBed} from '@angular/core/testing';
import {DomSanitizer} from '@angular/platform-browser';

describe('SafePipe', () => {
  let pipe: SafePipe;
  let domSanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DomSanitizer
      ]
    });

    domSanitizer = TestBed.get(DomSanitizer);
  });

  it('create an instance', () => {
    pipe = new SafePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
