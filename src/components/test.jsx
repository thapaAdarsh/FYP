
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover the Best Flavors in Town
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore our mouthwatering menu of expertly crafted dishes made with the freshest ingredients. Satisfy
                  your cravings and indulge in the ultimate dining experience.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Menu
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              height="600"
              src="/placeholder.svg"
              width="800"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Our Specialty Dishes
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Savor the Flavors</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Indulge in our expertly crafted dishes made with the freshest ingredients and innovative culinary
                techniques.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              alt="Dish"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Grilled Salmon with Lemon Butter</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Succulent salmon fillet grilled to perfection, served with a tantalizing lemon butter sauce.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Vegetable Stir-Fry with Tofu</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      A vibrant medley of fresh vegetables and crispy tofu, stir-fried in a savory sauce.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Classic Beef Bolognese</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Slow-simmered beef in a rich tomato sauce, served over perfectly al dente pasta.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from our satisfied customers and discover why they keep coming back to our restaurant.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Satisfied Customer</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal">
                  “The food at this restaurant is simply amazing! The flavors are so well-balanced and the presentation
                  is impeccable. I can't wait to come back.”
                </blockquote>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage alt="Jane Smith" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Jane Smith</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Loyal Customer</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal">
                  “I've been coming to this restaurant for years, and the quality of the food and service has never
                  disappointed. It's my go-to spot for any occasion.”
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}