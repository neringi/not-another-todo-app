import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full max-w-[100%] px-[1.75rem] col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08] sm:px-4">
      <Logo />
      <Counter />
    </header>
  )
}
