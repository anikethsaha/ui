import storage from './storage';
import '../../types';

/**
 * Handles response according to content type
 * @param {object} response
 * @returns {promise}
 */
function handleResponseType(response: Response): Promise<[boolean, Blob | string]> | Promise<void> {
  if (response.headers) {
    const contentType = response.headers.get('Content-Type') as string;
    if (contentType.includes('application/pdf')) {
      return Promise.all([response.ok, response.blob()]);
    }
    if (contentType.includes('application/json')) {
      return Promise.all([response.ok, response.json()]);
    }
    // it includes all text types
    if (contentType.includes('text/')) {
      return Promise.all([response.ok, response.text()]);
    }
  }

  return Promise.resolve();
}

class API {
  public request(url: string, method = 'GET', options: any = {}): Promise<any> {
    if (!window.VERDACCIO_API_URL) {
      throw new Error('VERDACCIO_API_URL is not defined!');
    }

    const token = storage.getItem('token');
    if (token) {
      if (!options.headers) options.headers = {};

      options.headers.authorization = `Bearer ${token}`;
    }

    if (!['http://', 'https://', '//'].some(prefix => url.startsWith(prefix))) {
      // @ts-ignore
      url = window.VERDACCIO_API_URL + url;
    }

    return new Promise<any>((resolve, reject) => {
      fetch(url, {
        method,
        credentials: 'same-origin',
        ...options,
      })
        // @ts-ignore
        .then(handleResponseType)
        .then(([responseOk, body]) => {
          if (responseOk) {
            resolve(body);
          } else {
            reject(body);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default new API();
