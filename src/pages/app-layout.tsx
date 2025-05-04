import type { ReactNode } from "react"
import { Link, useLocation, useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import { Code, LogIn, LogOut, UserPlus } from "lucide-react"
import { useAuth } from "@/context_stores/auth-context"

export default function AppLayout({ children }: { children: ReactNode }) {
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const pathname = location.pathname

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold flex items-center">
              <Code className="mr-2 h-6 w-6" />
              CodeEditor
            </Link>
            <nav className="flex items-center gap-4">
              {user ? (
                <>
                  <Link to="/editor" className={`text-sm ${pathname === "/editor" ? "font-bold" : ""}`}>
                    Editor
                  </Link>
                  <div className="flex items-center gap-2">
                    <span className="text-sm hidden md:inline">Hello, {user.name}</span>
                    <Button variant="outline" size="sm" onClick={handleLogout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login" className={`text-sm ${pathname === "/login" ? "font-bold" : ""}`}>
                    <Button variant="outline" size="sm">
                      <LogIn className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                  <Link to="/register" className={`text-sm ${pathname === "/register" ? "font-bold" : ""}`}>
                    <Button variant="outline" size="sm">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CodeEditor. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
