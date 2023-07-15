// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  // Jquery choosing the "<div id="chats"></div>"
  $chats: $('#chats'),


  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', '.username', function(event) {
      console.log('username add friend clicked!');
      var username = event.currentTarget.textContent;
      Friends.toggleStatus(username);
    });

  },

  render: function(messageArray) {
    // TODO: Render _all_ the messages.
    // console.log(Messages._data);
    // console.log('here running messagesViews.render()');

    // Iterate through the messages array
    for (var i = 0; i < messageArray.length; i++) {
      var message = messageArray[i];
      // console.log(message);
      MessagesView.renderMessage(message);


      // use messageView.render to transfer message to html template
      // var messageHTML = MessageView.render();
      // console.log(messageHTML);

      // this.$chats.prepend(messageHTML);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // var messageText = message.text;
    // console.log('messageText:' + messageText);
    // var roomVal = message.roomname;
    // console.log('roomVal:' + roomVal);
    // var username = message.username;
    // console.log('username:' + username);


    // transfer a single message to html format
    var messageHTML = MessageView.render(message);
    // console.log(messageHTML);

    // add the message to html
    this.$chats.prepend(messageHTML);



  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};