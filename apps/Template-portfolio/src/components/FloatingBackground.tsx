import fondoPagina from '../assets/fondo-pagina.mp4';

export default function FloatingBackground() {
  return (
    <div className="floating-background" aria-hidden="true">
      <video
        className="bg-video"
        src={fondoPagina}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay so page content stays readable */}
      <div className="bg-video-overlay" />
    </div>
  );
}
