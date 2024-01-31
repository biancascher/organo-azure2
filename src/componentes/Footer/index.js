import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/assets/fb.png" alt="facebook logo" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/assets/tw.png" alt="twitter logo" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/assets/ig.png" alt="instagram logo" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img
          className="logo"
          src="/assets/logo_azure.png"
          width={200}
          height={200}
          alt="logo do azure"
        />
      </section>
      <section>
        <p>Desenvolvido por Bianca Schereiber</p>
      </section>
    </footer>
  );
};

export default Footer;
