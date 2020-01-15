import {Component, OnInit} from '@angular/core';
import {Person} from '../../shared/interfaces/person';
import {TreeNode} from '../../shared/interfaces/treenode';
import {NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';
import {PersonService} from '../../shared/services/person.service';

@Component({
  selector: 'ngx-list-perso',
  templateUrl: './list-perso.component.html',
  styleUrls: ['./list-perso.component.scss',
    '../tab-office/tab-office.component.scss',
    '../list-office/list-office.component.scss'],
})
export class ListPersoComponent implements OnInit {
  private data: TreeNode<Person>[];
  private fetchedData: Person[];
  private departments: string[];
  private teams: string[][];
  private _status: string[];
  customColumn = 'lastname';
  defaultColumns = [ 'firstname', 'statusName', 'teamName', 'departmentName', 'officeName' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];
  dataSource: NbTreeGridDataSource<Person>;
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;


  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<Person>, private peopleService: PersonService) {
    this.departments = [];
    this.teams = [];
    this.data = [];
  }

  ngOnInit() {
    this.peopleService.fecth().subscribe(k => this.asyncInit(k));
  }

  asyncInit(people: Person[]) {
    this.fetchedData = people;
    this.fetchedData.forEach(k => this.data[this.fetchedData.indexOf(k)] = this.treeNodeConversion(k));
    this.dataSource = this.dataSourceBuilder.create(this.data);
    this.dataSorting(people);
  }

  dataSorting(people: Person[]): void {
    this.departments = Array.from(people, k => k.departmentName).filter(this.onlyUnique);
    this.departments.forEach(k => this.teams[this.departments.indexOf(k)] = []);
    this.departments.forEach(k => this.teams[this.departments.indexOf(k)] =
        Array.from(people.filter(p => p.departmentName === k), j => j.teamName).filter(this.onlyUnique));
    this._status = Array.from(people, k => k.statusName).filter(this.onlyUnique);
  }

  treeNodeConversion(input: Person): TreeNode<Person> {
    return {data: input};
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    return (this.sortColumn === column) ? this.sortDirection : NbSortDirection.NONE;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  office(id: number): string {
    // TODO: FIX THIS
    return 'Not yet';
  }

  setFilter(s: string) {
    this.dataSource.filter(s);
  }

  get status(): string[] {
    return this._status;
  }
}

