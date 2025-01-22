import Footer from '@/components/footer';
import Gradient from '@/components/gradient';
import Main from '@/components/main';
import Navbar from '@/components/navbar';
import Recommended from '@/components/recommended';

export default function Home() {
  return (
    <section className="min-h-screen pb-20  bg-[#1C1C1C] text-white font-inter">
      <Navbar />
      <Gradient />
      <Main />
      <Recommended />
      <Footer />
    </section>
  );
}
