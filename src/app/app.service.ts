export class AppService {

  saveKeyStrokeHistory(obj: any): void {
    // if(localStorage.getItem('keystorkehistory')){
    //   localStorage.removeItem('keystorkehistory');
    // }
    localStorage.setItem('keystorkehistory', JSON.stringify(obj));
  }

  keyStrokeHistory : any = [];
  fetchKeyStrokeHistory(): any {
    if(localStorage.getItem('keystorkehistory')){
      this.keyStrokeHistory = JSON.parse(localStorage.getItem('keystorkehistory') || '{}');
    }
    return this.keyStrokeHistory;
  }

  clearKeyStrokeHistory(): void {
    if(localStorage.getItem('keystorkehistory')){
      localStorage.removeItem('keystorkehistory');
    }
  }
}
