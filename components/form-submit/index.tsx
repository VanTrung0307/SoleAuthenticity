import Image from "next/image";
import React from "react";
import { ChangeEvent, useState } from "react";
import Checkbox from "./../products-filter/form-builder/checkbox/index";

function FormSubmit() {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const onFilesUploadChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      alert("No files were chosen");
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Files list is empty");
      return;
    }

    /** Files validation */
    const validFiles: File[] = [];
    for (let i = 0; i < fileInput.files.length; i++) {
      const file = fileInput.files[i];

      if (!file.type.startsWith("image")) {
        alert(`File with idx: ${i} is invalid`);
        continue;
      }

      validFiles.push(file);
    }

    if (!validFiles.length) {
      alert("No valid files were chosen");
      return;
    }

    /** Uploading files to the server */
    try {
      var formData = new FormData();
      validFiles.forEach((file) => formData.append("media", file));

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const {
        data,
        error,
      }: {
        data: {
          url: string | string[];
        } | null;
        error: string | null;
      } = await res.json();

      if (error || !data) {
        alert(error || "Sorry! something went wrong.");
        return;
      }

      setPreviewUrls(
        validFiles.map((validFile) => URL.createObjectURL(validFile))
      ); // we will use this to show the preview of the images

      /** Reset file input */
      fileInput.type = "text";
      fileInput.type = "file";

      console.log("Files were uploaded successfylly:", data);
    } catch (error) {
      console.error(error);
      alert("Sorry! something went wrong.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        border: "1px solid black",
        height: "400px",
        textAlign: "center",
        alignItems: "center",
        padding: "15px 16px",
        borderRadius: "30px",
        backgroundColor: 'var(--color-orange)',
      }}
    >
      <form
        style={{
          width: "300px",
          height: "300px",
          border: "1px solid black",
          borderRadius: "30px",
          backgroundColor: 'white'
        }}
        className="w-full p-3 border border-gray-500 border-dashed"
        onSubmit={(e) => e.preventDefault()}
      >
        {previewUrls.length > 0 ? (
          <>
            <button
              onClick={() => setPreviewUrls([])}
              className="mb-3 text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-gray-900"
            >
              Clear Previews
            </button>

            <div className="flex flex-wrap justify-start">
              {previewUrls.map((previewUrl, idx) => (
                <div key={idx} className="w-full p-1.5 md:w-1/2">
                  <Image
                    alt="file uploader preview"
                    objectFit="cover"
                    src={previewUrl}
                    width={320}
                    height={218}
                    layout="responsive"
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <label className="flex flex-col items-center justify-center h-full py-8 transition-colors duration-150 cursor-pointer hover:text-gray-600">
            <img style={{width: '260px', height: '260px', marginTop: '10px'}} src="/images/logos/upload-image.png"></img>
            <strong style={{color: "black"}}className="text-sm font-medium">Select images</strong>
            <input
              className="block w-0 h-0"
              type="file"
              onChange={onFilesUploadChange}
              multiple
              hidden
            />
          </label>
        )}
      </form>

      <form
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "900px",
          height: "298px",
          alignItems: "center",
          alignContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <div
          className="form__col"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <input
            style={{
              height: "50px",
              borderRadius: "70px",
              backgroundColor: 'white'
            }}
            className="form__input form__input--sm"
            type="text"
            placeholder="Product Name"
            required
          />

          <input
            style={{
              height: "50px",
              borderRadius: "70px",
              backgroundColor: 'white'
            }}
            className="form__input form__input--sm"
            type="text"
            placeholder="Brand Name"
            required
          />

          <input
            style={{
              height: "50px",
              borderRadius: "70px",
              backgroundColor: 'white'
            }}
            className="form__input form__input--sm"
            type="text"
            placeholder="Price Buy"
            required
          />

          <input
            style={{
              height: "50px",
              borderRadius: "70px",
              backgroundColor: 'white'
            }}
            className="form__input form__input--sm"
            type="text"
            placeholder="Price Sell"
            required
          />
        </div>
        <div
          className="form__col"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <input
            style={{
              height: "50px",
              borderRadius: "70px",
              backgroundColor: 'white'
            }}
            className="form__input form__input--sm"
            type="text"
            placeholder="Warranty"
            required
          />

          <input
            style={{
              height: "50px",
              borderRadius: "70px",
              backgroundColor: 'white'
            }}
            className="form__input form__input--sm"
            type="text"
            placeholder="Contact"
            required
          />

          <input
            style={{
              height: "50px",
              borderRadius: "70px",
              backgroundColor: 'white'
            }}
            className="form__input form__input--sm"
            type="text"
            placeholder="Quantity"
            required
          />
          <div
            className="products-filter__block__content"
            style={{ marginLeft: "15px", fontWeight: 'bold', paddingTop: '15px' }}
          >
            <Checkbox name="product-type" label="Full Box"/>
          </div>
        </div>

        <div style={{display: 'flex', width: '100%', textAlign: 'center', justifyContent: 'center'}}>
          <button
            className="btn btn--rounded btn--yellow"
            type="button"
            style={{backgroundColor: 'white'}}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormSubmit;
