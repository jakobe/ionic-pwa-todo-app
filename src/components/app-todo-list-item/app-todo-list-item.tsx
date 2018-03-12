import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'app-todo-list-item',
  //styleUrl: 'app-todo-list-item.scss'
})
export class AppTodoListItem {

  @Prop() title: string;
  @Prop() icon: string;
  @Prop() iconColor: string;
  @Prop() todos: any[] = [];

  get overdueCount() : number {
    return this.todos.filter(todo => todo.isOverdue).length;
  }

  get notdoneCount() : number {
    return this.todos.filter(todo => !todo.isDone).length;
  }
  

  render() {
    return (
      <ion-item tappable={true}>
        { this.icon
          ? <ion-icon slot="start" name={this.icon} color={this.iconColor}></ion-icon>
          : <noop />
        }
        <ion-label>{this.title}</ion-label>
        { this.overdueCount ?
          <ion-badge slot="end" color="danger">{this.overdueCount}</ion-badge>
          : <noop />
        }
        { this.notdoneCount
          ? <ion-note slot="end" class="todo-count">{this.notdoneCount}</ion-note>
          : <noop />
        }
      </ion-item>
    )
  }
}