import { useRef } from 'react'
import { Layout } from '../components/Layout'
import { ProfileForm } from '../components/ProfileForm'


export default function Home() {
  const formSectionRef = useRef<HTMLDivElement>(null)

  const scrollToFormSection = () => {
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <>

    <Layout />
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start text-left text-31xl text-bb-green font-manrope">
      <img className="w-[1586.09px] absolute !m-[0] top-[1633.92px] left-[-740px] h-[1008.99px] object-cover opacity-[0.4] z-[0]" alt="" src="https://kgbiwzxndpstlvvpwztg.supabase.co/storage/v1/object/public/Images/Gradient.png" />
      <img className="w-[1586.09px] absolute !m-[0] top-[2973.92px] left-[930px] h-[1008.99px] object-cover opacity-[0.4] z-[2]" alt="" src="https://kgbiwzxndpstlvvpwztg.supabase.co/storage/v1/object/public/Images/Gradient.png" />
      <img className="w-[1586.09px] absolute !m-[0] top-[633.92px] left-[810px] h-[1008.99px] object-cover opacity-[0.4] z-[3]" alt="" src="https://kgbiwzxndpstlvvpwztg.supabase.co/storage/v1/object/public/Images/Gradient.png" />
      <img className="w-[1586.09px] absolute !m-[0] top-[3.92px] left-[-840px] h-[1008.99px] object-cover opacity-[0.4] z-[4]" alt="" src="https://kgbiwzxndpstlvvpwztg.supabase.co/storage/v1/object/public/Images/Gradient.png" />
      <div className="relative w-full max-w-[1440px] flex flex-col items-center justify-center py-16 px-2.5 box-border z-[5] text-[72px] text-seagreen">
        <div className="relative w-full flex flex-col lg:flex-row items-start justify-start gap-[58px]">
          <div className="relative w-full flex flex-col items-start justify-start gap-[91px]">
            <div className="relative w-full md:w-[726px] flex flex-col items-start justify-start gap-[64px]">
              <div className="relative w-full flex flex-col items-start justify-start gap-[32px]">
                <div className="relative w-full self-stretch flex flex-col items-start justify-start gap-[32px]">
                  <img className="w-[167.91px] relative h-[188.66px] object-cover" alt="" src="https://kgbiwzxndpstlvvpwztg.supabase.co/storage/v1/object/public/Images/Logo-klinike.png" />
                  <div className="self-stretch relative tracking-[-0.05em] leading-[125%] font-medium">
                    <span>III Simpozijum</span>
                    <span className="text-black"> Klinika za psihijatriju, UKC Niš</span>
                  </div>
                </div>
                <div className="w-full relative flex flex-col items-start justify-start text-[42px] lg:text-[56px] text-plum">
                  <div className="w-full relative tracking-[-0.05em] leading-[125%] font-medium inline-block">Agresija i nasilje, psiho(pato)loški aspekt - multidisciplinarni pristup</div>
                </div>
              </div>
              <div className="self-stretch relative text-5xl tracking-[-0.01em] leading-[140%] text-black">Klinika za psihijatriju u G.Toponici, UKC Niš, sa velikim zadovoljstvom vas poziva na III Simpozijum (akreditacija u toku) na temu „Agresija i nasilje psiho(pato)loški aspekt -multidisciplinarni pristup“ koji će se održati od 30.05.-01.06.2024. godine u Kuršumlijskoj banji, hotel „Planinka“.</div>
            </div>
            <div className="lg:w-[584px] w-full flex flex-col items-start justify-start gap-[16px] text-7xl text-white">
              <button type='button' onClick={() => scrollToFormSection()} className="w-full rounded-13xl bg-seagreen shadow-[0px_2px_4px_rgba(48,_49,_51,_0.1),_0px_0px_1px_rgba(48,_49,_51,_0.05)] h-[76px] flex flex-row items-center justify-center py-6 px-12 box-border">
                <span className="relative leading-[109.5%] font-semibold">Prijavi se</span>
              </button>
              <div className="relative text-5xl leading-[109.5%] text-dimgray">Broj mesta je ograničen</div>
            </div>
          </div>
          <img className="w-[494.65px] relative rounded-[27.84px] h-[865px] object-cover" alt="" src="https://kgbiwzxndpstlvvpwztg.supabase.co/storage/v1/object/public/Images/Slika-2.png" />
        </div>
      </div>
      <div className="relative w-full max-w-[1440px] flex flex-col lg:flex-row items-start justify-start p-[16px] lg:p-20 box-border gap-[84px] z-[6] text-lg">
        <div className="self-stretch w-full lg:w-[620px] rounded-lg flex flex-col items-start justify-start gap-[24px]">
          <div className="flex flex-col lg:flex-row items-start justify-start gap-[4px]">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9999 14.0896C13.723 14.0896 15.1199 12.6927 15.1199 10.9696C15.1199 9.24648 13.723 7.84961 11.9999 7.84961C10.2768 7.84961 8.87988 9.24648 8.87988 10.9696C8.87988 12.6927 10.2768 14.0896 11.9999 14.0896Z" stroke="#292D32" strokeWidth="1.5" />
              <path d="M3.61971 9.15016C5.58971 0.490159 18.4197 0.500159 20.3797 9.16016C21.5297 14.2402 18.3697 18.5402 15.5997 21.2002C13.5897 23.1402 10.4097 23.1402 8.38971 21.2002C5.62971 18.5402 2.46971 14.2302 3.61971 9.15016Z" stroke="#292D32" strokeWidth="1.5" />
            </svg>
            <div className="w-[290px] relative flex items-end shrink-0">Mesto</div>
          </div>
          <a href='https://maps.app.goo.gl/JWM9qMN9cZatsNoMA' target="_blank" rel="noreferrer"  className="w-full self-stretch relative text-29xl [text-decoration:underline] text-seagreen">Kursumlijska Banja<br/>hotel “Planinka”</a>
        </div>
        <div className="self-stretch w-full lg:w-[620px] rounded-lg flex flex-col items-start justify-start gap-[24px]">
          <div className="flex flex-row items-start justify-start gap-[4px]">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2.66016V5.66016" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 2.66016V5.66016" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.5 9.75H20.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 9.16016V17.6602C21 20.6602 19.5 22.6602 16 22.6602H8C4.5 22.6602 3 20.6602 3 17.6602V9.16016C3 6.16016 4.5 4.16016 8 4.16016H16C19.5 4.16016 21 6.16016 21 9.16016Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.6947 14.3594H15.7037" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.6947 17.3594H15.7037" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.9955 14.3594H12.0045" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.9955 17.3594H12.0045" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.29431 14.3594H8.30329" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.29431 17.3594H8.30329" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="w-[290px] relative flex items-end shrink-0">Vreme</div>
          </div>
          <b className="self-stretch relative text-29xl">30.05.2024. - 01.06.2024.</b>
        </div>
      </div>
      <section ref={formSectionRef} id="form-section" className="w-full max-w-[1440px] flex flex-col lg:flex-row items-start justify-start p-[16px] lg:p-20 box-border gap-[40px] z-[7]">
        {/* prvi deo forme */}
        <ProfileForm />
        {/* downloads */}
        <div className="w-full lg:w-[620px] flex flex-col items-center justify-center gap-[40px] text-center text-5xl">
          <b className="w-[400px] relative flex items-center justify-center">Preuzmite program i paket simpozijuma</b>
          <div className="w-full lg:w-[405px] flex flex-col items-start justify-start gap-[32px] text-left text-7xl text-white">
            <a href="https://kgbiwzxndpstlvvpwztg.supabase.co/storage/v1/object/public/Images/PROGRAM%20SIMPOZIJUMA%20(2).docx" download="program.ext" className="self-stretch rounded-13xl bg-plum shadow-[0px_2px_4px_rgba(48,_49,_51,_0.1),_0px_0px_1px_rgba(48,_49,_51,_0.05)] h-[76px] flex flex-row items-center justify-center py-6 px-12 box-border gap-[8px]">
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.1378 14.0273C30.5191 14.4907 32.7164 17.2561 32.7164 23.31V23.5043C32.7164 30.186 30.0407 32.8617 23.359 32.8617H13.6279C6.94618 32.8617 4.27051 30.186 4.27051 23.5043V23.31C4.27051 17.3009 6.43796 14.5356 11.7295 14.0423" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.5 3.71289V22.9658" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23.5083 19.6328L18.5007 24.6404L13.4932 19.6328" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div className="relative leading-[109.5%] font-semibold">Plan i Program</div>
            </a>
            <a href="https://kgbiwzxndpstlvvpwztg.supabase.co/storage/v1/object/public/Images/KONGRESNI%20PAKET%20za%20sajt.docx" download="kongresni-paket.ext" className="self-stretch rounded-13xl bg-plum shadow-[0px_2px_4px_rgba(48,_49,_51,_0.1),_0px_0px_1px_rgba(48,_49,_51,_0.05)] h-[76px] flex flex-row items-center justify-center py-6 px-12 box-border gap-[8px]">
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.1378 14.0273C30.5191 14.4907 32.7164 17.2561 32.7164 23.31V23.5043C32.7164 30.186 30.0407 32.8617 23.359 32.8617H13.6279C6.94618 32.8617 4.27051 30.186 4.27051 23.5043V23.31C4.27051 17.3009 6.43796 14.5356 11.7295 14.0423" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.5 3.71289V22.9658" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23.5083 19.6328L18.5007 24.6404L13.4932 19.6328" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div className="relative leading-[109.5%] font-semibold">Kongresni Paket</div>
            </a>
          </div>
          <img className="w-[463.71px] relative rounded-13xl h-[618.28px] object-cover" alt="" src="https://kgbiwzxndpstlvvpwztg.supabase.co/storage/v1/object/public/Images/Slika-1.png" />
        </div>
      </section>
      <section className="w-full max-w-[1440px] flex flex-col items-start justify-start p-[16px] lg:p-20 box-border gap-[32px] z-[8]">
        <b className="relative">Stručno-organizacioni odbor</b>
        <div className="self-stretch flex flex-col items-start justify-start gap-[48px] text-lg text-gray font-dm-mono">
          <div className="w-full lg:w-[828px] flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch relative tracking-[0.1em] leading-[14px] uppercase font-medium">Predsednik</div>
            <div className="self-stretch rounded-[32px] lg:rounded-[123189px] bg-white overflow-hidden flex flex-col lg:flex-row items-center justify-start p-5 gap-[48px] text-13xl text-black font-manrope border-[2px] border-solid border-teal">
              <img className="w-[172.37px] relative rounded-[86.19px] h-[181.39px] object-cover" alt="" src="https://kgbiwzxndpstlvvpwztg.supabase.co/storage/v1/object/public/Images/Slika-3.png" />
              <div className="flex flex-col items-center lg:items-start justify-center gap-[8px]">
                <div className="relative tracking-[-0.05em] leading-[40px] font-medium text-center lg:text-start">Prof. dr Suzana Tosic Golubovic</div>
                <div className="relative text-5xl leading-[109.5%] text-dimgray">psihijatar</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch relative tracking-[0.1em] leading-[14px] uppercase font-medium">Članovi</div>
            <div className="self-stretch flex flex-col lg:flex-row items-start justify-between text-13xl text-black font-manrope">
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-col items-start justify-center gap-[8px]">
                  <div className="relative tracking-[-0.05em] leading-[40px] font-medium">Dr Nada Ćirič</div>
                  <div className="relative text-5xl leading-[109.5%] text-dimgray">psihijatar</div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[8px]">
                  <div className="relative tracking-[-0.05em] leading-[40px] font-medium">Prof. dr Olivera Žikić</div>
                  <div className="relative text-5xl leading-[109.5%] text-dimgray">psihijatar</div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[8px]">
                  <div className="relative tracking-[-0.05em] leading-[40px] font-medium">Dr sci.med. Snežana Manojlović</div>
                  <div className="relative text-5xl leading-[109.5%] text-dimgray">psihijatar</div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[8px]">
                  <div className="relative tracking-[-0.05em] leading-[40px] font-medium">Dr Iva Binić</div>
                  <div className="relative text-5xl leading-[109.5%] text-dimgray">psihijatar</div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[8px]">
                  <div className="relative tracking-[-0.05em] leading-[40px] font-medium">Mr. sci med. Violeta Slavković</div>
                  <div className="relative text-5xl leading-[109.5%] text-dimgray">psihijatar</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-col items-start justify-center gap-[8px]">
                  <div className="relative tracking-[-0.05em] leading-[40px] font-medium">Dr Vladica Sibinović</div>
                  <div className="relative text-5xl leading-[109.5%] text-dimgray">psihijatar</div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[8px]">
                  <div className="relative tracking-[-0.05em] leading-[40px] font-medium">Dr Tanja Mladenović</div>
                  <div className="relative text-5xl leading-[109.5%] text-dimgray">psihijatar</div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[8px]">
                  <div className="relative tracking-[-0.05em] leading-[40px] font-medium">Dr Jovana Petrović</div>
                  <div className="relative text-5xl leading-[109.5%] text-dimgray">specijalizant iz psihijatrije</div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[8px]">
                  <div className="relative tracking-[-0.05em] leading-[40px] font-medium">Dr Milan Petković</div>
                  <div className="relative text-5xl leading-[109.5%] text-dimgray">specijalizant iz psihijatrije</div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[8px]">
                  <div className="relative tracking-[-0.05em] leading-[40px] font-medium">Dr Uroš Gugleta</div>
                  <div className="relative text-5xl leading-[109.5%] text-dimgray">specijalizant iz psihijatrije</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[64px]">
                <div className="flex flex-col items-start justify-center gap-[8px]">
                  <div className="relative tracking-[-0.05em] leading-[40px] font-medium">Dr Anja Vručinić</div>
                  <div className="relative text-5xl leading-[109.5%] text-dimgray">specijalizant iz psihijatrije</div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[8px]">
                  <div className="relative tracking-[-0.05em] leading-[40px] font-medium">Dr Nikola Stojanović</div>
                  <div className="relative text-5xl leading-[109.5%] text-dimgray">specijalizant iz psihijatrije</div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[8px]">
                  <div className="relative tracking-[-0.05em] leading-[40px] font-medium">Sonja Spremo</div>
                  <div className="relative text-5xl leading-[109.5%] text-dimgray">glavna sestra</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>


}
