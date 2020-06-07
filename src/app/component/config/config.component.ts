import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { Config } from 'src/app/model/config.model';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
@Injectable()
export class ConfigComponent implements OnInit {
  allowRegister = false;

  constructor(private router: Router, private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.getConfig().subscribe((config: Config) => {
      this.allowRegister = config.allowRegister;
    });
  }

  save() {
    let config = { allowRegister: this.allowRegister };
    this.configService.editConfig(config);
    this.router.navigate(['/']);
  }
}
