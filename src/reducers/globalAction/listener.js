import { loginAction } from "./actions.js";

export async function handleLogin(event) {
  event.preventDefault(); // prevent page reload if used with forms

  const username = event.target.username.value;
  const password = event.target.password.value;

  try {
    const data = await loginAction(username, password);
    console.log("Login success:", data);
    alert("Login successful!");
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
}