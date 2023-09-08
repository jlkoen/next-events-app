import Card from '@/components/card/EventCard.tsx';

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-4 justify-center min-h-screen py-5 bg-dull-lavender-50">
      <Card />
      <Card />
      <Card />
    </div>
  );
}
