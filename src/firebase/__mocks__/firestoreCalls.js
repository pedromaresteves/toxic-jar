function getUsers(callback) {
    const mockUsers = [
        {
            userName: `Poop Man`,
            debt: 0,
            teamName: 'qa_team'
        },
        {
          userName: `Pedro Marques`,
            debt: 0,
            teamName: 'qa_team'
        },
        {
            userName: `Rafael Casado`,
            debt: 0,
            teamName: 'qa_team'
        },
        {
            userName: `Raúl 'El Papo' Hernandez`,
            debt: 0,
            teamName: 'qa_team'
        }  
    ];
    callback(mockUsers);
  }

function updateUsers(userName, debt) {
    return;
}

function clearDebt(users) {
    return;
  }

  module.exports = {
    getUsers: getUsers,
    updateUsers: updateUsers,
    clearDebt: clearDebt
  }