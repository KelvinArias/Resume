import ProfileImage from './ProfileImage';
import HeroText from '@components/HeroText';
import InfoPanel from './InfoPanel';
import IntroButton from './IntroButton';
import ScrollDown from './ScrollDown';
import IntroButtonMobile from './IntroButtonMobile';

export default function Home() {
  return (
    <div className='w-full relative h-screen flex justify-center'>
      <section className="lg:flex-1 flex items-center justify-between gap-8 lg:gap-12 py-16 max-w-6xl lg:px-12" >
        <article className="hidden lg:block flex-1" >
          <HeroText
            title="Hello"
            subtitle="Full stack developer"
            paragraph="Building modern web experiences that make an impact."
          />
        </article >
        < article className="relative flex justify-center shrink-0" >
          <ProfileImage />
          <IntroButtonMobile />
        </article >
        < article className="hidden lg:flex flex-1 flex-col gap-6 justify-center" >
          <InfoPanel />
        </article >
      </section>
      <IntroButton />
      <ScrollDown />
    </div>
  )
}