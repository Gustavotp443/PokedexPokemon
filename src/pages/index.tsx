import { HomeContainer, Pokedex, Header, Welcome, GifContainer } from "../styles/index.style";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { SiPokemon } from "react-icons/si";
import PokedexButton from "../components/PokedexButton";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <HomeContainer>
        <Header>
          <SiPokemon />
          <Welcome>
            <AiOutlineLeft />
            <h2>Welcome to <br />Pokemon World !</h2>
            <AiOutlineRight />
          </Welcome>
          <GifContainer>
            <img src="/images/pikachu.gif" alt="Pikachu GIF" />
            <Link href="/pokedex">
              <Pokedex>
                <PokedexButton />
              </Pokedex>
            </Link>
          </GifContainer>
        </Header>
      </HomeContainer>
    </>
  );
}
