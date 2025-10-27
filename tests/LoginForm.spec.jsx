import { describe, it, expect, vi } from 'vitest';
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../src/components/auth/LoginForm";

describe("LoginForm", () => {
  it("renderiza correctamente los campos de usuario y contraseña", () => {
    render(
      <LoginForm id="" password="" setId={() => {}} setPassword={() => {}} handleLogin={() => {}} />
    );
    expect(screen.getByPlaceholderText("Usuario o correo")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Contraseña")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ingresar/i })).toBeInTheDocument();
  });

  it("actualiza el valor de los campos al escribir", () => {
    const mockSetId = vi.fn();
    const mockSetPassword = vi.fn();
    render(
      <LoginForm id="" password="" setId={mockSetId} setPassword={mockSetPassword} handleLogin={() => {}} />
    );
    fireEvent.change(screen.getByPlaceholderText("Usuario o correo"), { target: { value: "usuario123" } });
    fireEvent.change(screen.getByPlaceholderText("Contraseña"), { target: { value: "secreto" } });
    expect(mockSetId).toHaveBeenCalledWith("usuario123");
    expect(mockSetPassword).toHaveBeenCalledWith("secreto");
  });

  it("ejecuta handleLogin al enviar el formulario", () => {
    const mockHandleLogin = vi.fn((e) => e.preventDefault());
    render(
      <LoginForm id="usuario123" password="secreto" setId={() => {}} setPassword={() => {}} handleLogin={mockHandleLogin} />
    );
    // disparar submit clickeando el botón (más fiable que buscar "role=form")
    fireEvent.click(screen.getByRole("button", { name: /ingresar/i }));
    expect(mockHandleLogin).toHaveBeenCalled();
  });
});
