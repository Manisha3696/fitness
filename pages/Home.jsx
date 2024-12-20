import React from 'react';
import '../css/Home.css'
function Home() {
  return (
    <div>
      <section className="home">
      <div className="welcome">
        <h2>Welcome to U Turn Muscled Fitness</h2>
        <p>Your journey to health and fitness starts here!</p>
        <button>Join Now</button>
      </div>
      <div className="features">
        <div className="feature">
          <h3>State-of-the-Art Gym</h3>
          <p>Fully equipped with modern equipment.</p>
        </div>
        <div className="feature">
          <h3>Zumba Classes</h3>
          <p>Fun and energetic group sessions.</p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;
