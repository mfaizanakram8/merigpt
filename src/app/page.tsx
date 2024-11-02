"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div className="relative overflow-hidden">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center mt-36"
        >
          {/* Text with gradient effect */}
          <h1 className=" mt-20 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            <motion.div
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              {/* Image positioned within the LampContainer */}
              <Image
                src="/assets/mt.png"
                alt="png"
                width={500}
                height={50}
                className="block mx-auto "
              />
            </motion.div>
          </h1>

          {/* Subtext and links */}
          <p className="text-yellow-100 text-4xl mt-12">
            <span className="text-red-300">Login</span> OR{" "}
            <span className="text-purple-300">Signup</span>
          </p>

          <div className="flex flex-row items-center justify-center mt-5">
            <Link
              href="/login"
              className="px-6 py-2 text-xl font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 mx-5"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 text-xl font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 mx-5"
            >
              Signup
            </Link>
          </div>
        </motion.div>
      </LampContainer>
    </div>
  );
};

export default Page;
