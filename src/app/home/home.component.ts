import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit() {}

  saveCSV(csv: string): void {
    this.dataService.save(csv);
  }

  logout(): void {
    this.authService.logout();
  }
}
