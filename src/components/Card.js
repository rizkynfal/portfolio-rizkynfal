export default function Cards({ titleCard, contentCard, image }) {
  return (
    <>
      <div className=" md:container  rounded-xl backdrop-blur-glassBackdrop bg-gradient-to-br from-white/5 to-white/0 border-1 border-zinc-800 justify-items-center justify-center">
        <div className="grid grid-flow-row grid-rows-1 ">
          {titleCard ? (
            <h1 className="text-4xl text-warmWhite text-center">{titleCard}</h1>
          ) : (
            ""
          )}
          {image != null || image != "" ? (
            <div className="p-8">
              <img src={image} className="w-40 " />
            </div>
          ) : (
            ""
          )}
          {contentCard ? (
            <div className="text-xl text-warmWhite">{contentCard}</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
