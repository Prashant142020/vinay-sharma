import { Heart } from 'lucide-react';
import React from 'react';
import { YouTubePlaylist } from './youtube-playlist';

export default function SpiritualitySection() {
  return (
    <section id="spirituality" className="py-12 scroll-mt-20">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Spirituality</h2>
        </div>
        <p className="text-muted-foreground">
          Contributions to Indian Knowledge Systems and spiritual teachings.
        </p>
      </div>
      <h1 className="text-3xl font-bold mb-8">
        Sri Ram Charit Manas Lecture Series
      </h1>
      <YouTubePlaylist />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Publications</h2>
        <ul className="space-y-3">
          <li className="p-4 bg-gray-50 rounded-lg">
            शर्मा, व., & नेहा. (2023). राम जी की दुविधा [Conference session].
            Fifth International Ramayana Conference, Bhopal, India.
          </li>
          <li className="p-4 bg-gray-50 rounded-lg">
            Goel, M., & Sharma, V. (2023). Growing and Healing with
            &quot;Ram&quot;: Power of Sound and Vibrations [Conference session].
            Fifth International Ramayana Conference, Bhopal, India.
          </li>
          <li className="p-4 bg-gray-50 rounded-lg">
            नेहा, & शर्मा, व. (2023). उर्मिला की शिकायतें [Conference session].
            Fifth International Ramayana Conference, Bhopal, India.
          </li>
        </ul>
      </section>
    </section>
  );
}
