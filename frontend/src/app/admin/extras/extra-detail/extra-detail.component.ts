import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Extra } from 'src/app/models/extra.model';

@Component({
  selector: 'pd-extra-detail',
  templateUrl: './extra-detail.component.html',
  styleUrls: ['./extra-detail.component.scss']
})
export class ExtraDetailComponent implements OnInit {

  form!: FormGroup;
  extra: Extra | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      price: ''
    })
  }

  ngOnInit(): void {
  }

}
