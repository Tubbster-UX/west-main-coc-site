import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div>
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/front-of-building.jpg')" }}
        aria-label="Front of West Main Church Of Christ"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white pl-8 md:pl-24">
          <h1
            className="text-5xl md:text-7xl font-semibold"
            style={{ textShadow: "0px 4px 5px rgba(0, 0, 0, 0.4)" }}
          >
            West Main <br /> Church Of Christ
          </h1>
          <p className="text-2xl mt-4">
            Join us on Sundays at 1pm and Wednesdays at 6:30pm.
          </p>
          <div className="mt-8 flex space-x-4">
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary-dark transition duration-300">
                Contact
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#F2F2F2"
              fillOpacity="1"
              d="M0,224L1440,288L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto py-16 px-4">
        <div className="text-left">
          <h2 className="text-5xl font-semibold py-10">Service Times</h2>
          <div className="text-2xl space-y-4">
            <p>Sundays: 1pm</p>
            <p>Wednesdays: 6:30pm</p>
          </div>
          <div className="mt-8">
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary-dark transition duration-300">
                Contact Us for More Information
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto py-16 px-4">
        <div>
          
        </div>
        <div className="text-left">
          <div className="w-full max-w-2xl">
            <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-4xl font-semibold py-1 italic">Contact Us</h2>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1 space-y-4">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input
                      id="first-name"
                      type="text"
                      className="mt-1 block w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      className="mt-1 block w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="mt-1 block w-full"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input
                      id="last-name"
                      type="text"
                      className="mt-1 block w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      className="mt-1 block w-full h-24"
                    ></Textarea>
                  </div>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full py-2 px-4 bg-primary text-white hover:bg-primary-dark transition duration-300"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}