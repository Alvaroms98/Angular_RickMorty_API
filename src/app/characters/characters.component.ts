import { Component, OnInit } from '@angular/core';
import { Character, Info } from '../models/rick-page.model';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  
  characters: Character[] = [];
  numCharacters: number = 0;
  pageNumber: number = 1;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getInfo().subscribe({
      next: result => {
        const info: Info = result.info;
        this.selectPage(info.pages);
      },
      error: e => {
        console.log(e);
      }
    });
  }

  selectPage(pages: number): void {
    const page: number = this.getRandomInt(pages);
    this.pageNumber = page;
    this.apiService.getCharacters(page).subscribe({
      next: result => {
        this.characters = result.results;
        this.numCharacters = this.characters.length;
      },
      error: e => {
        console.log(e);
      }
    });
  }

  getRandomInt(max: number): number {
    const result: number = Math.floor(Math.random() * (max - 1) + 1);
    return result;
  }
}
