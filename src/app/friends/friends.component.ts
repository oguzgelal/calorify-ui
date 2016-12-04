import { Component, OnInit } from '@angular/core';

declare var sweetAlert: any;

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  public suggestedFriends;
  public friendRequests;

  constructor() { }

  ngOnInit() {

    this.suggestedFriends = [
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

    this.friendRequests = [
      {
        name: 'Donald Trump',
        avatar: 'http://lorempixel.com/200/200/people/3'
      },
      {
        name: 'Jessica Alba',
        avatar: 'http://lorempixel.com/200/200/people/6'
      },
      {
        name: 'James Helfield',
        avatar: 'http://lorempixel.com/200/200/people/1'
      }
    ];

  }

  addSuggestedFriend(friend, index) {
    sweetAlert("Success!", "Friend request sent to "+friend.name+".", "success")
    this.suggestedFriends.splice(index, 1);
  }

  friendAccept(friend, index){
    sweetAlert("Success!", "You are now friends with "+friend.name, "success")
    this.friendRequests.splice(index, 1);
  }

  friendIgnore(friend, index){
    this.friendRequests.splice(index, 1);
  }

}
