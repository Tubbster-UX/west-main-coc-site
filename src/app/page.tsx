import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/front-of-building.jpg')" }} aria-label="Front of West Main Church Of Christ">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white pl-8 md:pl-24">
          <h1 className="text-5xl md:text-7xl font-semibold" style={{ textShadow: '0px 4px 5px rgba(0, 0, 0, 0.4)' }}>West Main <br></br> Church Of Christ</h1>
          <p className="text-2xl">
            Join us on Sundays at 1pm and Wednesdays at 6:30pm.
          </p>
          <div className="mt-8 flex space-x-4">
            <Link href="/contact" className="flex items-center space-x-2">
              <Button>Contact</Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#F2F2F2" fill-opacity="1" d="M0,224L1440,288L1440,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      <section className="w-2/3 mx-auto py-16 bg-gray-100">
        <h2 className="text-6xl font-semibold py-10 pl-8 md:pl-24">Service Times</h2>
        <div className="text-2xl pl-8 md:pl-24">
          <p>Sundays: 1pm</p>
          <p>Wednesdays: 6:30pm</p>
          <div className="mt-8">
            <Link href="/contact" className="flex items-center space-x-2">
              <Button>Contact Us for More Information</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}