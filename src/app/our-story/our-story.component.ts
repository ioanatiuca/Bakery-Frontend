import { Component, OnInit } from '@angular/core';
import {Story} from "../model/Story";
import {Router} from "@angular/router";

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.css']
})
export class OurStoryComponent implements OnInit {
  story: Story = new Story();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ourStory () {
    this.story.story = "Our story has began... ";
    this.goToTheStory();
  }

  onSubmit() {
    this.ourStory();
  }

  private goToTheStory() {
    this.router.navigate(['/story']);
  }
}
