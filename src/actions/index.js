export const selectOption = (user) => {
    window.currentOption = user.id;
  //  console.log("you clicked", user.name);
    return {
        type: "Option clicked",
        payload: user
    }
};