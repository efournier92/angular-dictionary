import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Def } from './def/def';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  defs: Array<Def>;
  selectedWord: string;
  searchWord: string;
  historyWords: Array<string> = [];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.defineWord('test');
  }
  defineWord(word: string): void {
    this.dataService.getDefinitions(word).subscribe(
      (data: any) => {
        this.selectedWord = word;
        if (this.historyWords && !this.historyWords.includes(this.selectedWord))
          this.historyWords.unshift(this.selectedWord);
        this.defs = [];

        for (const def of data.results) {
          this.defs.unshift(new Def(word, def));
        }
      }
    );
  }
}
