import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {

  public conversations;
  public conversationsShared;

  constructor() { }

  ngOnInit() {

    this.conversations = [
      {
        topic: 'Recipe',
        title: 'Apple Pie',
        message: 'Lorem ipsum dolor sit amet, consectetur'
      },
      {
        topic: 'Food',
        title: 'Feta Chese',
        message: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia'
      },
      {
        topic: 'Exercise',
        title: 'Dumbbell Raises',
        message: 'Lor sit amet, consectetur, adipisci velit, sed quia'
      },
      {
        topic: 'Exercise Routine',
        title: 'P90X Workout',
        message: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam'
      },
      {
        topic: 'Food',
        title: 'Apple',
        message: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia'
      },
      {
        topic: 'Exercise Routine',
        title: 'Livefit',
        message: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam'
      },
      {
        topic: 'Exercise',
        title: 'Push-ups',
        message: 'Lor sit amet, consectetur, adipisci velit, sed quia'
      }
    ];


    this.conversationsShared = [
      {
        topic: 'Exercise',
        title: 'Lateral Raise',
        message: 'Lor sit amet, consectetur, adipisci velit, sed quia'
      },
      {
        topic: 'Recipe',
        title: 'Pumpkin Soup',
        message: 'Lorem ipsum dolor sit amet, consectetur'
      },
      {
        topic: 'Food',
        title: 'Feta Chese',
        message: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia'
      },
      {
        topic: 'Exercise Routine',
        title: 'P90X Workout',
        message: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam'
      }
    ];


  }

}
