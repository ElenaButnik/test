import { Header } from "./components/header/Header";
import { Heroy } from "./components/heroy/Heroy";
import { GetRequest } from "./components/getRequest/GetRequest";
import { PostRequest } from "./components/postRequest/PostRequest";
import "./App.css";

function App() {
  const pageScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Header />
      <Heroy />
      <GetRequest pageScroll={pageScroll} />
      <PostRequest pageScroll={pageScroll} />
    </div>
  );
}

export default App;
