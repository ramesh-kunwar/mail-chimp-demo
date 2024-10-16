"use client";
import NewsLetterSignUpForm from "@/components/NewsLetterSignUpForm";
import Link from "next/link";
const NewsLetterPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="my-10">
        <Link href={"/"} className="px-4 py-2 bg-orange-600 rounded-md">
          Go Back
        </Link>
      </div>
      <div>
        <NewsLetterSignUpForm />
      </div>
    </div>
  );
};

export default NewsLetterPage;
