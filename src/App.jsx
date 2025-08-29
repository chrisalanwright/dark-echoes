import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();
}

function EpisodeDetails() {
  if (!selectedEpisode) {
    return (
      <section className="details">
        <h2>Episode Details</h2>
        <p>Select an episode to learn more.</p>
      </section>
    );
  }

  return (
    <section className="details">
      <h2>{selectedEpisode.title}</h2>
      <p>
        {selectedEpisode.title} is episode number {selectedEpisode.id}
      </p>
      <p>{selectedEpisode.description}</p>
    </section>
  );
}

function Episodes() {
  return (
    <section className="episodes">
      <h2>Episodes</h2>
    </section>
  );
}
