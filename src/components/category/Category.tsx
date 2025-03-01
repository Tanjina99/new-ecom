'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Category } from "@/types/category/category";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CategoryPage() {

  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/category/getcategory`
      );
      const data = await res.json();
      setCategories(data?.categories);
      console.log(data?.categories);
    };

    fetchCategories();
  }, []);
  if (!categories || categories.length === 0) {
    return (
      <div className="text-center p-4">
        <p>No categories available.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {categories.map((category) => (
        <Card key={category._id}>
          <CardHeader>
            <CardTitle>{category.name}</CardTitle>
            <CardDescription>{category.slug}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={category.categoryImage || "/next.svg"}
              alt={category.name}
              className="w-full h-48 object-cover"
              width={400}
              height={200}
            />
          </CardContent>
          <CardFooter>
            <p>Order: {category.order}</p>
            <Link
              href={`/category/${category.slug}`}
              className="text-blue-500 hover:underline"
            >
              View Category
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
