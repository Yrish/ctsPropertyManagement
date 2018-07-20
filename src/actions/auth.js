import axios from 'axios'
import {ROOT_URL} from '../config'

export function signup(fields, success, failure) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signUp`, fields)
      .then(response => {
        console.log(response)
        success()
      })
      .catch(err => {
        if (err) {
          console.log(err)
          failure(err)
        }
      })
  }
}
