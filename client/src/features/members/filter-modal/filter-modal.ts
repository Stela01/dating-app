import { Component, model, output, signal } from '@angular/core';
import { MemberParams } from '../../../types/member';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-modal',
  imports: [FormsModule],
  templateUrl: './filter-modal.html',
  styleUrl: './filter-modal.css'
})
export class FilterModal {
  isOpen = signal(false);
  closeModal = output();
  submitData = output<MemberParams>();
  memberParams = model(new MemberParams());

  constructor() {
    const filters = localStorage.getItem('filters');
    if(filters) {
      this.memberParams.set(JSON.parse(filters));
    }
  }

  open() {
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
    this.closeModal.emit();
  }

  submit() {
    this.submitData.emit(this.memberParams());
    this.close();
  }

  onMinAgeChange() {
    if(this.memberParams().minAge < 18) this.memberParams().minAge = 18;
    if(this.memberParams().minAge > 100) this.memberParams().minAge = 18;
  }

  onMaxAge() {
    if(this.memberParams().maxAge < this.memberParams().minAge){
      this.memberParams().maxAge = 100;
    }
    if(this.memberParams().maxAge > 100) this.memberParams().maxAge = 100;
  }
}
