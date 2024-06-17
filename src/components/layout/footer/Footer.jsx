import { Container } from "../../../style/style";

const Footer = () => {
  return (
    <div className="w-full h-64 bg-slate-300 ">
      <Container>
        <div className="text-center">
          <p>&copy; 2023 - Built with Gatsby</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
