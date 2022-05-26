import { registerPlugin } from '@capacitor/core';

import type { HelferleinPlugin } from './definitions';

const Helferlein = registerPlugin<HelferleinPlugin>('Helferlein', {
  web: () => import('./web').then(m => new m.HelferleinWeb()),
});

export * from './definitions';
export { Helferlein };
