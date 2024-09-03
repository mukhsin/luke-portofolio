import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

type Social = {
  url: string;
  name: string;
  icon: JSX.Element;
};

const socials: Social[] = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    url: "https://facebook.com/intent/",
  },
  { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com/intent/" },
  { name: "Youtube", icon: <FaYoutube />, url: "https://youtube.com/intent/" },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://linkedin.com/intent/",
  },
];

type Props = {
  containerStyles: string;
  iconStyles: string;
};

const Socials = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.url} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
