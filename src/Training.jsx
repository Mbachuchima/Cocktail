import React from "react";
import "./training.css";

const Training = () => {
  return (
    <section className="training-blog">
      <div className="blog-container">
        <h1 className="blog-title">Chima cocktail level</h1>
        <p className="blog-intro">
          Dive into the art of mixology! Explore our training guides and learn
          how to mix, shake, and serve cocktails like a pro.
        </p>

        {/* Blog Post 1 */}
        <article className="blog-post">
          <h2>🍸 Beginner’s Guide to Cocktails</h2>
          <p>
            Starting your mixology journey? Learn the basics of bar tools,
            glassware, and easy cocktails such as <strong>Mojito</strong> and{" "}
            <strong>Martini</strong>. Understanding measurements and balance is
            key to crafting your first drinks.
          </p>
        </article>

        {/* Blog Post 2 */}
        <article className="blog-post">
          <h2>🍹 Intermediate Techniques</h2>
          <p>
            Once you’ve mastered the basics, it’s time to level up! Practice
            shaking, stirring, and layering while trying out classics like{" "}
            <strong>Margarita</strong>, <strong>Daiquiri</strong>, and{" "}
            <strong>Whiskey Sour</strong>. Don’t forget the importance of
            garnish — it’s the finishing touch.
          </p>
        </article>

        {/* Blog Post 3 */}
        <article className="blog-post">
          <h2>🥂 Advanced Mixology</h2>
          <p>
            At this stage, you’ll explore molecular mixology, signature
            cocktails, and presentation skills that impress. Create unique
            drinks that reflect your style while experimenting with syrups,
            infusions, and creative garnishes.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Training;
