import { createContext, useState, useEffect, useContext } from "react";

// Cria o contexto
export const Contexto = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const BASE_URL = "http://localhost:3000";

  // useEffect para carregar user e token do localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedToken) setToken(storedToken);
  }, []);

  // Função de login
  const login = (userData, userToken) => {
    // Salva no localStorage
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userToken);

    // Atualiza estados
    setUser(userData);
    setToken(userToken);
  };

  // Função de logout
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  return (
    <Contexto.Provider value={{ user, token, login, logout, BASE_URL }}>
      {children}
    </Contexto.Provider>
  );
};

export const ContextoGlobal = () => useContext(Contexto);