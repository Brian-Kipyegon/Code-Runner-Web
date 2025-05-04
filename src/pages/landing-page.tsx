import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context_stores/auth-context"
import AppLayout from "./app-layout"
import { Code, Cpu, Globe, Layers } from "lucide-react"

export default function LandingPage() {
  const { user } = useAuth()
  const router = useNavigate()

  return (
    <AppLayout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Code Anywhere, <span className="text-primary">Anytime</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            A powerful browser-based code editor with support for multiple languages, syntax highlighting, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => router(user ? "/editor" : "/register")} className="text-lg px-8">
              {user ? "Go to Editor" : "Get Started"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => router(user ? "/editor" : "/login")}
              className="text-lg px-8"
            >
              {user ? "Continue Coding" : "Try Demo"}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="mb-4 text-primary">
                <Code className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Languages</h3>
              <p className="text-muted-foreground">
                Support for JavaScript, TypeScript, Python, and many more programming languages.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="mb-4 text-primary">
                <Layers className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Syntax Highlighting</h3>
              <p className="text-muted-foreground">Beautiful syntax highlighting powered by the Monaco Editor.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="mb-4 text-primary">
                <Cpu className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Code Execution</h3>
              <p className="text-muted-foreground">
                Run your code directly in the browser and see the results instantly.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="mb-4 text-primary">
                <Globe className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Saving</h3>
              <p className="text-muted-foreground">
                Save your code snippets to the cloud and access them from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start coding?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of developers who use our platform to code, learn, and collaborate.
          </p>
          <Button size="lg" onClick={() => router.push(user ? "/editor" : "/register")} className="text-lg px-8">
            {user ? "Go to Editor" : "Sign Up Now"}
          </Button>
        </div>
      </section>
    </AppLayout>
  )
}
