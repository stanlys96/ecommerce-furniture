export const Categories = () => {
  return (
    <div>
      <p className="text-secondBlue text-[20px] my-[20px]">Categories</p>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-y-2">
          <div className="bg-pink p-2 rounded-[2px]">
            <a className="text-white cursor-pointer">Hobbies (14)</a>
          </div>
          <div className="p-2 rounded-[2px]">
            <a className="text-secondBlue cursor-pointer">Hobbies (14)</a>
          </div>
          <div className="p-2 rounded-[2px]">
            <a className="text-secondBlue cursor-pointer">Hobbies (14)</a>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="p-2 rounded-[2px]">
            <a className="text-secondBlue cursor-pointer">Hobbies (14)</a>
          </div>
          <div className="p-2 rounded-[2px]">
            <a className="text-secondBlue cursor-pointer">Hobbies (14)</a>
          </div>
          <div className="p-2 rounded-[2px]">
            <a className="text-secondBlue cursor-pointer">Hobbies (14)</a>
          </div>
        </div>
      </div>
    </div>
  );
};
