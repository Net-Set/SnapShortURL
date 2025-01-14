import Link from "next/link"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"

export default function Component() {
    return (
        <div className="bg-white text-gray-700 py-36">
            <section className="container py-16 space-y-4 text-center">
                <div className="mx-auto max-w-2xl space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">The Power of the Link</h1>
                    <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        The world&apos;s leading link management platform. Shorten, brand, and optimize your links with snapshorturl.
                    </p>
                </div>
                <div className="mx-auto max-w-sm space-y-4">
                    <form className="mx-auto flex space-x-2">
                        <Input placeholder="Enter your email" required type="email" />
                        <Button type="submit">Get Started</Button>
                    </form>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Try snapshorturl for free. No credit card required.</p>
                </div>
            </section>
            <section className="container py-16 space-y-12 md:py-24 lg:py-32">
                <div className="grid max-w-3xl gap-8 px-4 mx-auto items-start text-center md:grid-cols-2 md:gap-12 md:px-6 lg:max-w-5xl lg:gap-16 xl:max-w-6xl">
                    <div className="space-y-4 shadow-gray-400 rounded-lg border bg-card text-card-foreground shadow-sm p-10">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Power of the Partner</h2>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            snapshorturl partners with leading technology and service providers to help our customers unlock the power of the
                            link. Our partner program provides the tools, resources, and support to help you build innovative
                            solutions, drive growth, and create new revenue streams.
                        </p>
                    </div>
                    <div className="grid gap-4 shadow-gray-400 shadow-sm p-10 rounded-md">
                        <div className="grid gap-1">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Benefits</h2>
                            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                As a snapshorturl partner, you&apos;ll gain access to a range of benefits designed to help you drive growth,
                                including:
                            </p>
                        </div>
                        <ul className="grid gap-2 list-disc list-inside text-left">
                            <li>Co-marketing opportunities</li>
                            <li>Access to snapshorturl&apos;s industry-leading link management platform</li>
                            <li>Technical support and training</li>
                            <li>Lead sharing and joint selling opportunities</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gray-100 md:py-24 lg:py-32 dark:bg-gray-100 ">
                <div className="container grid items-center gap-4 px-4 justify-center md:px-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Join the Program</h2>
                        <p className="max-w-[700px] text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 ">
                            Ready to unlock the power of the link? Complete the form to apply to the snapshorturl partner program. Once we&apos;ve
                            reviewed your application, we&apos;ll be in touch to discuss the next steps.
                        </p>
                    </div>
                    <div className="mx-auto max-w-md space-y-4">
                        <form className="grid gap-4">
                            <Input id="name" placeholder="Name" />
                            <Input id="company" placeholder="Company" />
                            <Input id="email" placeholder="Email" type="email" />
                            <Button type="submit">Apply Now</Button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="container space-y-12 md:py-24 lg:py-20">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Power of the Link</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            The world&apos;s leading link management platform. Shorten, brand, and optimize your links with snapshorturl.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Infinite scalability, zero config</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Enable code to run on-demand without needing to manage your own infrastructure or upgrade hardware.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Real-time insights and controls</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Get granular, first-party, real-user metrics on site performance per deployment.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Personalization at the edge</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Deliver dynamic, personalized content, while ensuring users only see the best version of your site.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Real-time insights and controls</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Get granular, first-party, real-user metrics on site performance per deployment.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Personalization at the edge</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Deliver dynamic, personalized content, while ensuring users only see the best version of your site.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold">Infinite scalability, zero config</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Enable code to run on-demand without needing to manage your own infrastructure or upgrade hardware.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                    <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="#"
                    >
                        Contact Sales
                    </Link>
                    <Button>
                        Tour the Platform
                    </Button>
                </div>
            </section>
        </div>
    )
}

function FlagIcon(props) {
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
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
    )
}


function StarIcon(props) {
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
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
