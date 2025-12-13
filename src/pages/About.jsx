import professions from '../data/professions.json'

export default function AboutUs() {
  return (
    <>
      <div className="bg-[url('/image/About.png')] bg-cover bg-center h-[100vh] flex justify-center items-center text-center">
        <h2 className="text-[49px] font-semibold text-white w-[710px]">
          We Create Bunch Of Enthusiastic & Creative Minds
        </h2>
      </div>

      <div className="mx-auto w-full max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1400px] space-y-16 p-4">
        <div className="mt-8">
          <h2 className=" text-[37px] font-medium">About Us</h2>
          <p className="text-[18px] xl:w-[600px]">
            Tenzor Soft LLC is a leading software developer in Uzbekistan,
            operating in the IT services market since 2008. For over 15 years,
            we have established ourselves as a reliable partner in digital
            technologies, offering innovative solutions for business process
            automation, web application development, and corporate systems.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex gap-[20px]">
            <div className="bg-[#FBBF0A] w-[70px] h-[70px] flex items-center justify-center rounded-full">
              <img src="/logo/services.png" className="w-[32px] h-[27px]" />
            </div>
            <div>
              <h2 className="w-[170px] text-[22px] font-medium">
                Effective project management
              </h2>
              <p className="w-[265px]">
                Full support of projects using modern methodologies and
              </p>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="bg-[#3BCEAC] w-[70px] h-[70px] flex items-center justify-center rounded-full">
              <img src="/logo/services4.png" className="w-[32px] h-[27px]" />
            </div>
            <div>
              <h2 className="w-[211px]  text-[22px] font-medium">
                Cross-platform and responsive design
              </h2>
              <p className="w-[211px]">
                We create designs that look flawless on any
              </p>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="bg-[#43A7FC] w-[70px] h-[70px] flex items-center justify-center rounded-full">
              <img src="/logo/services2.png" className="w-[32px] h-[27px]" />
            </div>
            <div>
              <h2 className="w-[160px]  text-[22px]  font-medium">
                Monitoring and time tracking
              </h2>
              <p className="w-[245px]">
                Accurate solutions for time tracking and productivity
                improvement
              </p>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="bg-[#D1345B] w-[70px] h-[70px] flex items-center justify-center rounded-full">
              <img src="/logo/services3.png" className="w-[32px] h-[27px]" />
            </div>
            <div className="w-[136px]">
              <h2 className="w-[240px] text-[22px]  font-medium">
                Creating innovative mobile applications
              </h2>
              <p className="w-[246px]">
                We develop custom mobile solutions that stand out in the market.
              </p>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 space-y-4">
          <div className="flex gap-5 h-full">
            <div className="bg-[#FBBF0A] w-[70px] h-[70px] flex items-center justify-center rounded-full shrink-0">
              <img src="/logo/services.png" className="w-8 h-7" />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-[22px] font-medium leading-snug">
                Effective project management
              </h2>
              <p className="text-gray-600">
                Full support of projects using modern methodologies and
              </p>
            </div>
          </div>

          <div className="flex gap-5 h-full">
            <div className="bg-[#3BCEAC] w-[70px] h-[70px] flex items-center justify-center rounded-full shrink-0">
              <img src="/logo/services4.png" className="w-8 h-7" />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-[22px] font-medium leading-snug">
                Cross-platform and responsive design
              </h2>
              <p className="text-gray-600">
                We create designs that look flawless on any
              </p>
            </div>
          </div>

          <div className="flex gap-5 h-full">
            <div className="bg-[#43A7FC] w-[70px] h-[70px] flex items-center justify-center rounded-full shrink-0">
              <img src="/logo/services2.png" className="w-8 h-7" />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-[22px] font-medium leading-snug">
                Monitoring and time tracking
              </h2>
              <p className="text-gray-600">
                Accurate solutions for time tracking and productivity
                improvement
              </p>
            </div>
          </div>

          <div className="flex gap-5 h-full">
            <div className="bg-[#D1345B] w-[70px] h-[70px] flex items-center justify-center rounded-full shrink-0">
              <img src="/logo/services3.png" className="w-8 h-7" />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-[22px] font-medium leading-snug">
                Creating innovative mobile applications
              </h2>
              <p className="text-gray-600">
                We develop custom mobile solutions that stand out in the market.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5 mb-20">
          <p className="text-[18px]">
            Наш штат включает более 30 квалифицированных специалистов, среди
            которых:
          </p>
          <ul className="ml-5">
            {professions.map((p, i) => (
                <li className="text-[18px] flex gap-1" key={i}>
                <p>
                  <span className="font-medium">{p.name}</span> — {p.title}
                </p>
              </li>
            ))}
          </ul>

          <p className="text-[18px]">
            {" "}
            Мы гордимся нашим профессионализмом и опытом, который позволяет нам
            выполнять задачи любого уровня сложности — от создания небольших
            веб-приложений до автоматизации крупных производственных и торговых
            предприятий. Наша миссия — помогать бизнесам развиваться с помощью
            современных технологий, внедряя индивидуальные решения, которые
            соответствуют потребностям клиентов.{" "}
          </p>
          <p className="text-[18px]">
            {" "}
            В ООО “Tenzor Soft” мы уделяем внимание качеству и долгосрочному
            партнерству. Каждый проект для нас — это возможность предложить
            клиенту решение, которое облегчит его бизнес и позволит ему
            сосредоточиться на росте и развитии.
          </p>
          <p className="text-[18px]">
            {" "}
            Свяжитесь с нами, чтобы узнать больше о том, как мы можем помочь
            вашему бизнесу шагнуть в будущее с помощью инновационных IT-решений.
          </p>
        </div>
      </div>
    </>
  );
}
