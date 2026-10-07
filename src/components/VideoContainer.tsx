export type VideoContainerProps = {
  srcBase: string;
  className?: string;
  ariaLabel?: string;
};

export default function VideoContainer({
  srcBase,
  className,
  ariaLabel = "Démo de l'application en vidéo",
}: VideoContainerProps) {
  return (
    <div className={`relative mx-auto w-full max-w-90 ${className ?? ""}`}>
      <div
        className="absolute -inset-6 -z-10 rounded-[36px] bg-(--color-accent)/10 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative aspect-2/4 overflow-hidden rounded-[28px] border border-(--border) bg-black shadow-xl">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={`${srcBase}-poster.jpg`}
          disablePictureInPicture
          controlsList="nodownload noremoteplayback"
          aria-label={ariaLabel}
        >
          <source src={`${srcBase}.webm`} type="video/webm" />
          <source src={`${srcBase}.mp4`} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
