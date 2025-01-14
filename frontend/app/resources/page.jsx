import { Button } from "../../components/uibutton"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "../../components/uicard"

export default function Component() {
  return (
    <div key="1" className="bg-white text-gray-700 pt-10">
      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4 text-primary">Resources</h1>
          <p className="mb-8">Explore our range of resources. Learn more about our products and how to use them.</p>
        </section>
        <section className="container mx-auto px-4 py-16">
          <div className="lg:ml-32 lg:mr-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Guides</CardTitle>
                <CardDescription>Comprehensive guides to get you started with our products.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Getting Started</li>
                  <li>Product Usage</li>
                  <li>Advanced Features</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button>Explore Guides</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Tutorials</CardTitle>
                <CardDescription>Step-by-step tutorials to help you make the most of our platform.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Link Shortening</li>
                  <li>Mobile Link Management</li>
                  <li>API Integration</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button>View Tutorials</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>FAQs</CardTitle>
                <CardDescription>Answers to frequently asked questions about our services.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Account Management</li>
                  <li>Billing and Pricing</li>
                  <li>Technical Issues</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button>Read FAQs</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
