import { Component } from '@angular/core';
import { Helferlein } from "helferlein";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public uptimeString : string = "";

  public async onUptimeHolenButton() {

     let ergebnis = await Helferlein.holeUptime();

     this.uptimeString = ergebnis.value;

     Helferlein.loggeNachricht({
        loglevel: "INFO",
        nachricht: `Uptime wurde ausgelesen: ${this.uptimeString}`
     });
  }

}
