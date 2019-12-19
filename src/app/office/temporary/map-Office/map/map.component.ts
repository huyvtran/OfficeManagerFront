import {Component, Input, OnInit} from '@angular/core';
import {OfficeDetail} from '../../../shared/interfaces/officeDetail';
import {DetailOfficeComponent} from '../../detail-office/detail-office.component';
import {NbWindowService} from '@nebular/theme';
import {OfficeDetailService} from '../../../shared/services/office-detail.service';


@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})


export class MapComponent implements OnInit {
  private _stateFilter: string;
  office: OfficeDetail[];
  constructor(private windowService: NbWindowService,
              private serviceOfficeD: OfficeDetailService) {
    this.office = [
  //     {
  //       id : 1,
  //       size: 2,
  //       floor: 0,
  //       num: 3,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       id : 2,
  //       size: 2,
  //       floor: 0,
  //       num: 5,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       id : 3,
  //       size: 0,
  //       floor: 0,
  //       num: 8,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       id : 4,
  //       size: 2,
  //       floor: 0,
  //       num: 10,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       id : 5,
  //       size: 2,
  //       floor: 0,
  //       num: 20,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       id : 6,
  //       size: 2,
  //       floor: 0,
  //       num: 21,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       id : 7,
  //       size: 2,
  //       floor: 0,
  //       num: 22,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       id : 9,
  //       size: 3,
  //       floor: 0,
  //       num: 23,
  //       building: 'C',
  //       occupation: 3,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       id : 10,
  //       size: 2,
  //       floor: 0,
  //       num: 24,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 11,
  //       size: 2,
  //       floor: 0,
  //       num: 25,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 12,
  //       size: 5,
  //       floor: 0,
  //       num: 26,
  //       building: 'C',
  //       occupation: 3,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },    {
  //       _id : 13,
  //       size: 2,
  //       floor: 0,
  //       num: 27,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 14,
  //       size: 2,
  //       floor: 0,
  //       num: 30,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 15,
  //       size: 2,
  //       floor: 0,
  //       num: 31,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 16,
  //       size: 2,
  //       floor: 0,
  //       num: 32,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 17,
  //       size: 2,
  //       floor: 0,
  //       num: 33,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 18,
  //       size: 3,
  //       floor: 0,
  //       num: 34,
  //       building: 'C',
  //       occupation: 3,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 18,
  //       size: 2,
  //       floor: 0,
  //       num: 35,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: true,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 19,
  //       size: 1,
  //       floor: 0,
  //       num: 36,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 20,
  //       size: 2,
  //       floor: 0,
  //       num: 37,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: true,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 21,
  //       size: 2,
  //       floor: 0,
  //       num: 40,
  //       building: 'C',
  //       occupation: 3,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },    {
  //       _id : 22,
  //       size: 2,
  //       floor: 0,
  //       num: 41,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 23,
  //       size: 2,
  //       floor: 0,
  //       num: 42,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 24,
  //       size: 2,
  //       floor: 0,
  //       num: 43,
  //       building: 'C',
  //       occupation: 3,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 25,
  //       size: 2,
  //       floor: 0,
  //       num: 44,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 26,
  //       size: 2,
  //       floor: 0,
  //       num: 45,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 27,
  //       size: 2,
  //       floor: 0,
  //       num: 46,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 28,
  //       size: 2,
  //       floor: 0,
  //       num: 47,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 29,
  //       size: 2,
  //       floor: 1,
  //       num: 3,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 30,
  //       size: 2,
  //       floor: 1,
  //       num: 4,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 31,
  //       size: 0,
  //       floor: 1,
  //       num: 6,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 32,
  //       size: 2,
  //       floor: 1,
  //       num: 7,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 33,
  //       size: 2,
  //       floor: 1,
  //       num: 20,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 34,
  //       size: 2,
  //       floor: 1,
  //       num: 21,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 35,
  //       size: 2,
  //       floor: 1,
  //       num: 22,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 37,
  //       size: 3,
  //       floor: 1,
  //       num: 23,
  //       building: 'C',
  //       occupation: 3,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 38,
  //       size: 2,
  //       floor: 1,
  //       num: 24,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 39,
  //       size: 2,
  //       floor: 1,
  //       num: 25,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 40,
  //       size: 5,
  //       floor: 1,
  //       num: 26,
  //       building: 'C',
  //       occupation: 3,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },    {
  //       _id : 41,
  //       size: 2,
  //       floor: 1,
  //       num: 27,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 42,
  //       size: 2,
  //       floor: 1,
  //       num: 30,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 43,
  //       size: 2,
  //       floor: 1,
  //       num: 31,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 44,
  //       size: 2,
  //       floor: 1,
  //       num: 32,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 45,
  //       size: 2,
  //       floor: 1,
  //       num: 33,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 46,
  //       size: 3,
  //       floor: 1,
  //       num: 34,
  //       building: 'C',
  //       occupation: 3,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 47,
  //       size: 2,
  //       floor: 1,
  //       num: 35,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: true,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 48,
  //       size: 1,
  //       floor: 1,
  //       num: 36,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 49,
  //       size: 2,
  //       floor: 1,
  //       num: 37,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: true,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 50,
  //       size: 2,
  //       floor: 1,
  //       num: 40,
  //       building: 'C',
  //       occupation: 3,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },    {
  //       _id : 51,
  //       size: 2,
  //       floor: 1,
  //       num: 41,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 52,
  //       size: 2,
  //       floor: 1,
  //       num: 42,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 53,
  //       size: 2,
  //       floor: 1,
  //       num: 43,
  //       building: 'C',
  //       occupation: 3,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 54,
  //       size: 2,
  //       floor: 1,
  //       num: 44,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 55,
  //       size: 2,
  //       floor: 1,
  //       num: 45,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 56,
  //       size: 2,
  //       floor: 1,
  //       num: 46,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 57,
  //       size: 2,
  //       floor: 1,
  //       num: 47,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 58,
  //       size: 2,
  //       floor: 2,
  //       num: 0,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 59,
  //       size: 2,
  //       floor: 2,
  //       num: 1,
  //       building: 'C',
  //       occupation: 3,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 60,
  //       size: 2,
  //       floor: 2,
  //       num: 3,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 61,
  //       size: 2,
  //       floor: 2,
  //       num: 2,
  //       building: 'C',
  //       occupation: 1,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 62,
  //       size: 2,
  //       floor: 2,
  //       num: 4,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 63,
  //       size: 2,
  //       floor: 2,
  //       num: 5,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 64,
  //       size: 2,
  //       floor: 2,
  //       num: 6,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 65,
  //       size: 2,
  //       floor: 2,
  //       num: 7,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 66,
  //       size: 2,
  //       floor: 2,
  //       num: 8,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       _id : 67,
  //       size: 2,
  //       floor: 2,
  //       num: 9,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
  //     {
  //       id : 68,
  //       size: 2,
  //       floor: 2,
  //       num: 10,
  //       building: 'C',
  //       occupation: 2,
  //       hasStrangers: false,
  //       description: '',
  //       persons: [],
  //     },
    ];
  }

  ngOnInit() {
    this.serviceOfficeD.fecth().subscribe(r => this.office = r);
  }

  /**
   *
   * @param _
   */
  @Input()
  set stateFilter( _: string) {
    this._stateFilter = _;
  }

  /**
   *
   * @param text
   */
  findoffice(text: string): OfficeDetail {
    const res = this.office.filter(( _: OfficeDetail) => this.createName(_) === text);
    return res.shift();
  }
  createName(_: OfficeDetail): string {
    let res = '';
    if (_.office.num.toString().length === 1) {

        res = '0';
    }
    res = _.office.building + _.office.floor + res + _.office.num;
    return res;
  }

  openWindow(_: OfficeDetail) {
      this.windowService.open(
          DetailOfficeComponent,
          {windowClass: 'headerWindow', title:  this.createName( _ ), context: _ },
      );
  }
  get stateFilter(): string {
    return this._stateFilter;
  }
}
