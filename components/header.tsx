import { useRouter } from "next/router";
import {Button, Navbar} from "flowbite-react";

const Header = () => {
    const router = useRouter();
  return (
      <header className="mx-auto max-w-screen-xl">
              <Navbar rounded={true}>
                  <Navbar.Brand href="/">
                      <img src="/assets/logo.svg" className="mr-3 h-6 sm:h-9" alt="Independence DEV Logo"/>
                  </Navbar.Brand>
                  <div className="flex md:order-2">
                      <Button disabled={true}>Labs 🧪</Button>
                      <Navbar.Toggle />
                  </div>
                  <Navbar.Collapse>
                      <Navbar.Link href="/" active={router.pathname == "/" ? true : false}>Accueil</Navbar.Link>
                      <Navbar.Link href="/blog" active={router.pathname == "/blog" ? true : false}>Le blog</Navbar.Link>
                      <Navbar.Link href="https://formations.independence-dev.com/">Formations</Navbar.Link>
                  </Navbar.Collapse>
              </Navbar>
      </header>
  )
}

export default Header