"use client";

import React from "react";
import CurvedLoop from "../animations/CurvedLoop";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-boston-blue-600 text-custom-white">
      <div className="h-24 md:h-32 lg:h-56 flex items-center overflow-hidden">
        <CurvedLoop
          marqueeText="LVBICE  2026 ✦ "
          speed={1}
          curveAmount={180}
          direction="right"
          interactive
        />
      </div>

      <div className="max-w-7xl mx-auto pt-3 px-6">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <p className="font-semibold">Quick Links</p>

              <ul className="mt-5 space-y-4 text-sm font-light tracking-wide">
                <li>
                  <Link href="#" className="hover:text-boston-blue-200">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-boston-blue-200">
                    About
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-boston-blue-200">
                    Register
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Legal</p>

              <ul className="mt-5 space-y-4 text-sm font-light tracking-wide">
                <li>
                  <Link href="#" className="hover:text-boston-blue-200">
                    Disclaimer
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-boston-blue-200">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-boston-blue-200">
                    Cookies Policy
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-boston-blue-200">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div></div>

            <div></div>

            <div>
              <p className="font-semibold">Socials</p>

              <div className="flex flex-wrap items-center gap-4 text-2xl mt-5">
                <Link
                  href="#"
                  className="border border-custom-white p-2.5 rounded-full hover:text-custom-ivory/60"
                >
                  <FaWhatsapp />
                </Link>

                <Link
                  href="#"
                  className="border border-custom-white p-2.5 rounded-full hover:text-custom-ivory/60"
                >
                  <FaLinkedin />
                </Link>

                <Link
                  href="#"
                  className="border border-custom-white p-2.5 rounded-full hover:text-custom-ivory/60"
                >
                  <FaFacebook />
                </Link>

                <Link
                  href="#"
                  className="border border-custom-white p-2.5 rounded-full hover:text-custom-ivory/60"
                >
                  <FaXTwitter />
                </Link>

                <Link
                  href="#"
                  className="border border-custom-white p-2.5 rounded-full hover:text-custom-ivory/60"
                >
                  <FaTiktok />
                </Link>
              </div>
            </div>
          </div>

          <div className="py-2">
            <div className="font-albert font-medium text-balance text-sm text-center">
              Copyright © 2026 - Lake Victoria Basin International Conference
              and Exhibition (LVBICE). All Rights Reserved. Powered by{" "}
              <Link href="#" className="hover:text-custom-ivory/60">
                LVBICE Secretariat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
