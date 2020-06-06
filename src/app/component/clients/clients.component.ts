import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/model/client.model';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  client: Client = {
    name: '',
    lastname: '',
    email: '',
    balance: 0,
  };
  @ViewChild('clientForm') clientForm: NgForm;
  @ViewChild('closeButton') closeButton: ElementRef;

  constructor(
    private clientService: ClientService,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients;
    });
  }

  getTotalQuote() {
    let totalQuote: number = 0;
    if (this.clients) {
      this.clients.forEach((client) => {
        totalQuote += client.balance;
      });
    }
    return totalQuote;
  }

  add({ value, valid }: { value: Client; valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Por favor llene el formulario correctamente', {
        cssClass: 'alert-danger',
        timeout: 4000,
      });
    } else {
      //Add new client
      this.clientService.addClient(value);
      this.clientForm.resetForm();
      this.closeModal();
    }
  }

  private closeModal() {
    this.closeButton.nativeElement.click();
  }
}
