import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Extra } from 'src/app/models/extra.model';

@Component({
  selector: 'pd-extra-detail',
  templateUrl: './extra-detail.component.html',
  styleUrls: ['./extra-detail.component.scss']
})
export class ExtraDetailComponent implements OnInit {

  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() submit: EventEmitter<Extra> = new EventEmitter<Extra>();

  form!: FormGroup;
  extra: Extra | null = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Extra, private fb: FormBuilder,) {
    console.log(data);
    if (data) {
      this.extra = data;
    }
    this.buildForm();
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    if (!this.form.valid)
      return;
    this.submit.emit(this.mapForm());

  }

  mapForm() {
    return Object.assign(this.extra ? this.extra : new Extra(), {
      id: this.extra ? this.extra.id : undefined,
      createdOn: this.extra ? this.extra.createdOn : undefined,
      lastModifiedOn: this.extra ? this.extra.lastModifiedOn : undefined,
      name: this.form.controls['name'].value,
      price: this.form.controls['price'].value
    });
  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.extra ? this.extra.name : '', Validators.required],
      price: [this.extra ? this.extra.price : '', Validators.compose([Validators.required, Validators.min(0)])]
    });
  }

}
