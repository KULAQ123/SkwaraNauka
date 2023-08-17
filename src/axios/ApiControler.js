import axios from 'axios'
// Make a request for a user with a given ID

export default class ApiController {
  constructor() {
    this.apiUrl = 'https://dh-admin.dhsv.pl'
  }

  //////////////////////////// Endpoints ////////////////////////////

  getData(path, locale = 'pl') {
    // const link = ``
    // if (path === '/') {
    //   const link = `{locale}`
    // } else {
    //   link = `${locale}${path}`
    // }

    return axios.get(`${this.apiUrl}/${locale}.json`).then((response) => {
      // ja zapisuje se do stora
      // saveData();
    })
  }
}
