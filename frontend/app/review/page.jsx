import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "../../components/ui/card"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Select } from "../../components/ui/select"
import { Textarea } from "../../components/ui/textarea"
import { Button } from "../../components/ui/button"

export default function Component() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-36 text-black">
      <Card className="w-full max-w-lg mx-auto bg-white">
        <CardHeader>
          <CardTitle className="text-2xl">Submit your review for SnapshortURL</CardTitle>
          <CardDescription>We value your feedback. Let us know what you think about our services.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rating">Rating</Label>
            <Select id="rating">
              <option>Choose a rating</option>
              <option>⭐️</option>
              <option>⭐️⭐️</option>
              <option>⭐️⭐️⭐️</option>
              <option>⭐️⭐️⭐️⭐️</option>
              <option>⭐️⭐️⭐️⭐️⭐️</option>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter your title" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="review">Review</Label>
            <Textarea className="min-h-[100px]" id="review" placeholder="Enter your review" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="file">Attach a file</Label>
            <Input accept="image/*" id="file" type="file" />
          </div>
        </CardContent>
        <CardFooter>
          <Button >Submit Review</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

