import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environmemnt } from '../environments copy/environment.development';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
    private http = inject(HttpClient);
    baseUrl = environmemnt.apiUrl;
    protected title = 'Dating app';
    protected members = signal<any>([]);

    async ngOnInit(){
      console.log("members", this.members)
      this.members.set(await this.getMembers())
    }

    async getMembers() {
    try {
      console.log("members", this.members)
      return lastValueFrom(this.http.get(this.baseUrl + 'users'));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
