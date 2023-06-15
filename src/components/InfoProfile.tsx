import { ReactElement } from "react";
import { MdLocationOn } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";

interface ProfileProps {
  info: string;
  icon: string;
}

export function InfoProfile({ info, icon }: ProfileProps) {
  const renderIcon = (): ReactElement => {
    switch (icon) {
      case "Twitter":
        return <FaTwitter size={20} className="mr-2" />;
      case "Website":
        return <CgWebsite size={20} className="mr-2" />;
      case "LocationOn":
        return <MdLocationOn size={20} className="mr-2" />;
      case "Office":
        return <HiBuildingOffice2 size={20} className="mr-2" />;
      default:
        return <></>;
    }
  };
  return (
    <p
      className={`flex cursor-default items-center py-3 ${
        info ? "text-header dark:text-white" : "text-darkGray"
      }`}
    >
      {renderIcon()}
      {info ? info : "Not Available"}
    </p>
  );
}
