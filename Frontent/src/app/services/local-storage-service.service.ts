import { Injectable } from '@angular/core';

declare var db: any

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {
  public storageName = "datasets"

  constructor() { }


  AddItem(item: any) {
    return new Promise(async (resolve, reject) => {
        if (db != undefined) {
          const request = await db.transaction(this.storageName, "readwrite").objectStore(this.storageName).put({ dataset_id: item.dataset_id, details: item })
          request.onsuccess = await function (event) {
            if (event.target.result) {
              console.log("Added")
              resolve("success")
            } else {
              console.log("Not added")
              resolve(false)
            }
          }
        }
      }
    )
  }

  GetAllItems() {
    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db.transaction(this.storageName, "readwrite").objectStore(this.storageName).getAll()
        request.onsuccess = await function (event) {
          if (event.target.result) {
            resolve(event.target.result)
          } else {
            console.log("Not added")
            resolve(false)
          }
        }
      }
    }
  )
  }

  DeleteItem() { }

}
