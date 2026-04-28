const MyFooter = function () {
  return (
    <footer
      className="text-center py-3 mt-4"
      style={{ backgroundColor: "#1a1a2e", color: "#e0e0e0" }}
    >
      <p className="m-0 fs-6">
        HorrorBooks Shop &mdash; © {new Date().getFullYear()} — All rights
        reserved
      </p>
    </footer>
  )
}

export default MyFooter
