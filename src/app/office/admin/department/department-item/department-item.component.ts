import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Department} from '../../../shared/interfaces/department';

@Component({
  selector: 'ngx-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.scss'],
})
export class DepartmentItemComponent implements OnInit {
  private _mode: string;
  private _department: Department;
  private _delete$: EventEmitter<number>;
  private _update$: EventEmitter<Department>;

  constructor() {
    this._mode = 'vue';
    this._delete$ = new EventEmitter<number>();
    this._update$ = new EventEmitter<Department>();
  }

  ngOnInit() {
  }

  @Input()
  set department(department: Department) {
    this._department = department;
  }

  @Output('delete')
  get delete$() {
    return this._delete$;
  }

  @Output('update')
  get update$() {
    return this._update$;
  }

  get department(): Department {
    return this._department;
  }

  get mode(): string {
    return this._mode;
  }

  editMode(): void {
    this._mode = 'edit';
  }

  update(val: string): void {
    if (val.trim() !== '' && val !== this._department.name) {
      this._department.name = val;
      this._update$.emit(this._department);
    }
    this._mode = 'vue';
  }

  cancel(): void {
    this._mode = 'vue';
  }

  delete(): void {
    this._delete$.emit(this._department.id);
  }
}
