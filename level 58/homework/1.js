let role = "moderator";
switch (role) {
  case "admin":
    console.log("You Have Full Access");
    break;
  case "moderator":
    console.log("You Can Manage The Content");
    break;
  case "user":
    console.log("You Can View The Content");
    break;
  default:
    console.log("Access Denied or Invalid Role");
}