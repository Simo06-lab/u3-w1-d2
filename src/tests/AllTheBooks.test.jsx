import { describe, it, expect } from "vitest"
import { render, screen, within } from "@testing-library/react"
import AllTheBooks from "../components/AllTheBooks"
import books from "../data/horror.json"

describe("Montaggio iniziale", () => {
  it("renders section titles", () => {
    render(<AllTheBooks />)

    expect(screen.getByText(/top picks/i)).toBeInTheDocument()
    expect(screen.getByText(/more horrors/i)).toBeInTheDocument()
  })

  it("renders the two rows", () => {
    render(<AllTheBooks />)

    const row1 = screen.getByTestId("row1")
    const row2 = screen.getByTestId("row2")

    expect(row1).toBeInTheDocument()
    expect(row2).toBeInTheDocument()
  })
})

describe("Contenuto delle righe", () => {
  it("renders 150 book images", () => {
    render(<AllTheBooks />)

    const images = screen.getAllByAltText(/./)
    expect(images.length).toBe(150)
  })

  it("renders book titles and prices", () => {
    render(<AllTheBooks />)

    const firstBook = books[0]

    const firstCard = screen.getAllByRole("img")[0].closest(".card")

    const title = within(firstCard).getByText(firstBook.title.slice(0, 40), {
      exact: false,
    })

    const price = within(firstCard).getByText(`€${firstBook.price}`)

    expect(title).toBeInTheDocument()
    expect(price).toBeInTheDocument()
  })
})

describe("Bottoni freccia", () => {
  it("renders left and right arrows for both rows", () => {
    render(<AllTheBooks />)

    const arrows = screen.getAllByRole("button")
    expect(arrows.length).toBe(4)
  })
})
