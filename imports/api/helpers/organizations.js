import { Organizations } from '../schemas/organizations';

export function organizationsReset() {

    Organizations.remove({});
    Organizations.insert({
      name: 'Red Academy',
      address: '1490 W Broadway #200, Vancouver, BC, V6H 4E8'
    });
}