import ScrollyCanvas from './components/ScrollyCanvas';
import Sections from './components/Sections';

export default function Page() {
  return (
    <main className="relative bg-black text-white overflow-x-hidden">

      {/* 🔥 Background Animation */}
      <ScrollyCanvas />

      {/* 🔥 Content */}
      <div className="relative z-10">
        <Sections />
      </div>

    </main>
  );
}