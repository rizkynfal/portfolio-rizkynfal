import Experience from "@/components/home/Experience";

export default function Experiences() {
  const expData = {
    data: [
      {
        id: "1",
        company: "Ismart Inter Global",
        period: "January 2024 - Present",
        role: "Full Time - Frontend Developer",
        proLang: "Flutter",
        desc: "Developing Supply Chain Website to tracing supply of Toyota's supplier item  ",
        urlDetail: "/experiences/ismart",
      },
      {
        id: "2",
        company: "Altimeda Cipta Visitama",
        period: "April 2024 - June 2024",
        role: "Freelance - Mobile Developer",
        proLang: "Flutter",
        urlDetail: "/experiences/altimeda",
        desc: "Developing Post Energy Indonesia Mobile App for tracking fuel distribution",
      },
      {
        id: "3",
        company: "Tately Nv",
        period: "June 2022 - August 2022",
        role: "Internship - Mobile Developer",
        proLang: "Flutter",
        urlDetail: "/experiences/tatelynv",
        desc: "develop the HAZOB app, a digitalization of the Hazard Observation Card that integrates with Google Spreadsheet API and Google Drive API.",
      },
      {
        id: "4",
        company: "Tately Nv",
        period: "June 2022 - August 2022",
        role: "Internship - Mobile Developer",
        proLang: "Flutter",
        urlDetail: "/experiences/tatelynv",
        desc: "develop the HAZOB app, a digitalization of the Hazard Observation Card that integrates with Google Spreadsheet API and Google Drive API.",
      },
    ],
  };
  return (
    <section className="container mx-auto py-20 overflow-hidden mt-20 bg-mainBlack">
      <div className=" ">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-22">
          <div className="grid grid-rows-2 grid-flow-row justify-items-start justify-start ">
            {expData.data.map((e) => {
              return (
                <div key={e.id}>
                  <div></div>
                  {e.company}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
