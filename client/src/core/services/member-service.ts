import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environmemnt } from '../../environments/environment';
import { EditableMember, Member, Photo } from '../../types/member';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private http = inject(HttpClient);
  private baseUrl = environmemnt.apiUrl;
  editMode = signal(false);
  member = signal<Member | null>(null);

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + 'members');
  }

  getMember(id: number){
    return this.http.get<Member>(this.baseUrl + 'members/' + id).pipe(
      tap(member => {
        this.member.set(member)
      })
    )
  }

  getMemberPhotos(id: number){
    return this.http.get<Photo[]>(this.baseUrl + 'members/' + id + '/photos');
  }

  updateMember(member: EditableMember){
    return this.http.put(this.baseUrl + 'members', member);
  }
}
