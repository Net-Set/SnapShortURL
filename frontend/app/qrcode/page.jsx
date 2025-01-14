import { Button } from "../../components/uibutton"
import { Input } from "../../components/uiinput"
import { CardTitle, CardDescription, CardHeader, Card } from "../../components/uicard"
import Testimonial from "../../components/uiTestimonial"
import UsageStatistics from "../../components/uiUsageStatistics"

export default function Component() {
  return (
    <div key="1" className="bg-white text-gray-700 py-36">
      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4 text-purple">Create your <span className="text-primary">QR</span> Code</h1>
          <p className="mb-8">
            Generate your own QR Code in just a few steps. Customize it to your liking and share it anywhere.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline">Create QR Code</Button>
          </div>
        </section>
        <section className="bg-gray-100 py-16 lg:px-0 md:px-0 px-10">
          <div className="container mx-auto lg:px-40 md:px-20 sm:px-0">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4 text-center">Create a QR Code</h2>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <Input placeholder="Enter your link here" />
                <Button>Generate QR Code</Button>
              </div>
              <p className="text-center mt-4">
                Your QR Code will be generated instantly. You can customize it further in the next step.
              </p>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why use QR Codes?</h2>
          <div className="lg:ml-32 lg:mr-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Easy Access</CardTitle>
                <CardDescription>
                  QR Codes provide a quick and easy way to access websites or information.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Customizable</CardTitle>
                <CardDescription>
                  Customize your QR Code with colors, logos, and more to match your brand.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Trackable</CardTitle>
                <CardDescription>Track the usage of your QR Code and gain valuable insights.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
        <section className="bg-gray-100 py-16">
          <UsageStatistics />
        </section>
        <Testimonial/>
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-16 text-center">Frequently asked questions</h2>
          <div className="space-y-9 lg:space-x-80 md:space-x-40">
            <details>
              <summary className="font-bold cursor-pointer">What is a URL shortener?</summary>
              <p>
                A URL shortener is a tool that creates a short, unique URL that will redirect to the specified webpage
                when accessed.
              </p>
            </details>
            <details>
              <summary className="font-bold cursor-pointer">What is a custom URL shortener?</summary>
              <p>
                A custom URL shortener allows you to brand your short links with your chosen domain name, providing a
                consistent identity for your links.
              </p>
            </details>
            <details>
              <summary className="font-bold cursor-pointer">What is a QR Code?</summary>
              <p>
                A QR Code is a two-dimensional barcode that can be scanned using a smartphone camera to quickly access a
                webpage or app.
              </p>
            </details>
            <details>
              <summary className="font-bold cursor-pointer">What is a Link-in-bio?</summary>
              <p>
                A Link-in-bio is a single link that directs followers to a curated page with multiple links, often used
                on social media profiles.
              </p>
            </details>
            <details>
              <summary className="font-bold cursor-pointer">Why choose SnapshortURL?</summary>
              <p>
                SnapshortURL offers robust link management features, detailed analytics, and a wide range of integrations,
                making it a top choice for businesses and individuals.
              </p>
            </details>
          </div>
        </section>
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Beyond just a free URL shortening service</h2>
            <Button className="bg-white text-black hover:bg-purple hover:text-white border-white hover:bg-primary hover:border-white border-2">Get Started</Button>
          </div>
        </section>
      </main>
    </div>
  )
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
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
