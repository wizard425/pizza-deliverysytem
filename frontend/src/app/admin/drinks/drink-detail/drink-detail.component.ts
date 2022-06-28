import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Drink } from 'src/app/models/drink.model';

@Component({
  selector: 'pd-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.scss']
})
export class DrinkDetailComponent implements OnInit {
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() submit: EventEmitter<Drink> = new EventEmitter<Drink>();

  form!: FormGroup;
  drink: Drink | null = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Drink, private fb: FormBuilder,) {
    console.log(data);
    if (data) {
      this.drink = data;
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
    return Object.assign(this.drink ? this.drink : new Drink(), {
      id: this.drink ? this.drink.id : undefined,
      createdOn: this.drink ? this.drink.createdOn : undefined,
      lastModifiedOn: this.drink ? this.drink.lastModifiedOn : undefined,
      name: this.form.controls.name.value,
      price: this.form.controls.price.value
    });
  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.drink ? this.drink.name : '', Validators.required],
      price: [this.drink ? this.drink.price : '', Validators.compose([Validators.required, Validators.min(0)])]
    });
  }

}
