import {Person} from './person';

export interface OfficeDetail {
    _id: number; // id du bureau
    size: number; // nb de place du bureau
    floor: number; // l'etage ou se situe le bureau
    num: number; // le numero du bureau
    building: string; // le batiment ou se situe le bureau
    description: string; // description du bureau
    persons: Person[]; // les personnes assigné au bureau
}
export const OFFICESDETAIL = [
    {  _id : 1, size: 2, floor: 1, num: 2, building: 'A', description: '', persons: []},
    {  _id : 2, size: 3, floor: 1, num: 25, building: 'A', description: '', persons: [    {
            _id: 8,
            firstname: 'Tony',
            lastname: 'Parker',
            dateStart: '',
            dateEnd: '',
        } as Person,
            {
            _id: 7,
            firstname: 'Chris',
            lastname: 'Paul',
            dateStart: '',
            dateEnd: '',
        },
        ]},
    {  _id : 3, size: 4, floor: 2, num: 12, building: 'A', description: '', persons: [
            {
                _id: 9,
                firstname: 'Brandon',
                lastname: 'Ingram',
                dateStart: '',
                dateEnd: '',
            },
            {
                _id: 10,
                firstname: 'Lebron',
                lastname: 'James',
                dateStart: '',
                dateEnd: '',
            },
            {
                _id: 1,
                firstname: 'James',
                lastname: 'Harden',
                dateStart: '',
                dateEnd: '',
            },
            {
                _id: 2,
                firstname: 'Stephen',
                lastname: 'Curry',
                dateStart: '',
                dateEnd: '',
            },
        ]},
    {  _id : 4, size: 3, floor: 2, num: 2, building: 'A', description: '', persons: [
            {
                _id: 3,
                firstname: 'Derrick',
                lastname: 'Rose',
                dateStart: '',
                dateEnd: '',
            },
            {
                _id: 4,
                firstname: 'Joel',
                lastname: 'Embid',
                dateStart: '',
                dateEnd: '',
            },
        ]},
    {  _id : 5, size: 2, floor: 2, num: 13, building: 'A', description: '', persons: []},
    {  _id : 6, size: 2, floor: 3, num: 11, building: 'A', description: '', persons: []},
    {  _id : 7, size: 3, floor: 1, num: 12, building: 'B', description: '', persons: []},
    {  _id : 8, size: 2, floor: 1, num: 2, building: 'B', description: '', persons: []},
    {  _id : 9, size: 4, floor: 2, num: 6, building: 'B', description: '', persons: []},
    {  _id : 10, size: 3, floor: 2, num: 8, building: 'B', description: '', persons: []},
    {  _id : 11, size: 3, floor: 2, num: 12, building: 'B', description: '', persons: []},
    {  _id : 12, size: 2, floor: 3, num: 2, building: 'B', description: '', persons: []},
    {  _id : 13, size: 4, floor: 3, num: 6, building: 'B', description: '', persons: []},
    {  _id : 14, size: 3, floor: 3, num: 8, building: 'B', description: '', persons: []},
    {  _id : 15, size: 2, floor: 1, num: 2, building: 'C', description: '', persons: []},
    {  _id : 16, size: 4, floor: 2, num: 6, building: 'C', description: '', persons: []},
    {  _id : 17, size: 3, floor: 2, num: 8, building: 'C', description: '', persons: []},
    {  _id : 18, size: 3, floor: 2, num: 12, building: 'C', description: '', persons: []},
    {  _id : 19, size: 2, floor: 3, num: 2, building: 'C', description: '', persons: []},
    {  _id : 20, size: 4, floor: 3, num: 6, building: 'C', description: '', persons: []},
    {  _id : 21, size: 3, floor: 3, num: 8, building: 'C', description: '', persons: []},
    {  _id : 22, size: 2, floor: 1, num: 3, building: 'A', description: '', persons: []},
    {  _id : 23, size: 3, floor: 1, num: 34, building: 'A', description: '', persons: []},
    {  _id : 24, size: 5, floor: 2, num: 70, building: 'A', description: '', persons: []},
    {  _id : 25, size: 1, floor: 2, num: 3, building: 'A', description: '', persons: []},
    {  _id : 26, size: 2, floor: 2, num: 14, building: 'A', description: '', persons: []},
    {  _id : 27, size: 2, floor: 3, num: 45, building: 'A', description: '', persons: []},
    {  _id : 28, size: 3, floor: 1, num: 52, building: 'B', description: '', persons: []},
    {  _id : 29, size: 2, floor: 1, num: 8, building: 'B', description: '', persons: []},
    {  _id : 30, size: 4, floor: 2, num: 4, building: 'B', description: '', persons: []},
    {  _id : 31, size: 3, floor: 2, num: 44, building: 'B', description: '', persons: []},
    {  _id : 32, size: 3, floor: 2, num: 42, building: 'B', description: '', persons: []},
    {  _id : 33, size: 2, floor: 3, num: 24, building: 'B', description: '', persons: []},
    {  _id : 34, size: 4, floor: 3, num: 64, building: 'B', description: '', persons: []},
    {  _id : 35, size: 3, floor: 3, num: 84, building: 'B', description: '', persons: []},
    {  _id : 36, size: 2, floor: 1, num: 26, building: 'C', description: '', persons: []},
    {  _id : 37, size: 4, floor: 2, num: 36, building: 'C', description: '', persons: []},
    {  _id : 38, size: 3, floor: 2, num: 33, building: 'C', description: '', persons: []},
    {  _id : 39, size: 3, floor: 2, num: 13, building: 'C', description: '', persons: []},
    {  _id : 40, size: 2, floor: 3, num: 25, building: 'C', description: '', persons: []},
    {  _id : 41, size: 4, floor: 3, num: 27, building: 'C', description: '', persons: []},
    {  _id : 42, size: 3, floor: 3, num: 38, building: 'C', description: '', persons: []},
];