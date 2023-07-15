// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms

  _roomList: [],
  roomObj: {},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function(roomname) {
    Rooms._roomList = Object.keys(Rooms.roomObj);
    if (!Rooms._roomList.includes(roomname)) {
      Rooms._roomList.push(roomname);
      Rooms.roomObj[roomname] = [];
    }
  },


  // that is the format of data
  // [{message_id: 113569, roomname: 'main room', text: 'climbing for banana', username: 'monke', github_handle: 'vinvinn', …}]
  makeRoomObj: function(data) {
    console.log('make roomObj here');
    for (message of data) {
      var roomName = message.roomname;
      if (!this.roomObj.hasOwnProperty(roomName)) {
        // add roomName key and initialize an empty array
        this.roomObj[roomName] = [];
        this.roomObj[roomName].push(message);
      } else {
        this.roomObj[roomName].push(message);
      }
    }
    console.log(Rooms.roomObj);
  }


};