const GET = 'GET';
export class HttpService {
  public get(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState === 4) {
          const status = req.status;
          switch (true) {
            case status === 0:
              this.somethingWrong();
              break;

            case status >= 500:
              // use snack bar for this
              this.serverError();
              break;

            case status < 200 || status > 299:
              reject(req);
              break;

            default:
              resolve(JSON.parse(req.response));
              break;
          }
        }
      };

      req.open(GET, url);
      req.send();
    });
  }

  public serverError() {
    console.log('SERVER ERROR');
  }
  public somethingWrong() {
    console.log('SOMETHING WRONG WITH YOUR REQUEST');
  }
}
