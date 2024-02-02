import { Observable } from 'rxjs'
import axios from 'axios';



const get = (url: string, myparamsObj: {}, headers?: {}, cancelToken?: any) => {
  try {
    return new Observable((observer: any) => {
      const params = { ...myparamsObj };

      // params['AppCode'] = '1';
      // params['SelectedLanguage'] = selectedLanguage.toLowerCase();
      const _params = cancelToken ? { params: params, headers, cancelToken: cancelToken } : { params: params, headers };
      axios.get(url, _params)
        .then((response) => {
          observer.next(response);
          observer.complete();
        })
        .catch((error) => {
          if (error && error.response && error.response.status === 401) {
            // refreshToken('get', url, params).subscribe(
            //     res => {
            //         observer.next(res);
            //         observer.complete();
            //     }, err => {
            //         observer.error(err);
            //         observer.complete();
            //     }
            // )
            observer.next(error.response.data)
            observer.complete()
          } else {
            observer.error(error);
            observer.complete();
          }
        }
        )
    });
  } catch (err) {
    // console.log('catch err', err)
  }
}







const post = (url: string, myparamsObj: {}, headers?: {}, cancelToken?: any) => {
  try {
    return new Observable((observer: any) => {
      const params = { ...myparamsObj };
      // console.log("url :", url)
      // console.log("params :", params)
      // params['AppCode'] = '1';
      // params['SelectedLanguage'] = selectedLanguage.toLowerCase();
      // console.log('====================================');
      // console.log('====================================');
      axios.post(url, params, { headers: headers })
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          if (error && error.response && error.response.status === 401) {
            // refreshToken('get', url, params).subscribe(
            //     res => {
            //         observer.next(res);
            //         observer.complete();
            //     }, err => {
            //         observer.error(err);
            //         observer.complete();
            //     }
            // )
            observer.next(error.response.data)
            observer.complete()
          } else {
            observer.error(error);
            observer.complete();
          }
        }
        )
    });
  } catch (err) {
    // console.log('catch err', err)
  }
}

const deleteApi = (url: string, id: {}, headers?: {}) => {
  try {
    return new Observable((observer: any) => {
      const params = { id };
      console.log("params :",params )
      // console.log(" { params, headers } :", { params, headers })
      // params['AppCode'] = '1';
      // params['SelectedLanguage'] = selectedLanguage.toLowerCase();
      axios.delete(url, { params, headers })
        .then((response: any) => {
          observer.next(response);
          observer.complete();
        }).catch((error) => {
          if (error && error.response && error.response.status === 401) {
            // refreshToken('delete', url, params).subscribe(
            //     res => {
            //         observer.next(res);
            //         observer.complete();
            //     }, err => {
            //         observer.error(err);
            //         observer.complete();
            //     }
            // )
          } else {
            observer.error(error);
            observer.complete();
          }
        }
        )
    });
  } catch (err) {
    // console.log('catch err', err)
  }
}
export const API = {
  get,
  post,
  deleteApi
}
