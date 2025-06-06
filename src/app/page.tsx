import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <div id="test" className="bg-[#ffffff] shadow-xl relative z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-full">
              <div className="flex items-center text-4xl text-center font-bold text-white bg-black w-full p-4">
                <span className="w-[100px]">
                  <Image
                    src="./dev-icon.png"
                    alt="Avatar"
                    className="dark:invert"
                    width={50}
                    height={50}
                    priority
                  />
                </span>

              </div>

            </div>


          </div>

          <div>
            <div className="flex flex-col justify-center items-center gap-8 md:flex-row ">
              <div className="sm: p-4">
                <div className="text-4xl font-bold">Jamie <span className="text-[#64dd17]">Socorro</span></div>
                <div className="text-xs mt-4">
                  <div className="text-[#a9a9a9]">
                    <div>
                      A Web Developer based in Manila, Philippines, with 10+ years of remote work experience.

                    </div>
                    <div>

                      Skilled in productivity, digital collaboration, and adapting to evolving industry trends.
                    </div>

                  </div>
                </div>
              </div>

              <div>
                <Image
                  src="./Avatar.gif"
                  alt="Avatar"
                  className="dark:invert"
                  width={300}
                  height={300}
                  priority
                />
              </div>

              <div className="flex flex-col  sm: p-4">
                <div className="text-3xl font-bold">
                  <span className="text-[#d50000]">Senior </span>Frontend Developer
                </div>
                <div className="text-xs mt-4">
                  <div className="text-[#a9a9a9]">
                    <div>Experienced front-end developer proficient in ReactJS, NextJS, Angular, CSS, and HTML.</div>
                    <div>Has a strong focus on building dynamic, responsive, and user-friendly web applications</div></div>

                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-[#fafafa] p-6">
          <div className="grid  gap-x-4 gap-y-8 p-6 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div> <div className="w-full">
                <div className="mb-3 font-bold">
                  Projectler
                </div>

                <Link href="https://app.projectler.com/login" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="./Projectler.png"
                    alt="Projectler"
                    className="dark:invert hover:opacity-80 transition-opacity"
                    width={600}
                    height={600}
                    priority
                  />
                </Link>
              </div>
                <div className="h-full ml-[20px] mt-[32px]">
                  <div className="font-bold">Project management software</div>
                  <div className="text-[12px] text-[#a9a9a9]">
                    Projectler is a project management software that allows you to create, manage, and track your projects.

                    I built the frontend architecture and implemented the core features of the project.
                  </div>
                  <div className="text-[12px] mt-2">
                    <div className="font-bold">
                      Position: Senior Frontend Developer
                    </div>
                    <div>
                      Year: 2024
                    </div>
                    <div>
                      Technologies: ReactJS, NextJS, Material UI, TypeScript, HTML
                    </div>



                    <div>

                    </div>
                  </div>
                </div></div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div>
                <div className="w-full">
                  <div className="mb-3 font-bold">
                    Shiftbase
                  </div>

                  <Link href="https://app.shiftbase.com" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="./Shiftbase.png"
                      alt="Shiftbase"
                      className="dark:invert hover:opacity-80 transition-opacity"
                      width={600}
                      height={600}
                      priority
                    />
                  </Link>
                </div>
                <div className="h-full ml-[20px] mt-[32px]">
                  <div className="font-bold">Employee management software</div>
                  <div className="text-[12px] text-[#a9a9a9]">
                    Shiftbase provides an innovative scheduling solution for businesses employing part-time and flexible staff.

                    I focused on the frontend development and implemented the core features of the project.
                  </div>
                  <div className="text-[12px] mt-2">
                    <div className="font-bold">
                      Position: Senior Frontend Developer
                    </div>
                    <div>
                      Year: 2022-2024
                    </div>
                    <div>
                      Technologies: Angular, TypeScript, TailwindCSS, Storybook,HTML
                    </div>



                    <div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4">
              <div>
                <div className="w-full">
                  <div className="mb-3 font-bold">
                    Treatanyone
                  </div>

                  <Link href="https://practice.treatanyone.com/auth/login" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="./Treatanyone.png"
                      alt="Treatanyone"
                      className="dark:invert hover:opacity-80 transition-opacity"
                      width={600}
                      height={600}
                      priority
                    />
                  </Link>
                </div>

                <div className="h-full ml-[20px] mt-[32px]">
                  <div className="font-bold">Mental health management software</div>
                  <div className="text-[12px] text-[#a9a9a9]">
                    Treatanyone is a mental health web platform that allows you to manage your patients and appointments.

                    I handled different modules of the frontend development and implemented the core features of the project.
                  </div>
                  <div className="text-[12px] mt-2">
                    <div className="font-bold">
                      Position: Senior Frontend Developer
                    </div>
                    <div>
                      Year: 2020-2022
                    </div>
                    <div>
                      Technologies: Angular, TypeScript, TailwindCSS, Ngprime, HTML, CSS,
                    </div>



                    <div>

                    </div>
                  </div>
                </div>


              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4">
              <div>
                <div className="w-full">
                  <div className="mb-3 font-bold">
                    Sunrise
                  </div>

                  <Link href="https://client.sunlife.com.ph/SunRisePortal/#/login" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="./Sunlife.png"
                      alt="Sunrise"
                      className="dark:invert hover:opacity-80 transition-opacity"
                      width={600}
                      height={600}
                      priority
                    />
                  </Link>
                </div>


                <div className="h-full ml-[20px] mt-[32px]">
                  <div className="font-bold">Investment management software</div>
                  <div className="text-[12px] text-[#a9a9a9]">
                    Sunrise is a Investment and Insurance for employees application.

                    I handled the architecture of the frontend development and implemented the core features of the project.
                  </div>
                  <div className="text-[12px] mt-2">
                    <div className="font-bold">
                      Position: Senior Frontend Developer
                    </div>
                    <div>
                      Year: 2019-2020
                    </div>
                    <div>
                      Technologies: Angular, TypeScript, Bootstrap, HTML, CSS,
                    </div>



                    <div>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-lg shadow-lg p-4">
              <div>
                <div className="w-full">
                  <div className="mb-3 font-bold">
                    Nissan
                  </div>

                  <Link href="https://keepitfresh.nissanusa.com/" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="./Nissan.png"
                      alt="Nissan"
                      className="dark:invert hover:opacity-80 transition-opacity"
                      width={600}
                      height={600}
                      priority
                    />
                  </Link>
                </div>

                <div className="h-full ml-[20px] mt-[32px]">
                  <div className="font-bold">Advertisment website for nissan car</div>
                  <div className="text-[12px] text-[#a9a9a9]">
                    Starshot Software is outsourcing company that provides software development services.

                    I handled frontend development for different projects for different clients of the company.
                  </div>
                  <div className="text-[12px] mt-2">
                    <div className="font-bold">
                      Position: Senior Frontend Developer
                    </div>
                    <div>
                      Year: 2017-2019
                    </div>
                    <div>
                      Technologies: ReactJS, Angular, TypeScript, Bootstrap, HTML, CSS,
                    </div>



                    <div>

                    </div>
                  </div>
                </div>


              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4">
              <div>
                <div className="w-full">
                  <div className="mb-3 font-bold">
                    Arcadier
                  </div>

                  <Link href="https://www.arcadier.com/" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="./Arcadier.png"
                      alt="Arcadier"
                      className="dark:invert hover:opacity-80 transition-opacity"
                      width={600}
                      height={600}
                      priority
                    />
                  </Link>
                </div>


                <div className="h-full ml-[20px] mt-[32px]">
                  <div className="font-bold">Online Marketplace</div>
                  <div className="text-[12px] text-[#a9a9a9]">
                    Arcadier is a online marketplace for buying and selling products.

                    I created and implemented features of the project. also bug fixes.
                  </div>
                  <div className="text-[12px] mt-2">
                    <div className="font-bold">
                      Position: Senior Frontend Developer
                    </div>
                    <div>
                      Year: 2016-2017
                    </div>
                    <div>
                      Technologies: Angular, TypeScript, Bootstrap, HTML, CSS,
                    </div>



                    <div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        <div className="text-center text-xs p-4 text-white bg-[#000000]">
          Copyright 2024 Jamie Socorro
        </div>
      </div>
    </div >
  );
}
