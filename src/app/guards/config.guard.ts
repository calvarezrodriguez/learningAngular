import { CanActivate, Router } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfigGuard implements CanActivate {
  constructor(private router: Router, private configService: ConfigService) {}

  canActivate(): Observable<boolean> {
    return this.configService.getConfig().pipe(
      map((config) => {
        if (config.allowRegister) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
