import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <div>
      <div className="bg-purple">
        <div className="container mx-auto flex justify-between py-3 items-center px-[150px]">
          <p className="text-white">Walao</p>
          <ul className="flex gap-x-4 text-white">
            <li>
              <a href="#">English</a>
            </li>
            <li>
              <a href="#">USD</a>
            </li>
            <li>
              <a onClick={() => router.push("/login")} href="#">
                Login
              </a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="container mx-auto py-5 flex items-center px-[150px]">
          <p className="mr-10">Hekto</p>
          <ul className="flex gap-x-2 items-center">
            <li>
              <a onClick={() => router.push("/")} href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a onClick={() => router.push("/blog")} href="#">
                Blog
              </a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a onClick={() => router.push("/contact")} href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
