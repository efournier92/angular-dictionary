import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Def } from './def';

@Component({
  selector: 'app-def',
  templateUrl: './def.component.html',
  styleUrls: ['./def.component.scss']
})
export class DefComponent implements OnInit {
  @Input()
  def: Def;
  @Output()
  defineWord = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  defineSyn(syn) {
    this.defineWord.emit(syn);
  }

}
