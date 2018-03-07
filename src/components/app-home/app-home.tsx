import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  render() {
    return (
      <ion-page>
        <ion-header>
          <ion-toolbar>
            <ion-title>
              Do It!
            </ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-searchbar placeholder='Search Items'></ion-searchbar>
          <ion-list>
            <app-todo-list-item title="Inbox" icon="ios-filing" iconColor="primary" todos={[{title: "Todo 1", isOverdue: true}, {title: "Todo 2", isOverdue: true}]}></app-todo-list-item>
          </ion-list>
          <ion-list>
            <app-todo-list-item title="Today" icon="star" iconColor="tertiary" todos={[{title: "Todo 3", isOverdue: true}, {title: "Todo 4", isOverdue: false}, {title: "Todo 5", isOverdue: false}]}></app-todo-list-item>
            <app-todo-list-item title="Next" icon="albums" iconColor="medium"></app-todo-list-item>
            <app-todo-list-item title="Scheduled" icon="calendar" iconColor="danger"></app-todo-list-item>
            <app-todo-list-item title="Someday" icon="ios-archive" iconColor="medium"></app-todo-list-item>
          </ion-list>
          <ion-list>
            <app-todo-list-item title="My projects" icon="pricetags" iconColor="medium" todos={[{},{},{},{},{},{}]}></app-todo-list-item>
            <app-todo-list-item title="My project" icon="pricetag" iconColor="success"></app-todo-list-item>
            <app-todo-list-item title="My projects" icon="cube" iconColor="success"></app-todo-list-item>
          </ion-list>
          {/* <stencil-route-link url='/profile/stencil'>
            <ion-button>
              Profile page
            </ion-button>
          </stencil-route-link> */}
        </ion-content>
      </ion-page>
    );
  }
}
