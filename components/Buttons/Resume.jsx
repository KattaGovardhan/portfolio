import { File } from "lucide-react";
import { Button } from "../ui/button";

export const Resume = ({ fullWidth = false }) => {
  return (
    <Button
      className={`flex items-center justify-center gap-2 cursor-pointer ${
        fullWidth ? "w-full" : ""
      }`}
    >
      <File size={16} />
      Resume
    </Button>
  );
};
