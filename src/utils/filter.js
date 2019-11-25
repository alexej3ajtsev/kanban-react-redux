import * as consts from '~actions/consts';
import { aliases } from '~reducers/filter';

export function getFilteredData(data, filter) {
  switch (filter) {
    case aliases[consts.FILTER_ALL]:
      return data;
    case aliases[consts.FILTER_COMPLETED]:
      return data.filter(d => d.complete);
    case aliases[consts.FILTER_NOT_COMPLETED]:
      return data.filter(d => !d.complete);
    default:
      return data;
  }
}
