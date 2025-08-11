import Image from 'next/image';
import Header from './components/header/Header'
import GridProductCard from './components/grid-product-card/GridProductCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        
      <Header/>
      <GridProductCard/>

    </main>
  );
}
