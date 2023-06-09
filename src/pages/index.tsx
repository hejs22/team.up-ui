import LandingBanner from 'components/landing-banner/LandingBanner';
import SectionHeader from 'primitives/section-header/SectionHeader';
import HowTo from 'components/how-to/HowTo';
import MainLayout from '../layouts/main/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <LandingBanner />
      <SectionHeader
        header="How does this work?"
        subheader="4 steps is all it takes. Third one is even optional. So... why won't you try it?"
      />
      <HowTo />
    </MainLayout>
  );
};

export default Home;