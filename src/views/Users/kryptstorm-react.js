// External modules
import Axios from "axios";
import _ from "lodash";
import QueryString from "query-string";

export default class KryptstormReact {
  constructor(options = {}) {
    const { endpoint } = options;

    if (!_.isString(endpoint) || !endpoint) {
      throw new Error("Service enpoint must be defined.");
    }

    this._service = Axios.create({
      baseURL: endpoint,
      timeout: 10000
    });
  }

  search(args) {
    const { page = 0, pageSize = 20, sorted = [], filtered = [] } = args;

    let _query = {
      _page: page + 1,
      _limit: pageSize
    };

    if (_.isArray(sorted) && !_.isEmpty(sorted)) {
      _query._sort = _.reduce(
        sorted,
        (_sort, s) => (_sort += (s.desc ? "-" : "") + s.id),
        ""
      );
    }

    if (_.isArray(filtered) && !_.isEmpty(filtered)) {
      _.assign(
        _query,
        (_filter, f) => _.assign(_filter, { [f.id]: f.value }),
        {}
      );
    }

    return this._service
      .get(`/?${QueryString.stringify(_query)}`)
      .then(({ data = {} }) => Promise.resolve(data));
  }
}
