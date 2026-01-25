import profileImage from "@/assets/profile.jpg";

const ProfileHeader = () => {
  return (
    <header className="flex flex-col items-center pt-12 pb-8 opacity-0 animate-fade-in-up">
      {/* Profile Image with Gold Ring */}
      <div className="relative mb-6">
        <div className="w-28 h-28 rounded-full p-[2px] bg-gradient-to-br from-gold to-gold-light">
          <div className="w-full h-full rounded-full overflow-hidden bg-background p-[2px]">
            <img
              src={profileImage}
              alt="Photographer Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Name */}
      <h1 className="font-serif text-2xl tracking-wide text-foreground mb-2">
        AURORA CHEN
      </h1>

      {/* Subtitle */}
      <p className="text-[10px] tracking-ultra-wide text-muted-foreground uppercase">
        Capturing Timeless Moments
      </p>
    </header>
  );
};

export default ProfileHeader;
