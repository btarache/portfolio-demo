import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";


export default async function Footer() {
  const profile: ProfileType[] = await getProfile();
    
  return (
      <footer className="border-t border-zinc-800 mt-44">
        {profile &&
        profile.map((data) => (
          
        <div key={data._id} className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
          <small className=" duration-200 font-mono">
            All rights reserved &copy; {new Date().getFullYear()}
          </small>
  
          <small className="hover:text-white duration-200">
            <a
              href="https://github.com/Evavic44/sanity-nextjs-site"
              target="_blank"
              rel="noreferrer noopener"
            >
              Prepared by <span className="text-green-400">{data.fullName}</span>
            </a>
          </small>
        </div>
        ))}
      </footer>
    );
  }