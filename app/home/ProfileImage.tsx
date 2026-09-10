import Image from "next/image";
import profileImage from '@public/profile.png';


// Profile Image with Glow Component
export default function ProfileImage() {
  return (
    <div className="shrink-0 relative">
      <div className="relative w-80 h-80 rounded-full overflow-hidden">
        {/* Profile image */}
        <div className="relative w-full bg-linear-to-r from-black to-white h-full flex items-center justify-center z-20">
          <Image
            src={profileImage}
            alt="Profile"
            width={320}
            height={320}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}