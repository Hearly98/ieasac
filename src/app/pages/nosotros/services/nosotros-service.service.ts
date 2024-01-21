import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NosotrosServiceService {
  private isMobile = new BehaviorSubject<boolean>(false);
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Solo se ejecuta en el lado del cliente
      this.isMobile.next(window.innerWidth < 640);
      window.onresize = () => {
        this.isMobile.next(window.innerWidth < 640);
      };
    }
  }

  get isMobile$(): Observable<boolean> {
    return this.isMobile.asObservable();
  }
}
