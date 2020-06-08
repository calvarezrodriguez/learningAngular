import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css'],
})
export class EditClientComponent implements OnInit {
  client: Client = {
    name: '',
    lastname: '',
    email: '',
    balance: 0,
  };

  id: string;

  constructor(
    private clientService: ClientService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe((client) => {
      this.client = client;
    });
  }

  save({ value, valid }: { value: Client; valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Por favor llene el formulario correctamente', {
        cssClass: 'alert-danger',
        timeout: 4000,
      });
    } else {
      value.id = this.id;
      //Edit Client
      this.clientService.editClient(value);
      this.router.navigate(['/']);
    }
  }

  delete() {
    if (confirm('¿Desea eliminar al cliente?')) {
      this.clientService.deleteClient(this.client);
      this.router.navigate(['/']);
    }
  }
}
