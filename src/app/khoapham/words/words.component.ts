import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  newEn: string = '';
  newVn: string = '';
  //show add word
  isShowAddWord = false;
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  //filter status
  filterStatus = 'XEM_TAT_CA';

  constructor() { }

  ngOnInit() {
  }
  addWord() {
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false,
    })
    this.newEn = '';
    this.newVn = '';
    this.isShowAddWord = false;
  }
  showAddWord() {
    this.isShowAddWord = true;
  }
  deleteWord(id) {
    const index = this.arrWords.findIndex(e => e.id === id);
    this.arrWords.splice(index,1);
  }
  //filter status
  getShowStatus(memorized:boolean){
    const dkXemTatCa = this.filterStatus  ==='XEM_TAT_CA';
    const dkXemDaNho =  this.filterStatus === 'XEM_DA_NHO' && memorized ;
    const dkXemChuaNho = this.filterStatus === 'XEM_CHUA_NHO' && !memorized ;
    return dkXemTatCa||dkXemDaNho||dkXemChuaNho;
  }
}
