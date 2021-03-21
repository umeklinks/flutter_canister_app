import flutter_canister_app from 'ic:canisters/flutter_canister_app';

flutter_canister_app.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
