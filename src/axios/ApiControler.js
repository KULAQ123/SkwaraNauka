import axios from 'axios'
// Make a request for a user with a given ID

export default class ApiController {
  constructor() {
    this.apiUrl = 'https://dh-admin.dhsv.pl'
  }

  //////////////////////////// Endpoints ////////////////////////////

  getData(path, locale = 'pl') {
    return axios.get(`${this.apiUrl}/${locale}${path}.json`)
  }
}
