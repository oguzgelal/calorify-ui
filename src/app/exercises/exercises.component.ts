import { Component, OnInit } from '@angular/core';

declare var sweetAlert: any;

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  public friends;
  public exercises;
  public routines;
  public addedExercise = {
    name: '',
    reps: '',
    sets: '',
    mins: '',
    weight: '',
    speed: '',
    incline: '',
    desc: ''
  };

  public addedRoutine = {
    name: '',
    image: '',
    desc: ''
  };

  constructor() { }

  ngOnInit() {

    this.exercises = [
      { name: 'Running' },
      { name: 'Crunches' },
      { name: 'Sit-ups' },
      { name: 'Leg Raises' },
      { name: 'Seated Jackknife' },
      { name: 'Twisting Hip Raise' },
      { name: 'Hammer Curls' },
      { name: 'Dumbbell Calf Jump' },
      { name: 'Incline Presses' },
      { name: 'Push-ups' },
      { name: 'Pec Dec Flies' },
      { name: 'Standing Wrist Curl' },
      { name: 'Upright Rows' },
      { name: 'Lateral Raises' },
      { name: 'Triceps Dips' },
      { name: 'Cable Crossover Flys' },
      { name: 'Bench Presses' },
      { name: 'Seated Rows' },
      { name: 'Dumbbell Shrugs' }
    ];

    this.routines = [
      {
        name: 'Apple Pie',
        image: 'http://images-gmi-pmc.edge-generalmills.com/36452ba2-648c-4c67-90f7-3a1fc36cf6f4.jpg'
      },
      {
        name: 'Carrot Cake',
        image: 'http://exercisenetwork.sndimg.com/content/dam/images/exercise/fullset/2007/2/16/0/ry0401_carrotcake.jpg'
      },
      {
        name: 'Pizza Margherita',
        image: 'https://s-media-cache-ak0.pinimg.com/originals/a2/59/e0/a259e0bfe5dfcd037af0a1d22214f1a6.jpg'
      },
      {
        name: 'Bolognese Sauce',
        image: 'http://i1.wp.com/exercisenouveau.com/wp-content/uploads/2010/09/IMG_6030.jpg?resize=535%2C378'
      },
      {
        name: 'Homemade Red Wine',
        image: 'https://usercontent2.hubstatic.com/11950237_f520.jpg'
      },
      {
        name: 'White Russian Cocktail',
        image: 'http://www.kahlua.com/globalassets/classic-cocktails/white-russian/kahlua-white-russian-highlighted.png/CocktailHighlight'
      },
      {
        name: 'Spinach Salad',
        image: 'http://images.media-allroutines.com/userphotos/250x250/00/47/84/478482.jpg'
      },
      {
        name: 'Apple Pie',
        image: 'http://images-gmi-pmc.edge-generalmills.com/36452ba2-648c-4c67-90f7-3a1fc36cf6f4.jpg'
      },
      {
        name: 'Carrot Cake',
        image: 'http://exercisenetwork.sndimg.com/content/dam/images/exercise/fullset/2007/2/16/0/ry0401_carrotcake.jpg'
      },
      {
        name: 'Pizza Margherita',
        image: 'https://s-media-cache-ak0.pinimg.com/originals/a2/59/e0/a259e0bfe5dfcd037af0a1d22214f1a6.jpg'
      }
    ];

    this.friends = [
      {
        name: 'Barrack Obama',
        avatar: 'http://lorempixel.com/200/200/people/1'
      },
      {
        name: 'Michael Jackson',
        avatar: 'http://lorempixel.com/200/200/people/2'
      },
      {
        name: 'Britney Spears',
        avatar: 'http://lorempixel.com/200/200/people/3'
      },
      {
        name: 'Billy Joel',
        avatar: 'http://lorempixel.com/200/200/people/4'
      },
      {
        name: 'Mathew Perry',
        avatar: 'http://lorempixel.com/200/200/people/5'
      },
      {
        name: 'Louis Armstrong',
        avatar: 'http://lorempixel.com/200/200/people/6'
      }
    ];

  }

  isTabActive(key) {
    let matched = window.location.pathname.match(key);
    return matched && matched.length > 0;
  }

  shared() {
    sweetAlert("Shared!", "A conversation was created under 'Conversations'.", "success");
  }

  addRoutine() {
    sweetAlert("Routine saved!", "Now you can use this routine within your account.", "success");
    this.addedRoutine = {
      name: '',
      image: '',
      desc: ''
    };
  }

  addExercise() {
    sweetAlert("Exercise saved!", "Now you can use this exercise within your account.", "success");
    this.addedExercise = {
      name: '',
      image: '',
      portionSize: '',
      portionType: '',
      calories: ''
    };
  }



}
