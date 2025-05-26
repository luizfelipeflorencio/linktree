import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Instagram, ClipboardPenLine, MapPin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-md py-10 mx-auto select-none bg-pink-200">
      <Card className="bg-gray-200 p-6 space-y-4">

        {/* Profile */}
        <div className="flex flex-col text-center">
          <Avatar className="w-25 h-25 mx-auto">
            <AvatarImage src="./image.png" />
          </Avatar>

          <CardTitle className="text-xl font-bold pt-2">✨ Flávia Lilian Depilação ✨</CardTitle>
          <CardDescription className="text-md font-medium">Cuidados profissionais para sua pele com métodos modernos e seguros.
            Agende seu horário e sinta a diferença de uma depilação feita com carinho e qualidade!</CardDescription>
        </div>

        <span className="text-center text-accent-foreground text-md font-medium">📅 Marque sua sessão pelo link abaixo</span>

        {/* Links */}
        <div className="space-y-2">
          <Link href="https://www.instagram.com/flavialilian.depilacao/" target="_blank" passHref className="block">
            <Card className="flex bg-accent px-4 py-2 w-full cursor-pointer hover:bg-pink-100">
              <div className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-accent-foreground" />
                <span className="text-accent-foreground font-thin">Instagram</span>
              </div>
            </Card>
          </Link>
          <Link href="https://flavia-depilacao.vercel.app/" target="_blank" passHref className="block">
            <Card className="flex bg-accent px-4 py-2 w-full cursor-pointer hover:bg-pink-100">
              <div className="flex items-center gap-2">
                <ClipboardPenLine className="w-5 h-5 text-accent-foreground" />
                <span className="text-accent-foreground font-thin">Agendar Atendimento</span>
              </div>
            </Card>
          </Link>
          <Link href="https://maps.app.goo.gl/aZQmzAGVWNDfrwXA8" target="_blank" passHref className="block">
            <Card className="flex bg-accent px-4 py-2 w-full cursor-pointer hover:bg-pink-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent-foreground" />
                <span className="text-accent-foreground font-thin">Localização</span>
              </div>
            </Card>
          </Link>
        </div>
      </Card>
    </main >
  );
}