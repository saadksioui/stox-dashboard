import { useState } from "react";

const ProfileImage = () => {
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (
        ["image/svg+xml", "image/png", "image/jpeg", "image/gif"].includes(file.type)
      ) {
        if (file.size <= 1048576) {
          const reader = new FileReader();
          reader.onloadend = () => setImage(reader.result as string);
          reader.readAsDataURL(file);
          setError(null); // Clear error on valid file
        } else {
          setError("File size exceeds 1MB. Please select a smaller file.");
        }
      } else {
        setError("Invalid file type. Please select an SVG, PNG, JPG, or GIF.");
      }
    }
  };


  return (
    <div className="w-full p-4 font-poppins">
      <h1 className="text-xl font-semibold">Your Photo</h1>

      <div className="my-10">
        <div className="flex items-center mb-4">
          {image ? (
            <img
              src={image}
              alt="Uploaded preview"
              className="w-12 h-12 rounded-full mr-3 object-cover"
            />
          ) : (
            <img
              src="/assets/default-avatar.png"
              alt="Uploaded preview"
              className="w-12 h-12 rounded-full mr-3 object-cover"
            />
          )}
          <div>
            <p className="font-medium">Edit your photo</p>
            <div className="flex space-x-2 text-sm text-gray-500">
              <button type="button" onClick={() => setImage(null)}>
                Delete
              </button>
              <label htmlFor="image-upload" className="cursor-pointer">
                Update
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/svg+xml, image/png, image/jpeg, image/gif"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>
        </div>

        <div
          className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400 mb-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 01-1.125-8.417m0 0A4.5 4.5 0 0112 3m0 0a4.5 4.5 0 015.125 8.083m0 0A4.5 4.5 0 0117.25 19.5"
            />
          </svg>

          <p className="text-gray-500 mb-1">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-400">SVG, PNG, JPG, or GIF</p>
          <p className="text-xs text-gray-400">(Max. 1MB)</p>
        </div>
        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}


      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          className="px-4 py-2 rounded text-gray-600 border border-gray-300 hover:bg-gray-100"
          type="button"
          onClick={() => setImage(null)}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          type="button"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileImage;
