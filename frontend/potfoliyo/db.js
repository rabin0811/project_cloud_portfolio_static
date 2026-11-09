export function mydb(){
    const db_name = "mydb";
    const request = indexedDB.open(db_name, 1);

    if (request!== null){
        request.onsuccess = function(event){
            const db = event.target.result;
            console.log("Database opened successfully");
        }
    }
}
