export default function (state = {}, action) {
  // console.trace(state);
  switch (action.type) {
    case "Option clicked":
      return action.payload;
    // break;
    default:
      return 'Option clicked';
  }
  //return state;
}