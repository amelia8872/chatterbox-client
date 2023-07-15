// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _friendsList: new Set(),
  // choose the username dom


  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  add: function(username) {
    Friends._friendsList.add(username);
  },

  isFriend: function(username) {
    return Friends._friendsList.has(username);
  },

  toggleStatus: function(username) {
    if (Friends.isFriend(username)) {
      Friends.remove(username);
    } else {
      Friends.add(username);
    }
  },

  remove: function(username) {
    Friends._friendsList.delete(username);
  }



};