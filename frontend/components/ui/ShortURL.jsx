'use client'
import React, { useState } from 'react'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Badge } from "../../components/ui/badge"

export default function ShortURL() {
    const [URL, setURL] = useState('');
    const [result, setResult] = useState();
    const [copy, setCopy] = useState();


    async function fetchData(URL) {
        try {
            const response = await fetch(`https://stingray-app-ud7yw.ondigitalocean.app/url`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "URL": URL
                })
            }); 

            if (response.ok) {
                const data = await response.json();
                setResult(`https://stingray-app-ud7yw.ondigitalocean.app/${data.id}`);
            } else {
                console.error('Error:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    const handleCopy = () => {
        if (result) {
            setCopy(result);
            navigator.clipboard.writeText(result);
        }
    }


    return (
        <section className="bg-gray-100 py-16 lg:px-0 md:px-0 px-10">
            <div className="container mx-auto lg:px-40 md:px-20 sm:px-0">
                <h2 className="text-3xl font-bold mb-4 text-center">
                    Create a concise link.</h2>
                <div
                    className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-2 sm:space-x-0">
                    <Input placeholder="Example: http://super-long-link.com/shorten-it" onChange={(e) => setURL(e.target.value)} value={URL} />
                    <Button className="w-full lg:full" onClick={() => fetchData(URL)}>Sign up and get your link</Button>
                    <Input placeholder="example: favorite-link" value={result} />
                    <Button className="w-full" onClick={() => handleCopy()}>{
                        copy ? `Copied` : `copy URL`
                    }
                    </Button>

                </div>
                <p className="text-center mt-4">Finish your hyperlink with phrasing that adds distinctiveness to it.</p>
                <div className="mt-8 text-center">
                    <p className="font-bold">No need for a credit card. Our complimentary plan offers:</p>
                    <div className="flex justify-center space-x-4 mt-4 text-white">
                        <Badge>Short links</Badge>
                        <Badge>QR Codes</Badge>
                        <Badge>Link-in-bio page</Badge>
                    </div>
                </div>
            </div >
        </section >
    )
}
