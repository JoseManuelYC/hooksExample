import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Prueba en el <LoginPage />", () => {
  const user = {
    name: "Jose",
    age: 24,
  };

  beforeEach = () => jest.clearAllMocks();
  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    expect(screen.getByLabelText("pre").innerHTML).toBe("null");
  });
  test("Debe de mostrar el componente CON el usuario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <LoginPage />
      </UserContext.Provider>
    );
    expect(screen.getByLabelText("pre").innerHTML).toContain(user.name);
    expect(screen.getByLabelText("pre").innerHTML).toContain(
      user.age.toString()
    );
  });
  test("Debe de llamar al setUser cuando se hace click en el button", () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const btnElement = screen.getByRole("button");
    fireEvent.click(btnElement);
    expect(setUserMock).toHaveBeenCalledWith({ name: "Messi", age: "35" });
    expect(setUserMock).toHaveBeenCalled();
  });
});
