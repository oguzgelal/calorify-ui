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
    calories: '',
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
      { name: 'P90X Workout' },
      { name: 'LiveFit' },
      { name: 'Shortcut To Size' },
      { name: 'Kris Gethin - 12 Week Trainer' },
      { name: 'Labrada Lean Body' },
      { name: 'Shortcut To Shred' },
      { name: 'Big Man On Campus' },
      { name: 'Arnold Schwarzenegger\'s Blueprint' },
      { name: 'Living Large' },
      { name: 'Get Swole' },
      { name: 'Rewired' }
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
    reps: '',
    sets: '',
    mins: '',
    weight: '',
    speed: '',
    incline: '',
    calories: '',
    desc: ''
  };
  }



}
