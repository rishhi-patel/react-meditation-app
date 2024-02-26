import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="lead content mt-4 text-center text-light px-1">
      May I also suggest the
      <a href="/breathing" className="mb-5 lead">
        Breather app{" "}
      </a>
    </footer>
  )
}

export default Footer
