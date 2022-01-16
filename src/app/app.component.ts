import { Component, Input } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'The good Angular programmer';

  users = this.userService.list;

  currentUser: User = new User();

  constructor(private userService: UserService) {}

  onSelectClick() {
    // this.userService.
    // this.currentUser = event.target;
  }

  onUpdateClick() {
    this.userService.updateUser(this.currentUser);
  }

  onDeleteClick() {
    this.userService.removeUser(this.currentUser);
  }

  delUser() {
    this.userService.removeUser(this.currentUser);
  }
}
