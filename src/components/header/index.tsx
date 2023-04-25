import Image from 'next/image'

export const Header = () => {
  return (
    <header className="w-full">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/logo.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <h1>
        FUEL ECONOMY
      </h1>
    </header>
  )
}