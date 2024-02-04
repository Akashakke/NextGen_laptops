import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Akash",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Praveen",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "MSI Raider Laptop",
      slug: "msi-raider-laptop",
      category: "Laptop",
      image:
        "https://cdn1.smartprix.com/rx-iyJaB5CUl-w420-h420/msi-raider-ge67-hx-1.webp", // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: "iPhone",
      rating: 4.5,
      numReviews: 10,
      description: "Gaming",
    },
    {
      name: "Asus ZenBook Pro Laptop",
      slug: "asus-zenbook-pro",
      category: "Laptop",
      image:
        "https://cdn1.smartprix.com/rx-ia5Ztd3KK-w420-h420/asus-zenbook-pro-duo.webp",
      price: 250,
      countInStock: 0,
      brand: "Business",
      rating: 4.0,
      numReviews: 10,
      description: "Business",
    },
    {
      name: "Nikon D850",
      slug: "nikon-d850-camera",
      category: "Camera",
      image:
        "https://cdn1.smartprix.com/rx-ieo8fit7s-w420-h420/nikon-d850-45-7mp-ds.webp",
      price: 25,
      countInStock: 10,
      brand: "Camera",
      rating: 4.5,
      numReviews: 14,
      description: "DSLR",
    },
    {
      name: "GoPro HERO10",
      slug: "gopro-hero10-camera",
      category: "Camera",
      image:
        "https://cdn1.smartprix.com/rx-iqO1A85Ni-w420-h420/gopro-hero10-23mp-sp.webp",
      price: 65,
      countInStock: 5,
      brand: "Sports",
      rating: 4.5,
      numReviews: 10,
      description: "Sports",
    },
    {
      name: "Samsung M8",
      slug: "samsung-m8-tv",
      category: "TV",
      image:
        "https://cdn1.smartprix.com/rx-i9b3HVdAo-w420-h420/samsung-m8-ls32bm80b.webp",
      price: 65,
      countInStock: 5,
      brand: "Poco",
      rating: 4.5,
      numReviews: 10,
      description: "Smart monitor",
    },
    {
      name: "Dell P3223QE",
      slug: "dell-p3223qe-tv",
      category: "TV",
      image:
        "https://cdn1.smartprix.com/rx-i6GMu55sc-w420-h420/dell-p3223qe-32-inch.webp",
      price: 65,
      countInStock: 5,
      brand: "Motorola",
      rating: 4.5,
      numReviews: 10,
      description: "LED Monitor",
    },
    {
      name: "Zebronics Zeb-Juke Bar",
      slug: "zebronics-zeb-jukebar",
      category: "Speaker",
      image:
        "https://cdn1.smartprix.com/rx-iKmmY1zkc-w420-h420/zebronics-zeb-juke-b.webp",
      price: 65,
      countInStock: 5,
      brand: "Realme",
      rating: 4.5,
      numReviews: 10,
      description: "Zebronics",
    },
    {
      name: "Sony HT-S40R",
      slug: "sony-ht-s40r",
      category: "Speaker",
      image:
        "https://cdn1.smartprix.com/rx-iK8qfNamX-w420-h420/sony-ht-s40r-600w-so.webp",
      price: 65,
      countInStock: 5,
      brand: "Redmi",
      rating: 4.5,
      numReviews: 10,
      description: "Sony",
    },
  ],
};
export default data;
