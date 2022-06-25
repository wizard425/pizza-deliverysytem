import { Component, OnInit } from '@angular/core';
import * as mqtt from "mqtt"

@Component({
  selector: 'pd-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
 

  constructor() {
    const client  = mqtt.connect('ws://broker.hivemq.com');

    client.on('connect', function () {
      console.log("connected");
      client.subscribe('presence', function (err) {
        if (!err) {
          client.publish('presence', 'Hello mqtt')
        }
      })
    })
    
    client.on('message', function (topic, message) {
      // message is Buffer
      console.log(message.toString())
      client.end()
    })  }

  ngOnInit(): void {

  }


}
