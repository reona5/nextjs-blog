import Container from "./layout.module";

function Layout({ children }) {
  return (
    <div>
      <Container>{children}</Container>
    </div>
  );
}

export default Layout;
