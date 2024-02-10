import { ReactNode } from "react";
import { LuMusic4 } from "react-icons/lu";

export default function Home() {
  return (
    <div className='w-screen h-full lg:h-full 2xl:h-screen md:h-screen bg-blue-300 px-10 py-[10px] font-outfit'>
      <div className="flex flex-col gap-4 lg:gap-10">
        <p className="text-3xl lg:text-6xl">Carta a minha nega</p>
        <Section />
        <p className="text-2xl lg:text-4xl">
            <strong>Bom amor...<br/></strong>
            Essa é uma promessa que fiz a você de fazer um site para você, mas nunca tive criatividade, mas eu fiquei pensando, se eu não começar ou tentar nunca vou fazer o melhor bb... <br />
            Esse é um primeiro site meu amor... <br /> 
            Preciso aprender mais ainda com você com Deus, obrigado por tudo, por esta aqui comigo não sou o melhor e estou longe disso, mas meu amor vou tentar, tentar de novo...! <br />
            Mesmo que eu não consigar levantar, eu vou tentar.<br />
            Deus tem um plano para nós ( eu creio bb ) e sei que a vontade Dele é a melhor para nós no relacionamento e no individual bb.<br />
            To com medo de tentar escrever demais e não ser o que você quer...<br />
            Ou o site não for do jeito que você achavar que seria...<br />
            Uma Carta Aberta pareceu algo muito bom bb...<br />
            Por quer sempre tentei escrever para você, mesmo tendo um português muito ruim ( também vou melhorar ele bb ) mesmo assim preferir escrever bb...<br />
            Eu te amo, e obrigado por tudo.<br />
            E para o site não ser só um texto grande bb, vou colocar algumas coisa bb...<br />
        </p>
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
          <Button type="ararinha" link="https://www.youtube.com/watch?v=EJpcrZaX10Y&pp=ygUIYXJhcmluaGE%3D" >
              Aranha...
          </Button>
          <Button type="doIWannaKnow" link="https://www.youtube.com/watch?v=bpOSxM0rNPM&pp=ygUPZG8gaSB3YW5uYSBrbm93" >
              Do I Wanna Know...
          </Button>
        </div>
      </div>
    </div>
  );
}
// lg:flex lg:flex-row lg:gap-10

function Section(){
  return(
    <div className="h-[2px] w-full bg-blue-400"></div>
  )
}

interface ButtonProps{
  link: string
  children: ReactNode
  type: 'ararinha' | "doIWannaKnow"
}

function Button({ link, children, type }: ButtonProps){

  if (type === "ararinha"){
    return(
      <a href={link} target="_blank">
        <div className="flex flex-row gap-5 items-center justify-center lg:justify-normal text-2xl lg:text-4xl text-neutral-50 p-5 bg-blue-400 rounded-xl hover:bg-blue-600">
          <LuMusic4 />
          <p>{children}</p>
        </div>
      </a>
    )  
  } else if (type === "doIWannaKnow"){
    return(
      <a href={link} target="_blank">
        <div className="flex flex-row gap-5 items-center justify-center lg:justify-normal text-2xl lg:text-4xl text-neutral-50 p-5 bg-neutral-800 rounded-xl hover:bg-neutral-400 hover:text-neutral-700">
          <LuMusic4 />
          <p>{children}</p>
        </div>
      </a>
    )
  }
  
}