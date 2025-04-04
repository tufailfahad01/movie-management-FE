import Button from "@/components/common/Button/Button";
import InputField from "@/components/common/InputField/InputField";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";

const CreateMovie = ({
  pageTitle = "Create a new movie",
  mainButton = "Submit",
  dropTitle = "Drop an image here",
}) => {
  const [title, setTitle] = useState<string>("");
  const [publishYear, setPublishYear] = useState<string>("");

  // have to handle file input
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
    console.log(+publishYear); // send as number
    setTitle("");
    setPublishYear("");
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlePublishYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPublishYear(e.target.value);
  };

  return (
    <div className="space-y-20 py-20 max-w-[90%] lg:max-w-[80%] mx-auto h-screen">
      <h1 className="text-3xl md:text-4xl font-medium">{pageTitle}</h1>
      <div className="flex sm:gap-6 md:gap-12 lg:gap-20 xl:gap-32 flex-col sm:flex-row">
        {/* Upload Image */}
        <div className="max-w-[300px] md:max-w-[473px] h-[380px] lg:h-[504px] w-full py-32 mb-4 bg-[#224957] border-dashed border-2 border-white rounded-lg cursor-pointer flex flex-col items-center justify-center">
          <input id="upload" type="file" className="opacity-0" />
          <Image
            src={"/images/upload.svg"}
            width={24}
            height={24}
            alt="upload-image"
          />
          <p className="text-[12px] mt-2">{dropTitle}</p>
        </div>

        {/* Form Data */}
        <form
          className="flex flex-col gap-5 w-full max-w-[300px]"
          onSubmit={(e) => handleSubmit(e)}
        >
          <InputField
            inputId="title"
            inputPlaceholder="Title"
            inputType="text"
            handleChange={handleTitleChange}
            value={title}
          />

          <InputField
            inputId="publish-year"
            inputPlaceholder="Publishing year"
            inputType="number"
            maxWidth="216px"
            handleChange={handlePublishYearChange}
            value={publishYear}
          />
          <div className="flex w-full justify-between gap-2">
            <Button label="Cancel" type="reset" variant="outlined" size="sm" />
            <Button label={mainButton} type="submit" size="sm" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMovie;
