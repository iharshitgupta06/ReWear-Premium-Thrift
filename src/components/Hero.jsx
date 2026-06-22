import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text fade-in">
          <span className="eyebrow">Curated Circular Fashion</span>
          <h1 className="hero__title">
            ReWear
            <span className="hero__title-sub">Premium Pre-Loved Fashion</span>
          </h1>
          <p className="hero__desc">
            Every piece in our closet has a past worth keeping. We find,
            inspect, and restore exceptional clothing so it can be loved
            again — without the cost of making something new.
          </p>
          <div className="hero__ctas">
            <Link to="/shop?gender=Men" className="btn btn-primary">
              Shop Men
            </Link>
            <Link to="/shop?gender=Women" className="btn btn-outline">
              Shop Women
            </Link>
          </div>
        </div>

        <div className="hero__media">
          <img
            src="https://images.openai.com/static-rsc-4/Gt7g_b9vMVEX5o8HUKIkU1IHbVKIfs8kPxumkwU_LTmqOEVBEfiW7Wkos5-pvR6C5Akl1gCxgCjzyxBEC-ATRKiLErH2XCiAIJ3l8sbMmEo6OHgMm7gXyXsFvc-5JpU3VV2luSOsHCm1EWwRLYlRMe-4qrv4dfDMaPd6kcjwDOPZZ-dFrK1yfYDiIg8unV0X?purpose=fullsize"
            alt="Curated pre-loved fashion pieces from ReWear"
            className="hero__media-main"
          />
          <img
            src="https://images.openai.com/static-rsc-4/kKFDBZUwf4OgSpaM0RyNKTv1uFqr6pQFUFbvPak4244iYIjOkbgXaMFrnDFZeoiGEmCfZUOgU_ey9XRMS8T_X0Z_imoNKbV0euuUpYGA1JfEK_qNXiE_OYwmnlliX17TNe1H-UmBvqPc9vPzTIxIoKZFmD8NWTKU_fmUTTj553mzbNIV9JxTYuLtPP-8KEL1?purpose=fullsize"
            alt="Detail of a pre-loved garment"
            className="hero__media-accent"
          />
        </div>
      </div>
    </section>
  );
}
