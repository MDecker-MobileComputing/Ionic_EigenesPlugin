import { WebPlugin } from '@capacitor/core';

import type { HelferleinPlugin } from './definitions';

export class HelferleinWeb extends WebPlugin implements HelferleinPlugin {

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async holeUptime(): Promise<{ value: string }> {

    return {
      value: "Uptime für Platform >web< nicht implementiert."
    };
  }

  loggeNachricht(options: { loglevel: string, nachricht: string }): void {

    console.log( `${options.loglevel}: ${options.nachricht}` );
  }

}
