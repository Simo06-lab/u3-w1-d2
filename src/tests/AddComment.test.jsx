import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import AddComment from "../components/AddComment"

describe("Montaggio iniziale", () => {
  it("renders input, select and button", () => {
    render(<AddComment asin="12345" onNewComment={() => {}} />)

    const input = screen.getByPlaceholderText(/scrivi una recensione/i)
    const select = screen.getByRole("combobox")
    const button = screen.getByText(/invia/i)

    expect(input).toBeInTheDocument()
    expect(select).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})

describe("Interazioni utente", () => {
  it("updates input value when typing", () => {
    render(<AddComment asin="12345" onNewComment={() => {}} />)

    const input = screen.getByPlaceholderText(/scrivi una recensione/i)
    fireEvent.change(input, { target: { value: "Recensione di test" } })

    expect(input.value).toBe("Recensione di test")
  })

  it("updates rate when selecting a new value", () => {
    render(<AddComment asin="12345" onNewComment={() => {}} />)

    const select = screen.getByRole("combobox")
    fireEvent.change(select, { target: { value: "5" } })

    expect(select.value).toBe("5")
  })
})

describe("Invio del form", () => {
  it("sends POST request and resets fields", async () => {
    const mockCallback = vi.fn()

    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      }),
    )

    render(<AddComment asin="12345" onNewComment={mockCallback} />)

    const input = screen.getByPlaceholderText(/scrivi una recensione/i)
    const select = screen.getByRole("combobox")
    const button = screen.getByText(/invia/i)

    fireEvent.change(input, { target: { value: "Test commento" } })
    fireEvent.change(select, { target: { value: "4" } })

    fireEvent.click(button)

    await screen.findByText(/invia/i)

    expect(fetch).toHaveBeenCalledTimes(1)

    expect(mockCallback).toHaveBeenCalled()

    expect(input.value).toBe("")
    expect(select.value).toBe("1")
  })
})
