const FooterContent = () => {
  // Data for different footer sections
  const knowUs = ["About Mk.Fashion", "Carrers", "Press Releases", "Contact Us"];
  const connectUs = ["Facebook", "Twitter", "Instagram"];
  const help = [
    "Help and Support",
    "Your Account",
    "Recalls and Product Safety Alerts",
    "Returns Centre",
    "100% Purchase Production",
    "Mk.Fashion App Download",
    "Orders",
  ];
  const moneyWithUs = [
    "Sell on Mk.Fashion",
    "Sell under MK.Fashion Accelerator",
    "Protect and Build Your Brand",
    "Mk.Fashion Global Selling",
    "Supply to Mk.Fashion",
    "Become an Affiliate",
    "Fulfilment by Mk.Fashion",
    "Advertise Your Products",
    "Mk.Fashion Pay on Merchants",
  ];

  return (
    <div className="bg-gray-950 p-10 flex justify-around flex-wrap gap-10">
      {/* 'Get to Know Us' Section */}
      <div className="flex-grow basis-2/5 md:basis-1/5">
        <h4 className="text-lg sm:text-xl font-bold">Get to Know Us</h4>
        {knowUs.map((item, index) => {
          return (
            <p
              className="mt-2 hover:underline cursor-pointer text-sm sm:text-base"
              key={index}
            >
              {item}
            </p>
          );
        })}
      </div>

      {/* 'Connect with Us' Section */}
      <div className="flex-grow basis-2/5 md:basis-1/5">
        <h4 className="text-lg sm:text-xl font-bold">Connect with Us</h4>
        {connectUs.map((item, index) => {
          return (
            <p
              className="mt-2 hover:underline cursor-pointer text-sm sm:text-base"
              key={index}
            >
              {item}
            </p>
          );
        })}
      </div>

      {/* 'Make Money with Us' Section */}
      <div className="flex-grow basis-2/5 md:basis-1/5">
        <h4 className="text-lg sm:text-xl font-bold">Make Money with Us</h4>
        {moneyWithUs.map((item, index) => {
          return (
            <p
              className="mt-2 hover:underline cursor-pointer text-sm sm:text-base"
              key={index}
            >
              {item}
            </p>
          );
        })}
      </div>

      {/* 'Let Us Help You' Section */}
      <div className="flex-grow basis-2/5 md:basis-1/5">
        <h4 className="text-lg sm:text-xl font-bold">Let Us Help You</h4>
        {help.map((item, index) => {
          return (
            <p
              className="mt-2 hover:underline cursor-pointer text-sm sm:text-base"
              key={index}
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FooterContent;
