import Footer from "./Footer";
import Header from "./Header";
import Homes from "./Homes";
import Scene3D from "./Scene3D";
export default function page() {
  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      <Header />
      <Scene3D />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "40px",
          color: "white",
          textAlign: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Homes />
      </div>
      <Footer />
    </main>
  );
}
