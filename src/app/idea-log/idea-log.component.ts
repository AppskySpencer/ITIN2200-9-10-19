import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../services/ideas.service';

@Component({
  selector: 'app-idea-log',
  templateUrl: './idea-log.component.html',
  styleUrls: ['./idea-log.component.scss']
})
export class IdeaLogComponent implements OnInit {
  newIdea: string;
  ideaList: string[];

  constructor(private ideaService: IdeasService) { }

  ngOnInit() {
    // get ideas
    this.ideaList = this.ideaService.getIdeas();
  }

  // save new idea
  saveIdea() {
    if (!this.newIdea || this.newIdea.length === 0) {
      alert('You need to write what your idea is!');
    } else {
      this.ideaList = this.ideaService.saveNewIdea(this.newIdea);
      this.newIdea = '';
    }
  }

  clearList() {
    this.ideaList = this.ideaService.clearList();
  }

}
