import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DataService } from '../data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  loading = false;
  error = '';
  loginData: any;

  constructor(private userService: UserService, private dataService: DataService) { }

  ngOnInit(): void {
    // get login data from BehaviorSubject
    this.dataService.getUserData().subscribe(data => {
      this.loginData = data;
    });

    // fetch users from API
    this.fetchUsers();
  }

  fetchUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUsers = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error fetching users';
        this.loading = false;
      }
    });
  }

  // this method will be called by child search component
  onSearch(searchTerm: string) {
    if (!searchTerm) {
      this.filteredUsers = this.users;
      return;
    }

    // filter by username or id
    this.filteredUsers = this.users.filter(user => 
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toString().includes(searchTerm)
    );
  }
}
