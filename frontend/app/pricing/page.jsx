import { Button } from "../../components/uibutton"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "../../components/uicard"

export default function Component() {
  return (
    <div key="1" className="bg-white text-gray-700 pt-10 ">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4 text-primary">Our Pricing</h1>
          <p className="mb-8">Choose the best plan for your business. Upgrade, downgrade, or cancel anytime.</p>
        </section>
        <section className="container mx-auto px-4 py-16">
          <div className="lg:ml-32 lg:mr-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>For individuals or small teams starting out.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>500 shortened links per month</li>
                  <li>Basic analytics</li>
                  <li>Community support</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button>Get Started for Free</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For growing businesses who need more power and speed.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Unlimited shortened links</li>
                  <li>Advanced analytics</li>
                  <li>Email support</li>
                  <li>Custom branded links</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button>Start 14-Day Free Trial</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For businesses at scale that require custom solutions.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Everything in Pro</li>
                  <li>Priority support</li>
                  <li>Custom integrations</li>
                  <li>Dedicated account manager</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button>Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}