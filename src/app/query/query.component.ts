import { Component, OnInit } from '@angular/core';

declare var sweetAlert: any;

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  public showRecommendedExercises = false;
  public showRecommendedFoods = false;

  public friends = [
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

  public exercises = [
      { name: 'Running' },
      { name: 'Crunches' },
      { name: 'Sit-ups' },
      { name: 'Leg Raises' },
      { name: 'Seated Jackknife' },
      { name: 'Twisting Hip Raise' },
      { name: 'Hammer Curls' },
      { name: 'Dumbbell Calf Jump' },
      { name: 'Incline Presses' }
    ];

    public routines = [
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

  public foods = [
      {
        name: 'Apple',
        image: 'https://staticdelivery.nexusmods.com/mods/110/images/74627-0-1459502036.jpg'
      },
      {
        name: 'Banana',
        image: 'http://www.bbcgoodfood.com/sites/default/files/glossary/banana-crop.jpg'
      },
      {
        name: 'Feta cheese',
        image: 'http://helleniclifestyle.com/wp-content/uploads/2015/01/feta-1.jpg'
      },
      {
        name: 'Grape',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/220px-Table_grapes_on_white.jpg'
      },
      {
        name: 'Strawberry',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg'
      },
      {
        name: 'Apple',
        image: 'https://staticdelivery.nexusmods.com/mods/110/images/74627-0-1459502036.jpg'
      },
      {
        name: 'Banana',
        image: 'http://www.bbcgoodfood.com/sites/default/files/glossary/banana-crop.jpg'
      },
      {
        name: 'Feta cheese',
        image: 'http://helleniclifestyle.com/wp-content/uploads/2015/01/feta-1.jpg'
      },
      {
        name: 'Grape',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/220px-Table_grapes_on_white.jpg'
      },
      {
        name: 'Strawberry',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg'
      }
    ];

    public recipes = [
      {
        name: 'Apple Pie',
        image: 'http://images-gmi-pmc.edge-generalmills.com/36452ba2-648c-4c67-90f7-3a1fc36cf6f4.jpg'
      },
      {
        name: 'Carrot Cake',
        image: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2007/2/16/0/ry0401_carrotcake.jpg'
      },
      {
        name: 'Pizza Margherita',
        image: 'https://s-media-cache-ak0.pinimg.com/originals/a2/59/e0/a259e0bfe5dfcd037af0a1d22214f1a6.jpg'
      },
      {
        name: 'Bolognese Sauce',
        image: 'http://i1.wp.com/foodnouveau.com/wp-content/uploads/2010/09/IMG_6030.jpg?resize=535%2C378'
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
        image: 'http://images.media-allrecipes.com/userphotos/250x250/00/47/84/478482.jpg'
      },
      {
        name: 'Apple Pie',
        image: 'http://images-gmi-pmc.edge-generalmills.com/36452ba2-648c-4c67-90f7-3a1fc36cf6f4.jpg'
      },
      {
        name: 'Carrot Cake',
        image: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2007/2/16/0/ry0401_carrotcake.jpg'
      },
      {
        name: 'Pizza Margherita',
        image: 'https://s-media-cache-ak0.pinimg.com/originals/a2/59/e0/a259e0bfe5dfcd037af0a1d22214f1a6.jpg'
      }
    ];

  constructor() { }

  ngOnInit() {
  }

  shared() {
    sweetAlert("Shared!", "A conversation was created under 'Conversations'.", "success");
  }

  isTabActive(key) {
    let matched = window.location.pathname.match(key);
    return matched && matched.length > 0;
  }

}
