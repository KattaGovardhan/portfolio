import { File } from "lucide-react";
import { Button } from "../ui/button";

export const Resume = ({
  fullWidth = false,
  resumeUrl = "/Govardhan_katta_Resume.pdf",
}) => {
  const handleOpenResume = () => {
    if (resumeUrl) {
      window.open(resumeUrl, "_blank"); // opens in new tab
    } else {
      console.error("Resume file not found!");
    }
  };

  return (
    <Button
      onClick={handleOpenResume}
      className={`flex items-center justify-center gap-2 cursor-pointer ${
        fullWidth ? "w-full" : ""
      }`}
    >
      <File size={16} />
      Resume
    </Button>
  );
};
