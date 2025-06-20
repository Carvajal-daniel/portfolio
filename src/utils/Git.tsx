type Props = {
  className?: string;
};

const GitImg = ({ className }: Props) => {
  return (
    <a
      href="https://github.com/Carvajal-daniel"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <img
        className="w-10"
        src="/assets/asset14.svg"
        alt="GitHub Logo"
      />
    </a>
  );
};

export default GitImg;
