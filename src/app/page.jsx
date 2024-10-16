import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className="my-10">
        <Link
          href={"/newsletter"}
          className="px-4 py-2 bg-orange-600 rounded-md"
        >
          Go To NewsLetter
        </Link>
      </div>
    </div>
  );
};

export default Page;
