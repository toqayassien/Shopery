export default function Footer() {
  return (
    <div className="bg-[#1A1A1A] h-full px-5 py-10 md:px-20 lg:py-20">
      <div className="footer-top border-b border-gray grid grid-cols-2 md:grid-cols-2 lg:grid-cols-8 pb-10 gap-4 md:gap">
        <div className="flex flex-col gap-3 col-span-6 md:col-span-4 lg:col-span-4">
          <img src="Public/logo-w.png" alt="" className="w-30 lg:w-40" />
          <p className="text-gray lg:w-50 text-xs">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="flex gap-3 text-white">
            <p className="border-b-2 border-green-600 pb-2 text-xs">(219) 555-0114</p>
            <p className="text-gray">or</p>
            <p className="border-b-2 border-green-600 pb-2 text-xs">Proxy@gmail.com</p>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 text-gray text-sm md:text-base">
            <p className="font-semibold mb-4 text-white">My Account</p>
            <ul className="flex flex-col gap-2">
                <li>My Account</li>
                <li>Order History</li>
                <li>Shopping Cart</li>
                <li>WishList</li>
            </ul>
        </div>
        <div className="col-span-3 md:col-span-1 text-gray text-sm md:text-base">
            <p className="font-semibold mb-4 text-white">Helps</p>
            <ul className="flex flex-col gap-2">
                <li>Contact</li>
                <li>Faqs</li>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="col-span-3 md:col-span-1 text-gray text-sm md:text-base">
            <p className="font-semibold mb-4 text-white">Proxy</p>
            <ul className="flex flex-col gap-2">
                <li>About</li>
                <li>Shop</li>
                <li>Product</li>
                <li>Track Order</li>
            </ul>
        </div>
        <div className="col-span-3 md:col-span-1 text-gray text-sm md:text-base">
            <p className="font-semibold mb-4 text-white">Categories</p>
            <ul className="flex flex-col gap-2">
                <li>Fruit & Vegetables</li>
                <li>Meat & Fish</li>
                <li>Bread & Bakery</li>
                <li>Beauty & Health</li>
            </ul>
        </div>
      </div>
      {/* <hr /> */}
      <div className="footer-bottom flex flex-col-reverse md:flex-row items-center md:justify-between py-4">
        <div className="text-gray text-xs md:text-sm"><p>Ecobazar eCommerce © 2021. All Rights Reserved.</p></div>
        <img src="Public/footer-logos.png" alt="" className="w-50 mb-2"/>
      </div>
    </div>
  );
}
