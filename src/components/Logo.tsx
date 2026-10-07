import logoImage from './logo.png';

type LogoProps = {
  className?: string;
  variant?: 'light' | 'dark';
};

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-900';
  const subColor = variant === 'light' ? 'text-gold-300' : 'text-gold-600';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gold-400 shadow-lg shadow-gold-500/20 overflow-hidden shrink-0 p-0.5">
        <img
          src={logoImage}
          alt="Vihaan Spark Solar logo"
          className="w-full h-full object-contain rounded-full"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-display font-extrabold text-lg tracking-tight ${textColor}`}>
          Vihaan Spark
        </span>
        <span className={`font-display font-bold text-xs tracking-[0.2em] uppercase ${subColor}`}>
          Solar
        </span>
      </div>
    </div>
  );
}
