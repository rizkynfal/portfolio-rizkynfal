export default function Cards({ children }) {
  return (
    <>
      <div className=" md:container  rounded-xl backdrop-blur-glassBackdrop bg-gradient-to-br from-white/5 to-white/0 border-1 border-zinc-800 justify-items-center justify-center ">
        {children}
      </div>
    </>
  );
}
