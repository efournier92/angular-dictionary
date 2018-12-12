export class Def {
  word: string
  content: string
  partOfSpeech: string
  synonyms: string

  constructor(word: string, def: any) {
    this.word = word;
    this.content = def.definition;
    this.partOfSpeech = def.partOfSpeech;
    this.synonyms = def.synonyms;
  }
}
