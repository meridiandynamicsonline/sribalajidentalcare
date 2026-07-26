export default function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mb-16 text-center">

      <p className="mb-3 uppercase tracking-[0.35em] font-semibold text-[#5F8D7A]">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-bold text-[#2D2D2D] md:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
        {description}
      </p>

    </div>
  );
}