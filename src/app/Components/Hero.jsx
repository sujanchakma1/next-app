import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="hero my-5"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/gMyHSBFD/summer-sale-banner-with-beach-vibes-decorate-and-product-display-cylindrical-shape-vector.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center py-20">
        <div className="max-w-md max-h-min">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 text-center text-lg md:text-xl">
            Discover our latest products crafted to make your life easier.
            Quality, style, and comfort—all in one place.
          </p>
          <Link href="/products">
            <button className="btn btn-primary rounded-2xl">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
