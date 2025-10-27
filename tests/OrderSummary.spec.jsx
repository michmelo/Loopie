import React from "react";
import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import OrderSummary from "../src/components/carrito/OrderSummary";

describe("OrderSummary", () => {
  it("renderiza correctamente los valores de subtotal, envío y total", () => {
    render(
      <MemoryRouter>
        <OrderSummary subtotal="$10.000" envio="$2.000" total="$12.000" />
      </MemoryRouter>
    );

    expect(screen.getByText("Subtotal:")).toBeInTheDocument();
    expect(screen.getByText("$10.000")).toBeInTheDocument();
    expect(screen.getByText("Envío:")).toBeInTheDocument();
    expect(screen.getByText("$2.000")).toBeInTheDocument();
    expect(screen.getByText("Total:")).toBeInTheDocument();
    expect(screen.getByText("$12.000")).toBeInTheDocument();
  });

  it("muestra los botones de navegación", () => {
    render(
      <MemoryRouter>
        <OrderSummary subtotal="$10.000" envio="$2.000" total="$12.000" />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /ir al checkout/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /continuar comprando/i })).toBeInTheDocument();
  });
});
