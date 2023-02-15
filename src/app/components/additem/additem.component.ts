import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  id: number = 0;
  servicio: string = '';
  monto: number = 0;
  fechaVto: string = '';

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const item = new Item();
    item.id = this.id;
    item.servicio = this.servicio;
    item.monto = this.monto;
    item.fechaVto = this.fechaVto;
    item.completed = false;
    this.itemService.addItem(item).subscribe(result => {
      this.router.navigate(['/']);
    });
  }

}
