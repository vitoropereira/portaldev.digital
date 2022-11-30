import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";

export function SignInButton() {
  return (
    <Link
      className="h-12 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100 px-6 flex justify-center items-center font-bold hover: filter"
      href="/login"
    >
      <FaUserAlt className="w-5 h-5 mr-4 text-ignite-500" />
      <span>Fazer login</span>
    </Link>
  );
}
