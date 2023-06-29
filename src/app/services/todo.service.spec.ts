import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

// client
// pm 1
// experience (senior developer) (1) lead : technical lead 5 years
// experience (junior developer) (1) 3 years of experience
// (1) 2 years of experience or less
// experience (frontend developer) (80%)
// experience (backend developer) (80%)


function getFirstName(user) {
  if (!user || !user.name) {
    return '';
  }
  return user.name.split(' ')[0];
}

function testFirstName() {
  const user = {
    name: 'John Doe'
  };
  let firstName = getFirstName(user);
  let pass = firstName === 'John';
  console.log(pass);

  firstName = getFirstName(null);
  pass = firstName === '';
  console.log(pass);

  firstName = getFirstName({});
  pass = firstName === '';
  console.log(pass);

  firstName = getFirstName({name: ''});
  pass = firstName === '';
  console.log(pass);

}

testFirstName();
