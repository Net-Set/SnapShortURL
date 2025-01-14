import { Label } from "../../components/uilabel"
import { Input } from "../../components/uiinput"
import { Button } from "../../components/uibutton"

export default function Component() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center mt-10">
      <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl text-black font-bold">Contact Us</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            We did love to hear from you. Please fill out the form below and we will get back to you as soon as possible.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" placeholder="John Doe" required type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Your Email</Label>
            <Input id="email" placeholder="johndoe@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              className="w-full h-20 p-2 rounded-md border border-gray-200 dark:border-gray-700"
              id="message"
              placeholder="Your message..."
              required
            />
          </div>
          <Button className="w-full  text-white">
            <div className="flex items-center justify-center">
              <SendIcon className="w-5 h-5 mr-2" />
              Send Message
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

function SendIcon(props) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}
