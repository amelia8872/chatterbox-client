// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  // Add Room button
  $button: $('#rooms button'),
  // choose room
  // html syntax:
  // <select id="dropdown">
  //   <option value="option1">Option 1</option>
  //   <option value="option2">Option 2</option>
  //   <option value="option3">Option 3</option>
  // </select>
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$select.on('change', this.handleChange);
    RoomsView.$button.on('click', this.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.empty();

    var roomList = Object.keys(Rooms.roomObj);
    console.log('all the room list: ' + roomList);
    for (var i = 0; i < roomList.length; i++) {
      var singleRoom = roomList[i];
      RoomsView.$select.append(`<option>${singleRoom}</option>`);
    }


  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // console.log('renderRoom');
    // MessagesView.$chats.empty();

    // for (var i = 0; i < messages.length; i++) {
    //   MessagesView.renderMessage(messages[i]);
    // }

    RoomsView.$select.append(`<option>${roomname}</option>`);
    //


  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // empty the messagesView
    MessagesView.$chats.empty();

    // display the message for specific room
    // RoomsView.renderRoom($('#rooms select').val());
    MessagesView.render(Rooms.roomObj[$('#rooms select').val()]);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var newRoom = $('input:text').val();
    Rooms.add(newRoom);
    RoomsView.render();
    RoomsView.$select.val(newRoom);
  }

};
