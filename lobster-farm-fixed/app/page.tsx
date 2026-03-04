import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Tutorials from '@/components/Tutorials';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Hero />
        
        <section className="my-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            为什么选择南宁龙虾养殖网？
          </h2>
          <Features />
        </section>
        
        <section className="my-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            最新养殖教程
          </h2>
          <Tutorials />
        </section>
        
        <section className="my-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            社区动态
          </h2>
          <Community />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}