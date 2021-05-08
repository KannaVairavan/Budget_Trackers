let db;
// create a new db request for a "BudgetDB" database.
const request= indexedDB.open("budget",1)
request.onupgradeneeded = function (event) {
  // create object store called "BudgetStore" and set autoIncrement to true
    const db=event.target.result
    const BudgetStore=db.createObjectStore("BudgetStore",{autoIncrement:true})
};
request.onsuccess = function (event) {
  db = event.target.result;
  if (navigator.onLine) {
    checkDatabase();
  }
};
request.onerror = function (event) {
  // log error here
  console.log(event.target.errorCode)
};
function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  const transaction= db.transaction(["BudgetStore"],"readwrite")
  const BudgetStore=transaction.objectStore("BudgetStore")
  BudgetStore.add(record)
  // access your pending object store
  // add record to your store with add method.
}
function checkDatabase() {
  const transaction= db.transaction(["BudgetStore"],"readwrite")
  const BudgetStore=transaction.objectStore("BudgetStore")
  const getAll = BudgetStore.getAll()
  // open a transaction on your pending db
  // access your pending object store
  // get all records from store and set to a variable
  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          // access your pending object store
          // clear all items in your store
          const transaction= db.transaction(["BudgetStore"],"readwrite")
          const BudgetStore=transaction.objectStore("BudgetStore")
          BudgetStore.clear()
        });
    }
  };
}
// listen for app coming back online
window.addEventListener('online', checkDatabase);