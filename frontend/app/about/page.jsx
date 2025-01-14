import Link from "next/link"
import { Input } from "../../components/ui//input"
import { Button } from "../../components/ui/button"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-black">
      <main className="flex-1">
        <section className="w-full py-24 md:py-24 lg:py-32 xl:py-48">
          <div className="container space-y-6 px-4 md:px-6 text-center lg:space-y-10">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl "><span className="text-primary">About</span> snapshorturl</h1>
              <p className="mx-auto max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-black-400">
                The most powerful URL shortener. Turn long links into short ones that are easy to share. Embed tracking
                pixels, add UTM tags, and customize your links.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full md:py-24 py-10 lg:py-32 border-t border-gray-200 bg-gray-100">
          <div className="container space-y-6 px-4 md:px-6 lg:space-y-10">
            <div className="space-y-4 text-center lg:space-y-6 ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Our Story</h2>
              <p className="mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                snapshorturl was created with the goal of making long URLs shorter and more shareable. Our team of
                developers and designers wanted to provide a simple and user-friendly platform for everyone to convert
                their links into something more manageable.
              </p>
            </div>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 ">
              <div className="space-y-4 shadow-md p-10 rounded-md">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className=" md:text-xl/relaxed xl:text-xl/relaxed ">
                  We are committed to providing the best URL shortening service to our users. Our mission is to make
                  every link short, simple, and powerful. We aim to offer additional features and customization options
                  to enhance the value of our service.
                </p>
              </div>
              <div className="space-y-4 shadow-md p-10 rounded-md">
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className=" md:text-xl/relaxed xl:text-xl/relaxed ">
                  We envision snapshorturl becoming the go-to platform for link shortening and management. We want to
                  empower our users with tools to track and analyze their links, as well as provide branded and
                  customized short URLs for businesses and individuals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-6 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Key Features</h2>
              <p className="mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                snapshorturl offers a range of features to make your links more powerful. Here are some of the key
                features:
              </p>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Custom Short URLs</h3>
                <p className="text-sm  dark:text-gray-400">
                  Create branded short links with your own domain for a professional appearance.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Link Analytics</h3>
                <p className="text-sm  dark:text-gray-400">
                  Track clicks, geographic location, and referral sources to gain insights into link performance.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Custom Short URLs</h3>
                <p className="text-sm  dark:text-gray-400">
                  Create branded short links with your own domain for a professional appearance.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Link Analytics</h3>
                <p className="text-sm  dark:text-gray-400">
                  Track clicks, geographic location, and referral sources to gain insights into link performance.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Custom Short URLs</h3>
                <p className="text-sm  dark:text-gray-400">
                  Create branded short links with your own domain for a professional appearance.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Link Analytics</h3>
                <p className="text-sm  dark:text-gray-400">
                  Track clicks, geographic location, and referral sources to gain insights into link performance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-200 bg-gray-100 ">
          <div className="container space-y-6 px-4 md:px-6">
            <div className="space-y-4 text-center lg:space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Try snapshorturl</h2>
              <p className="mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Experience the power of shortening your links with snapshorturl. Sign up for an account and get access
                to all our features.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs  dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-200 ">
          <div className="container space-y-6 px-4 md:px-6">
            <div className="space-y-4 text-center lg:space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Contact Us</h2>
              <p className="mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have questions or feedback? Contact our support team.
              </p>
            </div>
            <div className="mx-auto max-w-[400px] space-y-4">
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" required type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your message</Label>
                  <Textarea className="min-h-[150px] resize-y" id="message" placeholder="Enter your message" required />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
