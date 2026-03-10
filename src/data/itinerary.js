export const itineraryData = {
  hero: {
    title: "Bikepacking Tour de Flanders",
    subtitle: "A coastal cycling odyssey starting from the heart of Bishop's Stortford, tackling the rolling terrain to the historic port of Harwich and into the heart of the Netherlands.",
    image: "/bike-touring.png"
  },
  days: [
    {
      id: 1,
      day: "Thursday",
      title: "Bishop's Stortford to Harwich",
      description: "Leaving CM23 5NN behind, we head east across Essex. The route winds through charming villages like Great Dunmow and Coggeshall, gradually approaching the coastal salt marshes. Expect a mix of dedicated cycle paths and quiet country lanes.",
      stats: {
        distance: "65 Miles",
        time: "5-6 Hours",
        elevation: "1,800 ft",
        finish: "Harwich"
      },
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d309000.0!2d0.380026!3d51.859600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e1!4m5!1s0x47d885a06c8d4511%3A0xe13cd41d9e2954a2!2sCM23%205NN%2C%20Bishop&#39;s%20Stortford!3m2!1d51.868779!2d0.165682!4m5!1s0x47d96cc379cc83e9%3A0x644c10a41d6b057e!2sHarwich!3m2!1d51.9398!2d1.2721!5e0!3m2!1sen!2suk!4v1710123456789!5m2!1sen!2suk",
      highlights: [
        {
          time: "19:30",
          title: "Coastal Dinner",
          description: "Recharge in Harwich with a hearty dinner by the quay. Fresh seafood and local ales await at a historic pub before the overnight crossing.",
          icon: "Clock"
        },
        {
          time: "23:00",
          title: "Stena Line Crossing",
          description: "Board the Stena Hollandica for the overnight voyage. A standard 2-bed cabin is secured for ultimate rest.",
          icon: "Navigation",
          gallery: [
            { src: "/ferry-exterior.png", caption: "STENA HOLLANDICA" },
            { src: "/ferry-cabin.png", caption: "YOUR CABIN" },
            { src: "/ferry-route.png", caption: "NORTH SEA ROUTE" }
          ],
          details: { duration: "8h", class: "Economy" }
        }
      ]
    },
    {
      id: 2,
      day: "Friday",
      title: "Arrival: Hook of Holland",
      description: "Awaken to the sunrise over the North Sea. At 08:00, we disembark at Hook of Holland, ready to begin our cycling adventure on Dutch soil.",
      arrival: {
        time: "08:00 AM",
        vessel: "Stena Hollandica"
      },
      cycling: {
        title: "Cycling to Rotterdam",
        description: "After disembarking, we hit the impeccably smooth Dutch cycle paths. The route from Hook of Holland to Rotterdam follows the Nieuwe Waterweg canal, offering a flat, fast, and scenic ride into the heart of Europe's largest port city.",
        stats: {
          distance: "20 Miles",
          time: "1.5 - 2 Hours",
          finish: "Rotterdam"
        },
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d157000.0!2d4.180026!3d51.909600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e1!4m5!1s0x47c44e99a80e4573%3A0x6b7762648795c697!2sHook%20of%20Holland!3m2!1d51.9775!2d4.1333!4m5!1s0x47c4335e5482326d%3A0x869ef4f85e3f164!2sRotterdam!3m2!1d51.9225!2d4.4791!5e0!3m2!1sen!2suk!4v1710123456790!5m2!1sen!2suk"
      },
      brunch: {
        title: "Brunch in Rotterdam",
        description: "Arrival in Rotterdam calls for a well-deserved brunch. We'll head towards the Markthal area, where modern architecture meets culinary excellence.",
        image: "/rotterdam-brunch.png",
        gallery: [
          { src: "/rotterdam-erasmus.png", caption: "ERASMUS BRIDGE" },
          { src: "/rotterdam-cubes.png", caption: "CUBE HOUSES" },
          { src: "/rotterdam-skyline.png", caption: "SKYLINE" }
        ]
      },
      accommodation: {
        name: "Basecamp Rotterdam",
        description: "After a morning of adventure, we check into our premium boutique hotel overlooking the Maas. Minimalist Dutch design meets maximum comfort.",
        features: ["Waterfront views of Erasmus Bridge", "Secure bike storage included"]
      },
      afternoon: {
        title: "Afternoon Sightseeing",
        gallery: [
          { src: "/markthal-interior.png", caption: "MARKTHAL ART" },
          { src: "/euromast-view.png", caption: "EUROMAST VIEW" }
        ]
      }
    },
    {
      id: 3,
      day: "Saturday",
      title: "Passing the Delta Works",
      description: "Today we tackle the Zeeland Delta Works. Cycling across these massive storm surge barriers is an experience like no other—vast expanses of water on both sides and the North Sea wind in your face.",
      stats: {
        distance: "118 km",
        time: "6h 30m"
      },
      image: "/zeeland-delta.png",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d636544.7830383377!2d3.5540453303869263!3d51.6212879508535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e1!4m5!1s0x47c43351369796e9%3A0xc47e33719488a07!2sRotterdam%2C%20Netherlands!3m2!1d51.9225006!2d4.4791718!4m5!1s0x47c350d0c11e330d%3A0x10099ab14c54460!2sBruges%2C%20Belgium!3m2!1d51.209348!2d3.2246995!5e0!3m2!1sen!2suk!4v1741285200000!5m2!1sen!2suk",
      gpxUrl: "/rotterdam-bruges-route.gpx",
      gallery: [
        { src: "/zeeland-delta.png", caption: "DELTA WORKS" },
        { src: "/middelburg-square.png", caption: "HISTORIC MIDDELBURG" }
      ],
      arrivalTitle: "Arrival in Bruges",
      arrivalGallery: [
        { src: "/bruges-markt.png", caption: "BRUGES MARKT" },
        { src: "/bruges-market2.png", caption: "MARKET BUSTLE" },
        { src: "/bruges-canals.png", caption: "BRUGES CANALS" },
        { src: "/bruges-steak.png", caption: "STEAK FRITES" },
        { src: "/bruges-canal2.png", caption: "CANAL SUNSET" },
        { src: "/bruges-beer.png", caption: "BELGIAN BEER" },
        { src: "/bruges-night.png", caption: "BRUGES NIGHT" }
      ],
      evening: {
        time: "19:30",
        title: "Evening in Bruges",
        description: "Check into a charming, historic hotel right on the canals. Spend the evening wandering the cobblestone streets, enjoying local chocolate.",
        hotelImage: "/bruges-hotel.png"
      }
    },
    {
      id: 4,
      day: "Sunday",
      title: "Bruges to Dunkirk",
      description: "Leaving the medieval charm of Bruges behind, we start our final coastal stretch riding west towards France. Crossing the border into French Flanders, the route is predominantly flat along scenic coastal paths and canals.",
      stats: {
        distance: "50 Miles",
        time: "4 Hours",
        elevation: "300 ft",
        finish: "Dunkirk"
      },
      quote: "The Coastal Finale",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d320501.46763748216!2d2.4719778100500824!3d51.128425783482456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e1!4m5!1s0x47c350d0c11e420d%3A0x1aa2f35ac8834df7!2sBruges%2C%20Belgium!3m2!1d51.208450799999994!2d3.2250585999999997!4m5!1s0x47dc8b6dd9ff20b9%3A0x40af13e81646da0!2sDunkirk%2C%20France!3m2!1d51.0343684!2d2.3767763!5e0!3m2!1sen!2suk!4v1772896121681!5m2!1sen!2suk",
      history: {
        title: "Victory at Dunkirk",
        parts: [
          {
            title: "A City of Resilience",
            description: "Dunkirk (Dunkerque) is a city defined by the sea and a spirit of resilience. Founded as a fishing settlement, it grew into a fortified port.",
            image: "/dunkirk-arrival.png",
            caption: "VICTORY AT DUNKIRK"
          },
          {
            title: "Corsairs & Heroes",
            description: "Famous for its maritime hero, the privateer Jean Bart. Best known for 'Operation Dynamo' in 1940, the WWII evacuation.",
            image: "/dunkirk-history.png",
            caption: "PLACE JEAN BART"
          }
        ]
      },
      evening: [
        {
          time: "19:00",
          title: "Evening in Dunkirk",
          hotel: "Radisson Blu Grand Hotel & Spa",
          description: "Check into the stunning Radisson Blu located right on the Malo-les-Bains promenade. Wash off the road salt and relax.",
          image: "/dunkirk-hotel.png",
          caption: "RADISSON BLU"
        },
        {
          time: "20:30",
          title: "Celebratory Dinner",
          restaurant: "L'Estaminet Flamand",
          description: "Hearty Carbonnade Flamande, golden fries, and a well-deserved local beer in a cozy, authentic setting.",
          image: "/dunkirk-restaurant.png",
          caption: "L'ESTAMINET FLAMAND"
        }
      ]
    },
    {
      id: 5,
      day: "Monday",
      title: "The Grand Return: Dunkirk, Dover, and London",
      description: "The final leg of our epic journey. We'll ride the coastal path from Dunkirk to Calais, crossing the English Channel by ferry. From Dover, we catch the high-speed train to London.",
      stats: {
        distance: "35 Miles (Bike)",
        time: "12 Hours",
        transport: "Ferry & Train",
        finish: "Bishop's Stortford"
      },
      quote: "Homeward Bound",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d161823.1234!2d1.956!3d50.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e1!4m5!1s0x47dc8b6dd9ff20b9!2sDunkirk!3m2!1d51.0343684!2d2.3767763!4m5!1s0x47dc436214532a21!2sCalais!3m2!1d50.95129!2d1.858686!5e0!3m2!1sen!2suk!4v1741285200000!5m2!1sen!2suk",
      multimodal: [
        {
          title: "Crossing the Channel",
          description: "After a breezy morning ride from Dunkirk to Calais, we board the ferry. enjoy the spectacular view of the White Cliffs of Dover.",
          image: "/dover-ferry.png",
          caption: "FERRY TO DOVER",
          icon: "Ship"
        },
        {
          title: "The London Dash",
          description: "A high-speed train from Dover drops us right into the heart of London. The final proper riding involves navigating the bustling capital streets.",
          image: "/london-ride.png",
          caption: "CAPITAL CROSSING",
          icon: "Train"
        },
        {
          title: "Bishop's Stortford",
          description: "The final train takes us smoothly out of the city and back to Bishop's Stortford. Time to head to the pub for a celebratory pint!",
          image: "/celebratory-pint.png",
          caption: "THE FINISH LINE",
          icon: "MapPin"
        }
      ]
    }
  ]
};
