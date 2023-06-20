"use client"

import Footer from "./components/footer.component"
import HeaderBar from "./components/headerBar.components"
import Navigations from "./components/navigations.component"
import SearchSection from "./components/searchSection.component"

export default function Home() {
  return (
    <>
      <HeaderBar />
      <SearchSection />
      <Navigations />
      <Footer />
    </>
  )
}