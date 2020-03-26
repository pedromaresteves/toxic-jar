import { db } from './init-firebase';

function getUsers(callback) {
    const usersFromDB = [];
    db.collection('prueba').orderBy('userName').get().then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
        usersFromDB.push(doc.data());
      });
      return usersFromDB;
    }).then(result => callback(result));
  }

  function updateUsers(userName, debt) {
    db.collection('prueba').where('userName', '==', userName).get().then((querySnapshot) => {
      const userToUpdate = db.collection('prueba').doc(querySnapshot.docs[0].id);
      const currentUserDebt = querySnapshot.docs[0].data().debt;
      userToUpdate.update({debt: currentUserDebt + debt})
      });
    }

  function clearDebt(users) {
    const userNames = users.map(item => item.userName);
    db.collection('prueba').get().then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        userNames.forEach(item => {
          if(doc.data().userName === item){
            const userToBeCleared = db.collection('prueba').doc(doc.id);
            userToBeCleared.update({debt: 0})
          }
        });

      });
    });
  }

export {
    getUsers,
    updateUsers,
    clearDebt
}