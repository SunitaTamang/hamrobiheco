import React, { useState } from "react";
import { Search, MapPin, Star, Sparkles, Camera, Gem, Palette, Flower2, UserRound } from "lucide-react";

const categories = [
  { name: "Makeup", icon: UserRound },
  { name: "Mehendi", icon: Flower2 },
  { name: "Jewelry", icon: Gem },
  { name: "Decor", icon: Palette },
  { name: "Photography", icon: Camera },
  { name: "Outfits", icon: Sparkles },
];

const vendors = [
  {
    name: "Royal Bridal Makeup NJ",
    category: "Makeup",
    location: "Edison, NJ",
    price: "$450–$900",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Henna by Aarya",
    category: "Mehendi",
    location: "Jersey City, NJ",
    price: "$150–$700",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1595246007497-15a3c2f0f227?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sona Jewelry Studio",
    category: "Jewelry",
    location: "Queens, NY",
    price: "$80–$2,000",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
  },
];

export default function WeddingPlanningWebsiteStarter() {
  const [search, setSearch] = useState("");

  const filteredVendors = vendors.filter((vendor) =>
    `${vendor.name} ${vendor.category} ${vendor.location}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <header className="bg-white/90 backdrop-blur border-b border-red-100 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/hamro_bihe_logo.jpg"
              alt="Hamro Bihe logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-2xl font-semibold tracking-tight text-red-800">Hamro Bihe</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
            <a href="#vendors">Vendors</a>
            <a href="#categories">Categories</a>
            <a href="#guides">Guides</a>
            <a href="#submit" className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-full shadow-sm">List Your Business</a>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-amber-200 px-4 py-2 rounded-full text-sm text-red-800 shadow-sm mb-6">
            <Sparkles size={16} className="text-amber-600" /> Nepali wedding planning made easier
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug tracking-tight max-w-xl">
            Trusted Nepali wedding vendors, without the DMs.
          </h1>
          <p className="mt-4 text-base text-stone-700 leading-7 max-w-xl">
            Makeup, mehendi, jewelry, photos, and more—with prices and locations in one place.
          </p>

          <div className="mt-8 bg-white p-3 rounded-2xl shadow-lg border border-red-100 flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-3 px-3 flex-1">
              <Search className="text-stone-400" size={20} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search makeup, mehendi, jewelry..."
                className="w-full outline-none py-3 bg-transparent"
              />
            </div>
            <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-xl font-medium shadow-sm">
              Search Vendors
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-amber-200 rounded-[2rem] rotate-3" />
          <img
            src="/DSC01512.jpg"
            alt="Nepali bride and groom in traditional wedding attire"
            className="relative rounded-[2rem] shadow-2xl object-cover h-[520px] w-full"
          />
        </div>
      </section>

      <section id="categories" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Browse by category</h2>
            <p className="text-stone-600 mt-2">Start with what every Nepali bride usually needs first.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button key={category.name} className="bg-white rounded-2xl p-6 border border-red-100 shadow-sm hover:shadow-md hover:border-amber-300 transition text-left">
                <Icon className="text-amber-600 mb-4" size={28} />
                <div className="font-semibold">{category.name}</div>
              </button>
            );
          })}
        </div>
      </section>

      <section id="vendors" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Featured vendors</h2>
            <p className="text-stone-600 mt-2">Example listings. Later these will come from your database.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => (
            <div key={vendor.name} className="bg-white rounded-3xl overflow-hidden border border-red-100 shadow-sm hover:shadow-lg transition">
              <img src={vendor.image} alt={vendor.name} className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-sm text-red-700 font-semibold">{vendor.category}</p>
                    <h3 className="text-xl font-bold mt-1">{vendor.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                    <Star size={14} className="text-amber-600" fill="currentColor" /> {vendor.rating}
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-stone-600">
                  <p className="flex items-center gap-2"><MapPin size={16} /> {vendor.location}</p>
                  <p className="font-medium text-stone-900">Price range: {vendor.price}</p>
                </div>
                <button className="mt-5 w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-xl font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="guides" className="bg-red-50 border-y border-red-100">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold">Helpful wedding guides</h2>
            <p className="text-stone-600 mt-3">These articles will help your website rank on Google.</p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
            {["Nepali Wedding Checklist", "Mehendi Planning Guide", "Bridal Jewelry Guide", "How to Compare Vendor Prices"].map((title) => (
              <div key={title} className="rounded-2xl border border-amber-200 p-5 bg-white">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-sm text-stone-600 mt-2">A simple guide for brides and families planning Nepali weddings.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="submit" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">Are you a wedding vendor?</h2>
        <p className="text-stone-600 mt-4 text-lg">
          Join the directory and help Nepali brides find your services faster.
        </p>
        <button className="mt-8 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg">
          Submit Your Business
        </button>
      </section>

      <footer className="bg-red-900 text-white px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <p className="font-semibold text-amber-300">Hamro Bihe</p>
          <p className="text-red-100 text-sm">Wedding planning for Nepali brides.</p>
        </div>
      </footer>
    </div>
  );
}
