import ListingCard from './components/ListingCard';

export default function Home() {
  const exampleListings = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80',
      title: '2023 Tesla Model 3',
      endDate: '2024-04-15',
      price: 45000
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80',
      title: '2022 Porsche 911',
      endDate: '2024-04-20',
      price: 120000
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80',
      title: '2024 BMW M4',
      endDate: '2024-04-25',
      price: 85000
    }
  ];

  return (
    <main>
      <div className="text-container">
        <h1>Welcome to Car Raffle</h1>
      </div>
      <section className='listings-section'>
        <h2>Listings Ending Soon</h2>
        <div className='listings-grid'>
          {exampleListings.map((listing, index) => (
            <ListingCard
              key={index}
              imageUrl={listing.imageUrl}
              title={listing.title}
              endDate={listing.endDate}
              price={listing.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
