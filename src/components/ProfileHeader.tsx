import profileImage from "@/assets/profile.jpg";

const ProfileHeader = () => {
  return (
    <header className="flex flex-col items-center pt-12 pb-8">
      {/* Profile Image with Soft Blue Ring */}
      <div className="relative mb-6 animate-bounce-in-up stagger-1">
        <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-br from-primary to-accent">
          <div className="w-full h-full rounded-full overflow-hidden bg-background p-[2px]">
            <img
              src={profileImage}
              alt="Photographer Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Name - Sentence Case, Friendly */}
      <h1 className="font-heading text-2xl tracking-wide text-foreground mb-2 animate-bounce-in-up stagger-2">
        Potobae Studio
      </h1>

      {/* Subtitle - Friendly & Approachable */}
      <p className="text-sm tracking-wide text-muted-foreground animate-bounce-in-up stagger-3">
        Your memories, beautifully captured ✨
      </p>
    </header>
  );
};

export default ProfileHeader;
