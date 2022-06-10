import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import * as renderer from "react-test-renderer";
import { GameSetup } from "./components/GameSetup";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { UserDashboard } from "./components/UserDashboard";
import { store } from "./redux/store";

const MockEnvironment = ({
  children,
}: React.PropsWithChildren<Record<never, never>>) => {
  (window as any).google = {
    accounts: {
      id: {
        initialize: () => {},
        renderButton: () => {},
      },
    },
  };

  return (
    <>
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    </>
  );
};

test("Login", () => {
  renderer.create(
    <MockEnvironment>
      <Login />
    </MockEnvironment>
  );
});

test("GameSetup", () => {
  renderer.create(
    <MockEnvironment>
      <GameSetup />
    </MockEnvironment>
  );
});

test("Signup", () => {
  renderer.create(
    <MockEnvironment>
      <Signup />
    </MockEnvironment>
  );
});

test("UserDashboard", () => {
  renderer.create(
    <MockEnvironment>
      <UserDashboard />
    </MockEnvironment>
  );
});
