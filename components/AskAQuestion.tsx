export const AskAQuestion = () => {
  return (
    <div className="bg-tenthGray p-8">
      <p className="text-secondBlue text-[18px] font-bold mb-[20px]">
        Ask A Question
      </p>
      <input
        placeholder="Your Name*"
        className="border border-eigthGray w-full rounded-[2px] p-3 focus:outline-pink mb-[20px]"
      />
      <input
        placeholder="Subject*"
        className="border border-eigthGray w-full rounded-[2px] p-3 focus:outline-pink mb-[20px]"
      />
      <textarea
        placeholder="Type Your Message*"
        className="border border-eigthGray w-full rounded-[2px] p-3 focus:outline-pink mb-[20px] h-48"
      />
      <button className="rounded-[2px] px-5 py-2 bg-pink text-white mb-[20px]">
        Send Mail
      </button>
    </div>
  );
};
