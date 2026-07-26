import CountUp from "react-countup";

const stats = [
  ["500+", "Clients Guided"],
  ["8+", "Years Experience"],
  ["98%", "Satisfaction"],
  ["1500+", "Sessions"],
];

export default function Stats() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
        {stats.map(([value, label]) => (
          <div
            key={label}
            className="rounded-3xl bg-white p-8 text-center shadow-lg"
          >
            <h3 className="text-4xl font-bold text-[#5F8D7A]">
              {value}
            </h3>

            <p className="mt-3 text-gray-500">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}