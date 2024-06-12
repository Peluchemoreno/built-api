export default class Api {
  constructor(url){
    this.url = url;
  }

  checkServerResponse(res){
    return res.ok ? res.json() : Promise.reject(err => {
      console.error(err)
    })
  }

  getLists(){
    return fetch(this.url + 'lists').then(this.checkServerResponse)
  }

  removeList(itemId){
    return fetch(this.url + `lists/${itemId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(this.checkServerResponse)
  }

  addList(list){
    return fetch(this.url + `lists/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: list.title
      })
    }).then(this.checkServerResponse)
  }
}