import { LikesService } from './../../../core/services/likes-service';
import { Component, computed, inject, input } from '@angular/core';
import { Member } from '../../../types/member';
import { RouterLink } from "@angular/router";
import { AgePipe } from '../../../core/pipes/age-pipe';

@Component({
  selector: 'app-member-card',
  imports: [RouterLink, AgePipe],
  templateUrl: './member-card.html',
  styleUrl: './member-card.css'
})
export class MemberCard {
  private LikesService = inject(LikesService);
  member = input.required<Member>();
  protected hasLiked = computed(() => this.LikesService.likeIds().includes(this.member().id));

  toggleLike(event: Event) {
    event.stopPropagation();
    this.LikesService.toggleLike(this.member().id).subscribe({
      next: () => {
        if(this.hasLiked()) {
          this.LikesService.likeIds.update(ids => ids.filter(x => x !== this.member().id))
        } else {
          this.LikesService.likeIds.update(ids => [...ids, this.member().id])
        }
      }
    })
  }
}
