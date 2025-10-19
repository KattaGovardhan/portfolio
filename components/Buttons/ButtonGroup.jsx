import ContactMe from "./ContactMe";
import { Resume } from "./Resume";

export default function ButtonGroup() {
  return (
    <div className="flex gap-4">
      <Resume />
      <ContactMe />
    </div>
  );
}
