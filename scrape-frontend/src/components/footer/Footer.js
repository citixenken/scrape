import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="ui container">
        <div className="ui inverted grey vertical footer padded segment">
          <div className="ui center aligned container">
            <div className="text-center p-3">
              Scrape 2022 © All Rights Reserved. Created by
              <a
                className="text-dark"
                style={{ color: "turquoise" }}
                href="https://linktr.ee/citixenken"
                target="_blank"
                rel="noreferrer"
              >
                @citixenken
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
