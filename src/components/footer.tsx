import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground p-10">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8">
          <Logo className="fill-white h-14" />
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-semibold">Contact us</h2>
            <div className="space-y-2">
              <p>(605) 646-3347</p>
              <p>contact@rapidcitycoc.org</p>
              <p>1823 W Main St, Rapid City, SD 57701</p>
            </div>
          </div>
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-semibold">Service Times</h2>
            <div className="space-y-2">
              <p>Sundays: 1pm</p>
              <p>Wednesdays: 6:30pm</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} West Main Church Of Christ. All rights reserved.</p>
          <p>
            Designed by{" "}
            <Link href="https://www.brinkdesign.co" className="underline hover:text-secondary">
              Brink Design
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}