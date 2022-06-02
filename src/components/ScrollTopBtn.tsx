import { useWindowYOffset } from "../hooks/useWindowYOffset";

export const ScrollTopBtn = () => {
  const screenY = useWindowYOffset();
  const buttonVisible = 1000;
  return (
    <button
      className={`w-12 h-12 fixed [transition:all_300ms_ease-out] bottom-3 right-3 rounded-full bg-White dark:bg-Dark-Blue  text-4xl shadow-md ${
        screenY > buttonVisible ? "" : "invisible opacity-0"
      }`}
      onClick={() => {
        window.scrollTo({
          behavior: "smooth",
          top: 0,
        });
      }}
    >
      &#11014;
    </button>
  );
};
