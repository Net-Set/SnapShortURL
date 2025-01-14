import Link from "next/link"
import { Label } from "../../components/uilabel"
import { Input } from "../../components/uiinput"
import { Textarea } from "../../components/uitextarea"
import { Button } from "../../components/uibutton"

export default function Component() {
  return (
    <div key="1" className="bg-white text-gray-700 pt-10">
      <main className="flex-1">
      <section className="container mx-auto px-4 py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Welcome to SnapshortURL <span className="text-primary"></span>Support
                </h1>
                <p className="mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We&apos;re here to help. Find answers to your questions or contact our support team.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <div className="lg:ml-24 lg:mr-24 grid grid-cols-1 lg:grid-cols-1">
            <div className="space-y-4">
              <div className="space-y-2">
                <button className="flex items-center justify-between w-full p-4 rounded-lg bg-gray-50 hover:bg-gray-50/90 focus:outline-none  dark:hover:bg-gray-800 dark:focus:outline-none">
                  <span className="font-medium">How do I create a custom short URL?</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                <div className="p-4 rounded-lg bg-gray-50 text-sm">
                  To create a custom short URL, log in to your account and go to the dashboard. Click on the &quot;Create
                  Short URL&quot; button and enter the original URL you want to shorten. Then, click on the &quot;Customize&quot;
                  button and enter your desired custom alias. If the alias is available, your custom short URL will be
                  created.
                </div>
              </div>
              <div className="space-y-2">
                <button className="flex items-center justify-between w-full p-4 rounded-lg bg-gray-50 hover:bg-gray-50/90 focus:outline-none  dark:hover:bg-gray-800 dark:focus:outline-none">
                  <span className="font-medium">How do I track the performance of my short URLs?</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                <div className="p-4 rounded-lg bg-gray-50 text-sm ">
                  To track the performance of your short URLs, log in to your account and go to the &quot;Analytics&quot; section.
                  Here, you will see detailed analytics for each of your short URLs, including the number of clicks,
                  geographic location of visitors, referrers, and devices used. You can also generate reports and export
                  data for further analysis.
                </div>
              </div>
              <div className="space-y-2">
                <button className="flex items-center justify-between w-full p-4 rounded-lg bg-gray-50 hover:bg-gray-50/90 focus:outline-none  dark:hover:bg-gray-800 dark:focus:outline-none">
                  <span className="font-medium">Can I edit the destination URL of an existing short URL?</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                <div className="p-4 rounded-lg bg-gray-50 text-sm">
                  Yes, you can edit the destination URL of an existing short URL. Log in to your account and go to the
                  &quot;My URLs&quot; section. Find the short URL you want to edit and click on the&quot;Edit&quot; button. You can then
                  enter the new destination URL and save your changes.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <div className="lg:ml-24 lg:mr-24 grid grid-cols-1 lg:grid-cols-1">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-bold">How do I create a custom short URL?</h3>
                <p className="text-sm dark:text-gray-400">
                  To create a custom short URL, log in to your account and go to the dashboard. Click on the &quot;Create
                  Short URL&quot; button and enter the original URL you want to shorten. Then, click on the &quot;Customize&quot;
                  button and enter your desired custom alias. If the alias is available, your custom short URL will be
                  created.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">How do I track the performance of my short URLs?</h3>
                <p className="text-sm  dark:text-gray-400">
                  To track the performance of your short URLs, log in to your account and go to the &quot;Analytics&quot; section.
                  Here, you will see detailed analytics for each of your short URLs, including the number of clicks,
                  geographic location of visitors, referrers, and devices used. You can also generate reports and export
                  data for further analysis.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Can I edit the destination URL of an existing short URL?</h3>
                <p className="text-sm  dark:text-gray-400">
                  Yes, you can edit the destination URL of an existing short URL. Log in to your account and go to the
                  &quot;My URLs&quot; section. Find the short URL you want to edit and click on the &quot;Edit&quot; button. You can then
                  enter the new destination URL and save your changes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">Contact Support</h2>
              <p className="text-center mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                If you need further assistance, you can contact our support team by filling out the form below.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[500px] space-y-4">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" required type="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Enter the subject of your message" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
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

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
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
