import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Bike, ChevronRight, Calendar, Clock, Utensils, Ship, Train } from 'lucide-react';
import { itineraryData } from './data/itinerary';
import './index.css';

const App = () => {
  const { hero, days } = itineraryData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Navigation': return <Navigation size={20} className="text-blue-400" />;
      case 'Clock': return <Clock size={20} className="text-blue-400" />;
      case 'Ship': return <Ship size={28} className="text-orange-400" />;
      case 'Train': return <Train size={28} className="text-orange-400" />;
      case 'MapPin': return <MapPin size={28} className="text-orange-400" />;
      default: return null;
    }
  };

  return (
    <div className="bg-primary min-h-screen text-white">
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-bg-blur" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl mb-6">
              Bikepacking Tour de <span className="gradient-text">Flanders</span>
            </h1>
            <p className="text-text-secondary text-xl mb-8 max-w-lg">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('itinerary').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center justify-center gap-2"
              >
                Explore Route <ChevronRight size={20} />
              </button>
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Bikepacking Tour de Flanders',
                      text: 'Check out our 5-day cycle itinerary!',
                      url: window.location.href,
                    }).catch(console.error);
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }
                }}
                className="flex items-center justify-center gap-2 text-text-secondary glass px-4 py-3 rounded-xl hover:text-white transition-colors"
              >
                Share Itinerary
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-img-container"
          >
            <div className="glass p-2 sm:p-4 rounded-[32px] overflow-hidden shadow-2xl">
              <img 
                src={hero.image} 
                alt="Touring Bike" 
                className="hero-img grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="py-16 md:py-24 container">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-center md:text-left">The Journey Begins</h2>
          <p className="text-text-secondary text-lg text-center md:text-left">Detailed day-by-day plan for our grand departure.</p>
        </motion.div>

        <div className="max-w-4xl">
          {days.map((day, index) => (
            <div key={day.id} className="timeline-item">
              <div className="timeline-dot" />
              <div className="mb-8">
                <span className={`${day.id % 2 === 0 ? 'bg-teal-500/10 text-teal-400' : 'bg-blue-500/10 text-blue-400'} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block`}>
                  Day {day.id} • {day.day}
                </span>
                <h3 className="text-3xl mb-4">{day.title}</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {day.description}
                </p>
                
                {day.stats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {day.stats.distance && (
                      <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center">
                        <Navigation size={24} className={`${day.id % 2 === 0 ? 'text-teal-400' : 'text-blue-400'} mb-2`} />
                        <span className="text-xs text-text-secondary">Distance</span>
                        <span className="font-bold">{day.stats.distance}</span>
                      </div>
                    )}
                    {day.stats.time && (
                      <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center">
                        <Clock size={24} className={`${day.id % 2 === 0 ? 'text-teal-400' : 'text-blue-400'} mb-2`} />
                        <span className="text-xs text-text-secondary">Est. Time</span>
                        <span className="font-bold">{day.stats.time}</span>
                      </div>
                    )}
                    {day.stats.elevation && (
                      <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center">
                        <Bike size={24} className="text-blue-400 mb-2" />
                        <span className="text-xs text-text-secondary">Elevation</span>
                        <span className="font-bold">{day.stats.elevation}</span>
                      </div>
                    )}
                    {day.stats.transport && (
                      <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center">
                        <Ship size={24} className="text-orange-400 mb-2" />
                        <span className="text-xs text-text-secondary">Transport</span>
                        <span className="font-bold">{day.stats.transport}</span>
                      </div>
                    )}
                    {day.stats.finish && (
                      <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center">
                        <MapPin size={24} className={`${day.id % 2 === 0 ? 'text-teal-400' : 'text-blue-400'} mb-2`} />
                        <span className="text-xs text-text-secondary">Finish</span>
                        <span className="font-bold">{day.stats.finish}</span>
                      </div>
                    )}
                  </div>
                )}

                {day.mapEmbedUrl && (
                  <div className={`map-container glass mb-8 ${day.id === 3 || day.id === 4 ? 'square-map' : ''}`}>
                    <iframe 
                      width="100%" 
                      height="100%" 
                      loading="lazy" 
                      allowFullScreen 
                      style={{ filter: day.id < 3 ? 'invert(90%) hue-rotate(180deg) brightness(0.95)' : 'none' }}
                      src={day.mapEmbedUrl}
                    />
                  </div>
                )}

                {/* Day 1 Highlights */}
                {day.id === 1 && day.highlights && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {day.highlights.map((h, i) => (
                      <div key={i} className="glass p-6 rounded-2xl border-l-4 border-blue-500">
                        <h4 className="flex items-center gap-2 text-xl mb-3">
                          {getIcon(h.icon)} {h.time} - {h.title}
                        </h4>
                        <p className="text-text-secondary text-sm">
                          {h.description}
                        </p>
                        {h.gallery && (
                          <div className="overlapping-gallery compact centered mb-8 mt-6" style={{ height: '340px' }}>
                            {h.gallery.map((img, idx) => (
                              <div key={idx} className={`polaroid polaroid-${idx+1}`} style={{ "--caption": `"${img.caption}"`, width: '220px', left: `${idx * 130}px`, zIndex: idx + 1 }}>
                                <img src={img.src} alt={img.caption} />
                              </div>
                            ))}
                          </div>
                        )}
                        {h.details && (
                          <div className="mt-3 text-xs flex justify-between text-text-secondary">
                             <span>Duration: {h.details.duration}</span>
                             <span>Class: {h.details.class}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Day 2 Arrival & Cycling */}
                {day.id === 2 && (
                  <>
                    <div className="glass p-6 rounded-2xl flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
                      <div className="flex flex-col">
                        <span className="text-xs text-text-secondary">Arrival Time</span>
                        <span className="font-bold text-teal-400">{day.arrival.time}</span>
                      </div>
                      <div className="hidden sm:block h-8 w-[1px] bg-glass-border" />
                      <div className="flex flex-col">
                        <span className="text-xs text-text-secondary">Vessel</span>
                        <span className="font-bold">{day.arrival.vessel}</span>
                      </div>
                    </div>

                    <div className="mt-12 mb-8">
                       <h4 className="text-2xl mb-4 font-bold">{day.cycling.title}</h4>
                       <p className="text-text-secondary mb-6 leading-relaxed">{day.cycling.description}</p>
                       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                          <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center">
                            <Navigation size={24} className="text-teal-400 mb-2" />
                            <span className="text-xs text-text-secondary">Distance</span>
                            <span className="font-bold">{day.cycling.stats.distance}</span>
                          </div>
                          <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center">
                            <Clock size={24} className="text-teal-400 mb-2" />
                            <span className="text-xs text-text-secondary">Est. Time</span>
                            <span className="font-bold">{day.cycling.stats.time}</span>
                          </div>
                          <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center">
                            <MapPin size={24} className="text-teal-400 mb-2" />
                            <span className="text-xs text-text-secondary">Finish</span>
                            <span className="font-bold">{day.cycling.stats.finish}</span>
                          </div>
                       </div>
                    </div>

                     <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                          <h4 className="text-2xl mb-4 font-bold">{day.brunch.title}</h4>
                          <p className="text-text-secondary mb-6 leading-relaxed">{day.brunch.description}</p>
                          <div className="glass p-4 rounded-2xl overflow-hidden mb-6">
                            <img src={day.brunch.image} alt="Brunch" className="w-full rounded-xl brunch-img" />
                          </div>
                        </div>
                        <div className="overlapping-gallery centered" style={{ maxWidth: '600px' }}>
                          {day.brunch.gallery.map((img, idx) => (
                             <div key={idx} className={`polaroid polaroid-${idx+1}`} style={{ "--caption": `"${img.caption}"` }}>
                               <img src={img.src} alt={img.caption} />
                             </div>
                          ))}
                        </div>
                     </div>

                     <div className="mt-24">
                        <div className="mb-16">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-3xl mx-auto basecamp-content"
                          >
                            <h4 className="text-3xl mb-6 font-bold">{day.accommodation.name}</h4>
                            <p className="text-text-secondary text-lg mb-10 leading-relaxed">{day.accommodation.description}</p>
                            <div className="glass p-6 rounded-2xl border-l-4 border-teal-500 inline-block">
                              <ul className="space-y-3 text-sm text-text-secondary">
                                {day.accommodation.features.map((f, i) => (
                                   <li key={i} className="flex items-center gap-2 italic"><Navigation size={14} className="text-teal-400" /> {f}</li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        </div>
                        <div className="mb-16">
                          <h4 className="text-3xl mb-12 font-bold text-center">{day.afternoon.title}</h4>
                          <div className="overlapping-gallery compact centered" style={{ height: '340px', maxWidth: '500px' }}>
                             {day.afternoon.gallery.map((img, idx) => (
                               <div key={idx} className={`polaroid polaroid-${idx+1}`} style={{ "--caption": `"${img.caption}"`, width: '220px', left: idx === 1 ? '160px' : '0' }}>
                                 <img src={img.src} alt={img.caption} />
                               </div>
                             ))}
                          </div>
                        </div>
                     </div>
                  </>
                )}

                {/* Day 3 Zeeland */}
                {day.id === 3 && (
                   <>
                     <div className="split-itinerary mb-16">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                          <img src={day.image} alt="Zeeland" className="w-full rounded-[32px] glass p-2 mb-8" />
                          <div className="glass p-6 rounded-2xl border-l-4 border-teal-500">
                             <div className="flex flex-wrap gap-8">
                                <div className="flex items-center gap-3">
                                   <Navigation className="text-teal-400" size={24} />
                                   <div>
                                      <p className="text-xs text-text-secondary uppercase">Distance</p>
                                      <p className="font-bold">{day.stats.distance}</p>
                                   </div>
                                </div>
                                <div className="flex items-center gap-3">
                                   <Clock className="text-teal-400" size={24} />
                                   <div>
                                      <p className="text-xs text-text-secondary uppercase">Duration</p>
                                      <p className="font-bold">{day.stats.time}</p>
                                   </div>
                                </div>
                             </div>
                          </div>
                        </motion.div>
                        <div className="space-y-4">
                           <div className="square-map glass">
                              <iframe src={day.mapEmbedUrl} loading="lazy"></iframe>
                           </div>
                           <div className="mt-2 text-center">
                              <a href={day.gpxUrl} download className="text-sm text-accent hover:underline">Download GPX for Day 3 Route</a>
                           </div>
                           <p className="text-center text-xs text-text-secondary italic">Route: Crossing the Brouwersdam and Neeltje Jans towards the Belgian border.</p>
                        </div>
                     </div>
                     <div className="mt-24">
                        <h3 className="text-3xl font-bold mb-12 text-center">Zeeland Memories</h3>
                        <div className="overlapping-gallery compact centered" style={{ height: '340px', maxWidth: '500px' }}>
                           {day.gallery.map((img, idx) => (
                             <div key={idx} className={`polaroid polaroid-${idx+1}`} style={{ "--caption": `"${img.caption}"`, width: '220px', left: idx === 1 ? '160px' : '0', zIndex: idx === 1 ? 10 : 1 }}>
                               <img src={img.src} alt={img.caption} />
                             </div>
                           ))}
                        </div>
                     </div>
                     <div className="mt-24">
                        <h3 className="text-3xl font-bold mb-12 text-center">{day.arrivalTitle}</h3>
                        <div className="overlapping-gallery compact centered mb-12" style={{ height: '340px', maxWidth: '1100px' }}>
                           {day.arrivalGallery.map((img, idx) => (
                              <div key={idx} className={`polaroid polaroid-${idx+1}`} style={{ "--caption": `"${img.caption}"`, width: '220px', left: `${idx * 130}px`, zIndex: idx + 1 }}>
                                <img src={img.src} alt={img.caption} />
                              </div>
                           ))}
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mt-16">
                           <div className="glass p-6 rounded-2xl border-l-4 border-blue-500">
                              <h4 className="flex items-center gap-2 text-xl mb-3"><Clock size={20} className="text-blue-400" /> {day.evening.time} - {day.evening.title}</h4>
                              <p className="text-text-secondary text-sm">{day.evening.description}</p>
                           </div>
                           <div className="flex justify-center items-center h-[250px]">
                              <div className="polaroid polaroid-1" style={{ "--caption": '"HISTORIC HOTEL"', width: '220px' }}>
                                 <img src={day.evening.hotelImage} alt="Hotel" />
                              </div>
                           </div>
                        </div>
                     </div>
                   </>
                )}

                {/* Day 4 Dunkirk */}
                {day.id === 4 && (
                   <>
                     <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass rounded-3xl p-1 relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-0" />
                           <div className="relative z-10 bg-background/90 backdrop-blur-md rounded-[1.4rem] p-6 h-full flex flex-col justify-center border border-white/5">
                              <h4 className="text-2xl font-bold mb-6 italic text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">"{day.quote}"</h4>
                              <div className="space-y-4 text-sm text-text-secondary">
                                 <div className="flex justify-between items-center pb-4 border-b border-glass-border">
                                    <span className="flex items-center gap-2"><MapPin size={16}/> Start</span>
                                    <span className="font-medium text-text-primary">Bruges</span>
                                 </div>
                                 <div className="flex justify-between items-center pb-4 border-b border-glass-border">
                                    <span className="flex items-center gap-2"><Navigation size={16}/> Terrain</span>
                                    <span className="font-medium text-text-primary">Canal & Coast Paths</span>
                                 </div>
                                 <div className="flex justify-between items-center pt-2">
                                    <div className="text-center w-full">
                                       <p className="text-xs uppercase tracking-wider mb-1">Moving Time</p>
                                       <p className="font-bold text-xl text-blue-400">{day.stats.time}</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                        <div className="space-y-4">
                           <div className="square-map glass">
                              <iframe src={day.mapEmbedUrl} loading="lazy"></iframe>
                           </div>
                        </div>
                     </div>
                     <h3 className="text-3xl font-bold mb-16 text-center mt-20">{day.history.title}</h3>
                     <div className="space-y-20 mb-20">
                        {day.history.parts.map((p, i) => (
                           <div key={i} className={`dunkirk-grid ${i === 1 ? 'reverse' : ''}`}>
                              <div className="flex justify-center image-content">
                                 <div className={`polaroid ${i === 0 ? 'rotated-left' : 'rotated-right'}`} style={{ width: '260px' }}>
                                    <img src={p.image} alt={p.title} className="w-full h-auto" />
                                    <div className="polaroid-caption">{p.caption}</div>
                                 </div>
                              </div>
                              <div className="space-y-4 text-center text-content">
                                 <h4 className="text-2xl font-serif text-primary">{p.title}</h4>
                                 <p className="text-text-secondary leading-relaxed">{p.description}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                     <div className="split-itinerary mt-16" style={{ gap: '1.5rem' }}>
                        {day.evening.map((e, i) => (
                           <div key={i} className={`glass p-6 rounded-2xl border-l-4 ${i === 0 ? 'border-accent' : 'border-secondary'}`}>
                              <div className="flex items-center gap-3 mb-4">
                                 {i === 0 ? <Clock size={24} className="text-accent" /> : <Utensils size={24} className="text-secondary" />}
                                 <h4 className="text-xl font-bold">{e.time} - {e.title}</h4>
                              </div>
                              <p className="text-text-secondary mb-4">{e.description}</p>
                              <div className="flex justify-center mt-6">
                                 <div className={`polaroid ${i === 0 ? 'rotated-left' : 'rotated-right'}`} style={{ width: '220px' }}>
                                    <img src={e.image} alt={e.title} className="w-full h-auto" />
                                    <div className="polaroid-caption">{e.caption}</div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                   </>
                )}

                {/* Day 5 Multi-modal */}
                {day.id === 5 && (
                   <>
                     <div className="grid md:grid-cols-2 gap-8 mb-16 mt-12">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass rounded-3xl p-1 relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20 z-0" />
                           <div className="relative z-10 bg-background/90 backdrop-blur-md rounded-[1.4rem] p-6 h-full flex flex-col justify-center border border-white/5">
                              <h4 className="text-2xl font-bold mb-6 italic text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-300">"{day.quote}"</h4>
                              <div className="space-y-4 text-sm text-text-secondary">
                                 <div className="flex justify-between items-center pb-4 border-b border-glass-border">
                                    <span className="flex items-center gap-2"><MapPin size={16}/> Start</span>
                                    <span className="font-medium text-text-primary">Dunkirk</span>
                                 </div>
                                 <div className="flex justify-between items-center pb-4 border-b border-glass-border">
                                    <span className="flex items-center gap-2"><Navigation size={16}/> Sections</span>
                                    <span className="font-medium text-text-primary">{day.stats.transport}</span>
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                        <div className="space-y-4">
                           <div className="square-map glass" style={{ height: '300px' }}>
                              <iframe src={day.mapEmbedUrl} loading="lazy"></iframe>
                           </div>
                        </div>
                     </div>
                     <h3 className="text-3xl font-bold mb-16 text-center mt-20">The Multi-Modal Return</h3>
                     <div className="space-y-20 mb-10">
                        {day.multimodal.map((m, i) => (
                           <div key={i} className={`dunkirk-grid ${i === 1 ? 'reverse' : ''}`}>
                              <div className="flex justify-center image-content">
                                 <div className={`polaroid ${i % 2 === 0 ? 'rotated-left' : 'rotated-right'}`} style={{ width: '260px' }}>
                                    <img src={m.image} alt={m.title} className="w-full h-auto" />
                                    <div className="polaroid-caption">{m.caption}</div>
                                 </div>
                              </div>
                              <div className="space-y-4 text-center text-content">
                                 <div className={`flex ${i === 1 ? 'flex-row-reverse' : ''} items-center justify-center md:justify-start gap-3 mb-2`}>
                                    {getIcon(m.icon)}
                                    <h4 className="text-2xl font-serif text-primary">{m.title}</h4>
                                 </div>
                                 <p className="text-text-secondary leading-relaxed">{m.description}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                   </>
                )}

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-glass-border">
        <div className="container mx-auto px-6 text-center text-text-secondary text-sm">
          <p>© 2026 Bikepacking Tour de Flanders. Ride on.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
