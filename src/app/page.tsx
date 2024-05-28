import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-[#f9f9f9] py-4">
        <div className="flex flex-col items-center gap-4">
          <div className="text-4xl text-center font-bold text-[#6d1b7b]">
            JAMIE
          </div>
          <Image
            src="/Avatar.png"
            alt="Avatar"
            className="dark:invert"
            width={300}
            height={300}
            priority
          />
        </div>

        <div className="text-3xl text-center my-4">
          🌟 Senior Frontend Developer
        </div>

        <div className="text-xs flex flex-col items-center">
          <div>
            <div>🎖️ ReactJS / NextJs</div>
            <div>🎖️ Angular 17</div>
            <div>🎖️ VueJS 3</div>
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold mb-4 bg-[#8f9a27] text-white pl-6 px-6">
        Projects
      </div>
      <div className="m-6">
        <div className="flex flex-col gap-4">
          <div className="flex">
            <div className="w-full">
              <Link className="mb-3 font-bold" href="https://app.shiftbase.com">
                Shiftbase
              </Link>

              <Image
                src="/Shiftbase.png"
                alt="Shiftbase"
                className="dark:invert"
                width={600}
                height={600}
                priority
              />
            </div>
            <div className="h-full ml-[20px] mt-[32px]">
              <div className="font-bold">Employee management software</div>
              <div className="text-[12px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-full">
              <Link
                className="mb-3 font-bold"
                href="https://practice.treatanyone.com/auth/login"
              >
                Treatanyone
              </Link>

              <Image
                src="/Treatanyone.png"
                alt="Treatanyone"
                className="dark:invert"
                width={600}
                height={600}
                priority
              />
            </div>
            <div className=" h-full ml-[20px] mt-[32px]">
              <div className="font-bold">
                End-to-end clinical practice managment software
              </div>
              <div className="text-[12px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-full">
              <Link
                className="mb-3 font-bold"
                href="https://client.sunlife.com.ph/SunRisePortal/#/login"
              >
                Sunrise
              </Link>

              <Image
                src="/Sunlife.png"
                alt="Sunrise"
                className="dark:invert"
                width={600}
                height={600}
                priority
              />
            </div>
            <div className="h-full ml-[20px] mt-[32px]">
              <div className="font-bold">
                Investment and Insurance for employees application
              </div>
              <div className="text-[12px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-full">
              <Link className="mb-3 font-bold" href="https://www.arcadier.com/">
                Arcadier
              </Link>

              <Image
                src="/Arcadier.png"
                alt="Arcadier"
                className="dark:invert"
                width={600}
                height={600}
                priority
              />
            </div>
            <div className="h-full ml-[20px] mt-[32px]">
              <div className="font-bold">Online Marketplace</div>
              <div className="text-[12px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-full">
              <Link
                className="mb-3 font-bold"
                href="https://keepitfresh.nissanusa.com/"
              >
                Nissan
              </Link>

              <Image
                src="/Nissan.png"
                alt="Nissan"
                className="dark:invert"
                width={600}
                height={600}
                priority
              />
            </div>
            <div className="h-full ml-[20px] mt-[32px]">
              <div className="font-bold">
                Advertisement website for nissan car
              </div>
              <div className="text-[12px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs p-4 text-white bg-[#000000]">
        Copyright 2024 Jamie Socorro
      </div>
    </div>
  );
}
