const users = [];

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim();
  room = room.trim();

  // Validate the data
  if (!username || !room) {
    return {
      error: 'Username and room are required!',
    };
  }

  // Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && username === user.username;
  });

  // Validate username
  if (existingUser) {
    return {
      error: 'Username is in use!',
    };
  }

  // Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

const getRooms = () => {
  const rooms = users.map((user) => user.room);
  return [...new Set(rooms)];
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
  getRooms,
};

// addUser({
//   username: 'Jay',
//   room: '123',
//   id: '12',
// });
// addUser({
//   username: 'Tun',
//   room: '123',
//   id: '13',
// });
// addUser({
//   username: 'Mark',
//   room: '123',
//   id: '14',
// });

// console.log(users);
// console.log(getRooms());
