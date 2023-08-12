import { useState } from "react";

export default function FormsNormal() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChanege = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };

  const onEmailChanege = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setEmail(value);
  };
  const onPasswordChanege = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setPassword(value);
  };

  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={username}
        onChange={onUsernameChanege}
        type="text"
        placeholder="Username"
        required
      />
      <input
        value={email}
        onChange={onEmailChanege}
        type="email"
        placeholder="Email"
        required
      />
      <input
        value={password}
        onChange={onPasswordChanege}
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" value="Create Account (React)" />
    </form>
  );
}
