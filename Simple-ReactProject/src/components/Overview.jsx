import icon1 from "../assets/images/icons/Icon (3).svg";
import icon2 from "../assets/images/icons/Icon (4).svg";
import icon3 from "../assets/images/icons/Icon (5).svg";
import icon4 from "../assets/images/icons/Icon (6).svg";

function Overview() {
  const stats = [
    [icon1, "2,245,341", "Members"],
    [icon2, "828,867", "Bookings"],
    [icon3, "46,328", "Clubs"],
    [icon4, "1,926,436", "Payments"],
  ];

  return (
    <section className="bg-gray-100">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-6 py-12 sm:px-8 md:grid-cols-2 md:py-16 lg:px-10">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">Helping a local <span className="block text-green-600">business reinvent itself</span></h2>
          <p className="mt-3 text-gray-600">We reached here with our hard work and dedication</p>
        </div>
        <div className="grid grid-cols-1 gap-x-5 gap-y-7 min-[420px]:grid-cols-2 sm:gap-x-8">
          {stats.map(([icon, value, label]) => (
            <div key={label} className="flex items-center gap-3">
              <img className="h-10 w-10 object-contain" src={icon} alt="" />
              <div><p className="text-xl font-bold text-gray-800 sm:text-2xl">{value}</p><p className="text-sm text-gray-600">{label}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
