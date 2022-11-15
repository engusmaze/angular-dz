import { Component, Input } from '@angular/core';

@Component({
  selector: 'fio-component',
  templateUrl: './fio.component.html',
})
export class FioComponent {
  @Input('name') name = '';
  @Input('surname') surname = '';
  @Input('birthday') birthday = '';
  @Input('phone') phone = '';
  @Input('address') address = '';
  @Input('desired-salary') desiredSalary = 0;
  @Input('skills') skills: string[] = [];
}
