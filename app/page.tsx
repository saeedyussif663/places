import Gradient from '@/components/gradient';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <section className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <Gradient />
    </section>
  );
}
