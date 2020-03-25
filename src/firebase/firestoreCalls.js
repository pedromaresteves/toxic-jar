import { db } from './init-firebase';

function getUsers(callback) {
    const usersFromDB = [];
    db.collection("prueba").orderBy('userName').get().then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
        usersFromDB.push(doc.data());
      });
      return usersFromDB;
    }).then(result => callback(result));
  }

export {
    getUsers
}