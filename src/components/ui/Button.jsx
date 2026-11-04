export default function Button({
    children
}) {
    return (
        <button
            className="
            rounded-full
            bg-[#191970]
            px-8
            py-4
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            active:scale-95
        "
        >
            {children}
        </button>
    );
}