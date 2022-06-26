import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Extra } from 'src/app/models/extra.model';
import { Pizza } from 'src/app/models/pizza.model';
import { ExtraService } from 'src/app/services/extra.service';
import { PizzaService } from 'src/app/services/pizza.service';
import { Location } from '@angular/common'
import { PizzaExtra } from 'src/app/models/pizzaExtra.model';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'pd-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss']
})
export class PizzaDetailComponent implements OnInit {

  form!: FormGroup;
  pizza: Pizza | null = null;
  extras: Extra[] = [];
  selectedExtras: Set<number> = new Set<number>();

  constructor(private act: ActivatedRoute,
    private pizzaService: PizzaService,
    private extraService: ExtraService,
    private fb: FormBuilder,
    private location: Location,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getPizza();
  }

  getPizza() {
    this.extraService.getAll().subscribe(res => this.extras = res);
    this.act.params.subscribe(params => {
      if (params.pizzaId) {
        this.pizzaService.get(params.pizzaId).subscribe(res => { this.pizza = res; this.buildForm(); });
      } else {
        this.buildForm();
      }
    });
  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.pizza ? this.pizza.name : '', Validators.required],
      price: [this.pizza ? this.pizza.price : '', Validators.required],
      description: [this.pizza ? this.pizza.description : ''],
      pizzaExtras: this.fb.array([])
    });
  }

  hasExtra(extraId: number | undefined): boolean {
    return this.pizza?.pizzaExtras.find(x => x.extraId == extraId) != null;
  }

  addExtras() {
    this.pizza?.pizzaExtras.forEach(pe => {
      if (pe.id)
        this.selectedExtras.add(pe.id)
    });
  }

  save() {
    if (!this.form.valid)
      return;
    if (this.pizza) {

    } else {
      this.pizzaService.create(this.mapForm()).subscribe(res => {
        this.router.navigate(['/admin/pizzas']);
      });
    }

  }

  cancel() {
    this.location.back();
  }

  mapForm(): Pizza {
    let se: PizzaExtra[] = [];
    // parse selected extras to pizzaextras
    this.selectedExtras.forEach(i => {
      let p = new PizzaExtra();
      p.extraId = i;
      p.pizzaId = undefined;
      p.id = undefined;
      se.push(p);
    });
    let pizza = Object.assign(this.pizza ? this.pizza : {}, {
      id: this.pizza ? this.pizza.id : undefined,
      name: this.form.controls.name.value,
      price: this.form.controls.price.value,
      description: this.form.controls.description.value,
      pizzaExtras: se
    });

    if (this.pizza)
      delete pizza.id;

    return <Pizza>pizza;
  }


  onchange(event: MatCheckboxChange) {
    console.log(event);
    if (event.checked) {
      this.selectedExtras.add(Number.parseInt(event.source.value));
    } else {
      this.selectedExtras.delete(Number.parseInt(event.source.value));
    }
  }

}
