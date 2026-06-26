import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environmemnt } from '../../environments/environment';
import { Member, Photo } from '../../types/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private http = inject(HttpClient);
  private baseUrl = environmemnt.apiUrl;

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + 'members');
  }

  getMember(id: number){
    return this.http.get<Member>(this.baseUrl + 'members/' + id);
  }

  getMemberPhotos(id: number){
    return this.http.get<Photo[]>(this.baseUrl + 'members/' + id + '/photos');
  }
}
