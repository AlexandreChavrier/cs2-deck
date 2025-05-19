// import { maps, getActiveMapsList } from '@/data/maps';
import PrimaryButton from "@/components/ui/buttons/Buttons";
import ButtonsTest from '@/components/ui/buttons/ButtonsTest';
import SteamIcon from '@/components/ui/icons/SteamIcon';


export default function Home() {

  return (
    <main>
      <h1>Bienvenue sur mon application</h1>
      <p>Ceci est ma page d'accueil Next.js</p>
      <PrimaryButton 
      title="Voir toutes les cartes"
      />
      <ButtonsTest
        title="Bonjour"
        size="sm"
        variant="outline"
        icon={<SteamIcon/>}
      />

    </main>
  );
}