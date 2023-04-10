import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IServices } from '../app.interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
  }
  public services: IServices[] = [
    {
      activity: 'Екскурзия до',
      location: 'Побити камъни',
      background: 'url(../../../assets/slider2-1.jpg',
      time: 3,
      price: 60,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum impedit velit libero optio id amet vitae cumque vel repellat.',
      id: 201,
    },
    {
      activity: 'Обиколка на',
      location: 'Градска художествена галерия',
      background: 'url(../../../assets/slider2-2.jpg)',
      time: 1,
      price: 30,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum impedit velit libero optio id amet vitae cumque vel repellat.',
      id: 202,
    },
    {
      activity: 'Обиколка на',
      location: 'Римски терми',
      background: 'url(../../../assets/slider2-3.jpg)',
      time: 2,
      price: 40,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum impedit velit libero optio id amet vitae cumque vel repellat.',
      id: 203,
    },
    {
      activity: 'Екскурзия до',
      location: 'Аладжа манастир',
      background: 'url(../../../assets/slider2-4.jpg)',
      time: 3,
      price: 60,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum impedit velit libero optio id amet vitae cumque vel repellat.',
      id: 204,
    },
    {
      activity: 'Обиколка на',
      location: 'Резиденция евксиноград',
      background: 'url(../../../assets/slider2-5.jpg)',
      time: 3,
      price: 90,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum impedit velit libero optio id amet vitae cumque vel repellat.',
      id: 205,
    },
    {
      activity: 'Обиколка на',
      location: 'Музей на куклата',
      background: 'url(../../../assets/slider2-6.jpg)',
      time: 2,
      price: 40,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nostrum impedit velit libero optio id amet vitae cumque vel repellat.',
      id: 206,
    },
  ];
  
}
