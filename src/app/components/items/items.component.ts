import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
      this.getTotal();
    })
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(items => items.id != item.id);
    this.itemService.deleteItem(item).subscribe();
    this.getTotal();
  }

  chgItem(item: Item) {
    this.items = this.items.filter(items => items.id = item.id);
  }

  toggleItem(item: Item) {
    this.itemService.toggleItem(item).subscribe();
    this.getTotal();
  }

  getTotal() {
    this.total = this.items
                .filter(items => !items.completed)
                .map(items => items.monto * 1)
                .reduce((suma, item) => suma += item, 0);
  }

}