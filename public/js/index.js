const socket = io();

//Elements
const $select = document.getElementById('room-select');

selectRoomTemplate = document.getElementById('select-template').innerHTML;

socket.on('roomsData', ({ rooms }) => {
  console.log(rooms);
  const html = Mustache.render(selectRoomTemplate, rooms);
  document.getElementById('room-select').innerHTML = html;
});
