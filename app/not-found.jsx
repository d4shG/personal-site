"use client"
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import duckie from "@/imgs/duckie.png";

const NotFound = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <div className="not-found">
      <div className="background-wrapper">
        <h1>404</h1>
      </div>
      <div>
        <Image
          src={duckie}
          alt="Duckie"
          width={200}
          height={200}
          onClick={goHome}
        />
        <p>Oops! Click the duckie to go home.</p>
      </div>
    </div>
  );
};

export default NotFound;

