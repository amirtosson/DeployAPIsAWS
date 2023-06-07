window.indexedDB = window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;
window.IDBTransaction =  window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;


if (!window.indexedDB) {
  alert("Your browser is not supported")
}

var db;
var request = indexedDB.open("daphne", 1)

request.onerror = function (event) {
  console.log("Error in intialization of Local DB" + event.target.result)
}

request.onsuccess = function (event) {
  db = request.result;
  console.log("Intialization of Local DB is successed")
}

request.onupgradeneeded = function () {
  var db = request.result;
  var store = db.createObjectStore("datasets", {keyPath:"dataset_id"})
  console.log("Intialization of store is successed")
}
