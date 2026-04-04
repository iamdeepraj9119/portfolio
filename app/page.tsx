import ScrollyCanvas from "@/components/ScrollyCanvas";
import Sections from "@/components/Sections";

export default function Page() {
  return (
    <main className="relative">

      {/* 🔥 Background Scroll Animation */}
      <ScrollyCanvas />

      {/* 🔥 Foreground Content */}
      <div className="relative z-20">
        <Sections />
      </div>

    </main>
  );
}