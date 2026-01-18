import { TestBed } from '@angular/core/testing';

import { MyBook } from './my-book.service';

describe('MyBook', () => {
  let service: MyBook;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyBook);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
