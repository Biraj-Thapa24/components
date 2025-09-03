// // app/page.tsx
// "use client"
// import React from "react";
// import Navbar from "@/components/Navbar/Navbar";
// import NavbarSidebar from "@/components/Navbar/NavbarSidebar";
// import Card from "@/components/Card/Card";
// import NavbarPro from "@/components/Navbar/NavbarPro";
// import Footer from "@/components/Footer/Footer";
// import ProductCard from "@/components/ProductCard/ProductCard";

// export default function HomePage() {
//   // const navItems = [
//   //   { label: "Home", href: "/" },
//   //   { label: "About", href: "/about" },
//   //   { label: "Contact", href: "/contact" },
//   //   {label:"product", href:"/product"},
//   //   {label:"Teams", href:"/team"}
//   // ];

//   const handleBuy = () => {
//     alert("Bike purchased!");
//   };

//   return (
//     <div>
//       {/* simple navbar
//       <Navbar items={navItems} /> */}
//       {/*Navbar sidebar */}
//       {/* <NavbarSidebar items={navItems}/> */}
//       {/*card*/}
//        {/* <Card/>
//       <main className="p-4">
//         <h1 className="text-2xl font-bold">Welcome to My App!</h1>
//         <p className="mt-2">This is a simple reusable Navbar with DaisyUI.</p>
//       </main> */}
//        {/* <div className="p-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3"> */}
//       {/* <Card
//         title="Mountain Bike"
//         description="This is a mountain bike."
//         imageSrc="/images/bike1.jpeg"
//         imageAlt="Mountain Bike"
//         buttonText="Buy Now"
//         onButtonClick={handleBuy}
//       />

//       <Card
//         title="Road Bike"
//         description="This is a road bike."
//         imageSrc="/images/bike2.jpeg"
//         imageAlt="Road Bike"
//         buttonText="Buy Now"
//         onButtonClick={() => alert("Road Bike purchased!")}
//       />
//     </div> */}
//      {/* <NavbarPro /> */}
//       <main className="p-8">
//         <ProductCard/>
//       </main>
//      {/* <Footer/> */}
//     </div>
//   );
// }

// app/page.tsx
"use client";
import React from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import products from "@/data/product.json"

export default function HomePage() {
  return (
    <div>
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

