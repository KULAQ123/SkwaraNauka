import axios from 'axios'
// Make a request for a user with a given ID
import { useDataStore } from '@/stores/data'



export default class ApiController {
  constructor() {
    this.apiUrl = 'https://dh-admin.dhsv.pl'
  }

  //////////////////////////// Endpoints ////////////////////////////

  getData(path, locale = 'pl') {
    let link = ``
    if (path === '/') {
      link = `${locale}`
    } else {
      link = `${locale}${path}`
    }

    this.dataStore = useDataStore()

    return axios.get(`${this.apiUrl}/${link}.json`).then((response) => {
      // ja zapisuje se do stora
      this.dataStore.saveData(response);
    })
  }
}
