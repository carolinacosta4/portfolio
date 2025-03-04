function AboutMe() {
  return (
    <div className="w-full" id="about">
      <p className="text-2xl mb-2 font-medium">About Me</p>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 xl:gap-8 font-[family-name:var(--font-geist-sans)]">
        <a
          href="/Carolina_Costa_CV.pdf"
          download
          className="group bg-[#606c38] bg-opacity-30 p-4 rounded-lg flex flex-col w-full"
        >
          <div className="text-center">
            <p className="text-lg font-medium">My Curriculum Vitae</p>
            <button className="bg-[#606c38] text-white rounded-md w-full py-2 mt-5 hover:bg-[#4d5c2e]">
              Download
            </button>
          </div>
        </a>
        <a
          href="/Carolina_Costa_Portfolio.pdf"
          download
          className="group bg-[#606c38] bg-opacity-30 p-4 rounded-lg flex flex-col w-full"
        >
          <div className="text-center">
            <p className="text-lg font-medium">My Portfolio</p>
            <button className="bg-[#606c38] text-white rounded-md w-full py-2 mt-5 hover:bg-[#4d5c2e]">
              Download
            </button>
          </div>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
