import React from "react";
import logo from "../src/assets/icon.png";
import { FaInstagram, FaGithub, FaSearch, FaDesktop } from "react-icons/fa"
import { MdEmail, MdLocationOn, MdWork, MdLanguage, MdDownload } from "react-icons/md"
import { AiOutlineAppstore, AiOutlineUser, AiOutlineLaptop, AiOutlineCode, AiOutlineMail, AiOutlineSend } from "react-icons/ai";
import { BiMouse } from "react-icons/bi";
import profile from "../src/assets/profile.jpeg";
import profile2 from "../src/assets/profile2.jpeg"
import vertical from "../src/assets/vertical.png";
import monitor from "../src/assets/monitor.png";
import code from "../src/assets/code.png";
import project from "../src/assets/project.jpeg"

function App() {

  const displaySection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-screen h-full flex flex-col bg-black snap-y snap-mandatory scroll-smooth overflow-y-scroll">
      {/* header */}
      <div id="home">
        <div className="flex justify-between border-b border-gray-500/50 py-5 sm:py-7 mx-[1rem] md:mx-[2rem] sm:mx-[5rem] lg:mx-[5rem]">
          <div className="flex items-center gap-1">
            <img src={logo} className="h-13 w-13 " />
            <span className="font-[Source_Code_Pro] text-white text-[14px] sm:text-[16px] hidden lg:flex">Freiden Duliente</span>
            <span className="font-[Source_Code_Pro] text-white text-[14px] sm:text-[16px] flex lg:hidden ">Freiden</span>
          </div>

          <div className="flex justify-center items-center text-white font-[Source_Code_Pro] gap-9">
            <div className="flex items-center justify-center gap-5">
              <h2 className="hover:text-cyan-500 sm:text-[16px] text-[12px]">Home</h2>
              <h2 className="hover:text-cyan-500 sm:text-[16px] text-[12px]">Projects</h2>
            </div>

            <div className="relative lg:flex hidden">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-teal-300" />
              </div>
              <input type="text" placeholder='Search...' className="w-48 text-sm pl-9 pr-2 py-2 rounded-sm border-[0.2px] border-white/50 hover:border-teal-500 outline-none"/>
            </div>

            <div className="flex gap-[3rem] md:flex hidden">
              <div className="flex items-center justify-center gap-3 group cursor-pointer">
                <FaInstagram className="w-5 h-5 text-teal-300 text-[14px] group-hover:text-cyan-500 group-active:text-rose-500" />
                <span className="text-[14px] group-hover:text-cyan-500 group-active:text-cyan-500">Instagram</span>
              </div>
              <div className="flex items-center justify-center gap-4 group cursor-pointer">
                <MdEmail className="w-5 h-5 text-teal-300 text-[14px] group-hover:text-cyan-500" />
                <span className="text-[14px] group-hover:text-cyan-500 group-hover:text-cyan-500">Email</span>
              </div>
              <div className="flex items-center justify-center group gap-4 cursor-pointer">
                <FaGithub className="w-5 h-5 text-teal-300 text-[14px] group-hover:text-cyan-500 group-hover:text-cyan-500" />
                <span className="text-[14px] group-hover:text-cyan-500 group-hover:text-cyan-500">Github</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-center justify-center mt-9">
          <div className="w-full flex items-center justify-center">
            <h2 className="font-[Roboto_Mono] font-semibold text-[30px] md:text-[80px] lg:text-[115px] text-white ">Developer</h2>
          </div>
          <div className="w-full flex  items-center justify-center md:gap-5 lg:gap-[5rem] pr-5 mt-5">
            <div className="flex flex-col justify-center items-center fixed top-1/2 md:left-[2rem]  gap-9 lg:left-[5rem] transform md:top-[20.5rem] lg:top-[10rem] bg-gray-500 w-[4rem] h-[25rem] py-2 rounded-full border-[3px] border-gray-500 bg-transparent lg:flex md:hidden">
              <div className="flex items-center justify-center  rounded-full w-10 h-10 hover:bg-gray-200 hover:scale-130 active:bg-gray-200 active:scale-130 transition-transform duration-500 ease-in-out group hover:rotate-360 active:rotate-360">
                <AiOutlineAppstore onClick={() => displaySection("home")} className="lg:w-9 lg:h-9 md:w-7 md:h-7 rounded-full text-white group-hover:text-black group-active:text-black" />
              </div>
              <div className="flex items-center justify-center  rounded-full w-10 h-10 hover:bg-gray-200 hover:scale-130 transition-transform active:bg-gray-200 active:scale-130 duration-500 ease-in-out group hover:rotate-360 active:rotate-360">
                <AiOutlineUser onClick={() => displaySection("aboutMe")} className="lg:w-9 lg:h-9 md:w-7 md:h-7 rounded-full text-white group-hover:text-black group-active:text-black" />
              </div>
              <div className="flex items-center justify-center  rounded-full w-10 h-10 hover:bg-gray-200 hover:scale-130 transition-transform active:bg-gray-200 active:scale-130 duration-500 ease-in-out group hover:rotate-360 active:rotate-360">
                <AiOutlineLaptop onClick={() => displaySection("skills")} className="lg:w-9 lg:h-9 md:w-7 md:h-7 rounded-full text-white group-hover:text-black group-active:text-black" />
              </div>
              <div className="flex items-center justify-center  rounded-full w-10 h-10 hover:bg-gray-200 hover:scale-130 transition-transform active:bg-gray-200 active:scale-130 duration-500 ease-in-out group hover:rotate-360 active:rotate-360">
                <AiOutlineCode onClick={() => displaySection("works")} className="lg:w-9 lg:h-9 md:w-7 md:h-7 rounded-full text-white group-hover:text-black group-active:text-black" />
              </div>
              <div className="flex items-center justify-center  rounded-full w-10 h-10 hover:bg-gray-200 hover:scale-130 transition-transform  active:bg-gray-200 active:scale-130 duration-500 ease-in-out group hover:rotate-360 active:rotate-360">
                <AiOutlineMail onClick={() => displaySection("contact")} className="lg:w-9 lg:h-9 md:w-7 md:h-7 rounded-full text-white group-hover:text-black group-active:text-black" />
              </div>
            </div>
            {/* resume */}
            <div className="flex flex-col justify-center items-center md:gap-1 md:ml-5 lg:gap-5 p-5 md:w-[17rem] lg:w-[24rem] md:h-[25rem] lg:h-[32rem] md:rounded-tl-[6rem] md:rounded-br-[6rem]  lg:rounded-tl-[6rem] lg:rounded-br-[6rem]  border-[3px] border-gray-500/50">
              <div className="w-full flex flex-col items-center justify-center md:mb-2 lg:mb-5">
                <img src={profile2} className="h-20 w-20 rounded-full border-[3px] border-teal-500/50 mb-3" />
                <h2 className="font-[Source_Code_Pro] text-white/70 text-[20px] font-semibold">Freiden Duliente</h2>
                <p className="font-[Source_Code_Pro] text-white/50 text-[12px] font-semibold">Web Developer</p>
              </div>
              <div className="flex flex-col justify-center  md:gap-2 lg:gap-3 md:ml-2 md:mr-2">
                <div className="flex items-center justify-center gap-3">
                  <MdEmail className="w-5 h-5 text-teal-600" />
                  <p className="font-[Source_Code_Pro] text-[12px] text-white/50 font-semibold">freidenduliente02@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <MdLocationOn className="w-5 h-5 text-teal-600" />
                  <p className="font-[Source_Code_Pro] text-[12px] text-white/50 font-semibold">Philippines</p>
                </div>
                <div className="flex items-center gap-3">
                  <MdWork className="w-5 h-5 text-teal-600" />
                  <p className="font-[Source_Code_Pro] text-[12px] text-white/50 font-semibold">Internship</p>
                </div>
                <div className="flex items-center gap-3">
                  <MdLanguage className="w-5 h-5 text-teal-600" />
                  <p className="font-[Source_Code_Pro] text-[12px] text-white/50 font-semibold">https://freiden.vercel.app/</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:gap-1 lg:gap-5 mt-5">
                <div className="flex items-center justify-center w-15 h-6 bg-teal-500/50 rounded-full p-2 animate-bounce [animation-duration:2s]">
                  <p className="font-[Source_Code_Pro] text-[12px] text-white/50 font-semibold">Python</p>
                </div>
                <div className="flex items-center justify-center w-15 h-6 bg-teal-500/50 rounded-full p-2 animate-bounce [animation-duration:3s]">
                  <p className="font-[Source_Code_Pro] text-[12px] text-white/50 font-semibold">Django</p>
                </div>
                <div className="flex items-center justify-center w-16 h-6 bg-teal-500/50 rounded-full p-2 animate-bounce [animation-duration:4s]">
                  <p className="font-[Source_Code_Pro] text-[12px] text-white/50 font-semibold">ReactJS</p>
                </div>
                <div className="flex items-center justify-center w-15 h-6 bg-teal-500/50 rounded-full p-2 animate-bounce [animation-duration:5s]">
                  <p className="font-[Source_Code_Pro] text-[12px] text-white/50 font-semibold">MySQL</p>
                </div>
              </div>
              <div className="flex items-center justify-center mt-5">
                <div className="lg:w-50 md:w-40 h-5 flex items-center justify-center p-5 gap-3 bg-gray-300/50 rounded-full active:bg-cyan-300/50 hover:bg-cyan-300/50 active:scale-105 hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">
                  <p className="font-[Source_Code_Pro] md:text-[12px] lg:text-[14px] font-semibold">Download CV</p>
                  <MdDownload className="h-5 w-5" />
                </div>
              </div>
              
            </div>

            <div className="flex-row md:w-[25rem] lg:w-[44rem]">
              <div className="flex items-center left-0">
                <p className="text-teal-500/70 font-semibold font-['Courier_New'] text-[14px]">&lt;h1&gt;</p>
              </div>
              <div className="flex-row pl-7 font-[Source_Code_Pro] gap-5">
                <h2 className="flex lg:text-[50px] md:text-[25px] text-white/60">Hey</h2>
                <h2 className="flex lg:text-[50px] md:text-[25px] text-white/60">I'm Freiden</h2>
                <div className="flex items-center justify-between gap-2">
                  <h2 className="lg:text-[50px] md:text-[25px] text-white/60">Web Developer</h2>
                  <span className="text-teal-500/70 font-semibold font-['Courier_New'] text-[14px] mt-8">&lt;/h1&gt;</span>
                </div>
              </div>

              <div className="flex-row items-center left-0 md:mt-4 lg:mt-10">
                <p className="text-teal-500/70 font-semibold font-['Courier_New'] text-[14px]">&lt;p&gt;</p>
                <p className="font-[Source_Code_Pro] text-sm/5 text-justify text-white/50 pl-7 mt-4 mb-4">
                  As a fourth-year Information Technology student, my focus is on building practical skills in web development.  
                    Passionate about technology, I enjoy creating responsive and user-friendly applications.  
                    During my studies, I have worked on several projects that sharpened both my technical and problem-solving abilities.  
                    Looking forward, I aim to contribute to innovative projects and continue growing in the tech industry.
                </p>
                <p className="text-teal-500/70 font-semibold font-['Courier_New'] text-[14px]">&lt;/p&gt;</p>
              </div>
            
            </div>

            <div className="w-[12rem] h-[20rem] flex flex-col justify-center items-center border-[4px] border-gray-500/50 rounded-[5rem] p-5 gap-3">
              <div className="flex items-center justify-center gap-3">
                <h2 className="font-[Source_Code_Pro] font-bold text-[45px] text-teal-500/60">4</h2>
                <p className="font-[Source_Code_Pro] text-white/50 text-[14px] font-semibold">Programming Languages</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <h2 className="font-[Source_Code_Pro] font-bold text-[45px] text-teal-500/60">9</h2>
                <p className="font-[Source_Code_Pro] text-white/50 text-[14px] font-semibold">Development Tools and Platforms</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <h2 className="font-[Source_Code_Pro] font-bold text-[45px] text-teal-500/60">1</h2>
                <p className="font-[Source_Code_Pro] text-white/50 text-[14px] font-semibold">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about me */}
      <div id="aboutMe" className="w-full md:full lg:h-screen flex items-center justify-center mt-30 bg-teal-600 bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1102011.jpg&f=1&nofb=1&ipt=c4c50e9f0669d7b22e56cbfd5b0a49da86f7006fc69c973c07c521d64d7f8f56g')] bg-cover bg-center bg-no-repeat">
        <div className="h-full w-full bg-[rgb(0,0,0,0.5)] flex flex-col items-center gap-[5rem]">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-0 md:mt-5 lg:mt-[5rem]">
              <BiMouse className="h-9 w-12 text-teal-500" />
              <div className="w-[2px] h-[5px] bg-teal-200 mt-2"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[8px] h-[8px] bg-teal-200 mt-[2px] rounded-full"></div>
            </div>
          </div>

          
          <div className="flex items-center justify-center md:gap-5 lg:gap-[4rem]">
            <div className="flex flex-col justify-center gap-[3rem]">
              <div className=" md:w-70 lg:w-90 flex items-center justify-center md:rounded-br-[1rem] lg:rounded-br-[2.5rem] md:rounded-tl-[1rem] lg:rounded-tl-[2.5rem] md:lg-2 lg:p-4 border-[3px] border-teal-500/50 bg-[#1f1f1f]" >
                <h2 className="font-[Source_Code_Pro] md:text-[30px] lg:text-[40px] text-white/90 font-bold">About Me</h2>
              </div>
              <div className=" md:w-[30rem] lg:w-[45rem] flex flex-col justify-center rounded-3xl p-4 bg-[#1f1f1f] p-[2rem] gap-3" >
                <p className="text-teal-600 font-semibold font-['Courier_New'] text-[12px] mb-4">&lt;p&gt;</p>
                <p className="font-[Source_Code_Pro] text-xl/6 text-[20px] text-teal-300 font-bold pl-5">Hello!</p>
                <p className="font-[Source_Code_Pro] text-sm/6 text-white/70 text-justify pl-5">
                  My name is Freiden and I specialized in web development that utilize{' '} <span className="text-teal-300 font-semibold">HTML</span>,{' '}<span className="text-teal-300 font-semibold">CSS</span>, <span className="text-teal-300 font-semibold">REACT</span>, and <span className="text-teal-300 font-semibold">DANGO</span>{' '} etc.
                </p>
                <p className="font-[Source_Code_Pro] text-sm/6 text-white/70 text-justify pl-5">
                  I am highly motivated student willing to learn more on {''} <span className="text-teal-300">logic of programming {''}</span>to enhance my skill on {''} <span className="text-teal-300">critical thinking {''}</span> and {' '}<span className="text-teal-300">problem-solving{''}</span>.
                </p>
                <p className="font-[Source_Code_Pro] text-sm/6 text-white/70 text-justify pl-5">
                  I am interested on reading documentations of networking and security on how it works or reading story novels when not coding.
                </p>
                <p className="font-[Source_Code_Pro] text-sm/6 text-white/70 text-justify pl-5">I have a <span className="text-teal-300">{' '}vision{''}</span> for <span className="text-teal-300">{' '}business success{''}</span> in terms of technology field creating an ideal web application for business works.</p>
                <p className="text-teal-600 font-semibold font-['Courier_New'] text-[12px] mt-4">&lt;/p&gt;</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-[25rem] md:h-[31.8rem] lg:h-[30rem] rounded-md md:mt-25" style={{ backgroundImage: `url(${profile})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-full h-full bg-black/50"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* skills */}
      <div id="skills" className="w-full md:full lg:h-screen flex items-center justify-center bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1109805.jpg&f=1&nofb=1&ipt=271d1212e9b200bcbac1eddedda2f2372965e6dd32c81c0ce73422e97cf4236e')] bg-cover bg-center bg-no-repeat">
        <div className="h-full w-full bg-[rgb(0,0,0,0.8)] flex flex-col items-center ">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-0 mt-[5rem]">
              <BiMouse className="h-9 w-12 text-teal-500" />
              <div className="w-[2px] h-[5px] bg-teal-200 mt-2"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[8px] h-[8px] bg-teal-200 mt-[2px] rounded-full"></div>
            </div>
            <div className="flex items-center justify-center mt-[2rem]">
              <h2 className="font-[Source_Code_Pro] text-[50px] text-teal-600 font-bold">Skills</h2>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-teal-600"></div>
              <div className="w-[16rem] h-[2px]  bg-teal-600"></div>
              <div className="w-3 h-3 rounded-full bg-teal-600"></div>
            </div>
            <div className="flex items-center justify-center mt-3">
              <p className="font-[Source_Code_Pro] text-sm/5 text-white/60">I never stop learning because I don't stop dreaming.</p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-[5rem]  ">
            <div className="flex flex-col items-center justify-center rounded-md h-35 w-80 bg-[#1f1f1f] border-l-[10px] border-teal-500/30 p-4 hover:scale-110 transition-transform duration-500 ease-in-out group">
              <FaDesktop className="h-8 w-8 text-white/60 transition-transform group-hover:rotate-[360deg] duration-500" />
              <h2 className="text-white/60 font-[Source_Code_Pro] text-[20px] fotn-semibold mt-3">Web Development</h2>
              <div className="flex items-center justify-center gap-2 ">
                <p className="text-white/60 font-[Source_Code_Pro] text-sm/7 text-[11px] font-semibold">REACTJS</p>
                <div className="w-1 h-1 rounded-full bg-white/60"></div>
                 <p className="text-white/60 font-[Source_Code_Pro] text-sm/7 text-[11px] font-semibold">TAILWINDCSS</p>
                <div className="w-1 h-1 rounded-full bg-white/60"></div>
                <p className="text-white/60 font-[Source_Code_Pro] text-sm/7 text-[11px] font-semibold">DJANGO</p>
                <div className="w-1 h-1 rounded-full bg-white/60"></div>
                 <p className="text-white/60 font-[Source_Code_Pro] text-sm/7 text-[11px] font-semibold">MYSQL</p>
              </div>
            </div>
          </div>
          <div className="w-auto flex items-center justify-center gap-[5rem] mt-[5rem]">
            <div className="flex flex-col items-center justify-center gap-3">
              <div className=" h-30 w-30 flex items-center justify-center rounded-full bg-teal-500/60 mb-4">
                <svg className="h-17 w-17 animate-spin [animation-duration:5s]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#1f1f1f"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>
              </div>
              <h2 className="font-[Source_Code_Pro] tracking-[0.2em] text-[16px] text-white/60 font-bold">REACT</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className=" h-30 w-30 flex items-center justify-center rounded-full bg-teal-500/60 mb-4">
                <svg className="h-17 w-17 animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#1f1f1f"/></svg>
              </div>
              <h2 className="font-[Source_Code_Pro] tracking-[0.2em] text-[16px] text-white/60 font-bold">TAILWINDCSS</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className=" h-30 w-30 flex items-center justify-center rounded-full bg-teal-500/60 mb-4">
                <svg className="w-17 h-17 animate-ping" width="512px" height="179px" viewBox="0 0 512 179" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                    <g>
                        <path d="M386.891623,41.4228474 C398.893282,41.4228474 409.984729,42.6943288 423.439677,45.4214453 L413.851956,65.618529 C406.396664,64.1640668 413.254923,65.4238187 407.621228,64.8783954 L407.621228,67.7884927 L407.98367,79.6048247 L408.164305,94.8790231 C408.346113,98.6958133 408.346113,102.514949 408.529094,106.332913 L408.529094,113.970012 L408.529094,113.970012 C408.529094,137.970983 406.529208,149.243065 400.529552,158.515261 C391.801606,172.15319 376.710388,178.880077 355.255899,178.880077 C344.346259,178.880077 334.893428,177.243807 325.073463,173.424671 L325.073463,147.606795 L325.074636,147.606795 C334.894601,152.697412 344.712221,155.05974 355.075264,155.05974 C373.437848,155.05974 381.256755,147.606795 381.256755,129.787288 L381.256755,129.241864 L381.256755,129.241864 C375.802522,131.967808 370.347116,133.059827 363.075979,133.059827 C338.529584,133.059827 322.890597,116.877763 322.890597,91.2416948 C322.890597,59.4206435 345.983702,41.4228474 386.891623,41.4228474 Z M132.909689,43.2409251 L132.909689,108.149817 C132.909689,130.514519 131.27342,141.241177 126.36461,150.514546 C121.818243,159.425473 115.817413,165.060341 103.454485,171.242978 L77.4536283,158.878877 C89.8177295,153.061028 95.8173858,147.971583 99.635349,140.15033 C103.636293,132.150789 104.91012,122.87742 104.91012,98.5140056 L104.91012,43.2409251 L132.909689,43.2409251 Z M466.908155,40.8774241 C494.907724,40.8774241 512,58.5151235 512,87.0601161 C512,116.334686 494.182839,134.698443 465.817308,134.698443 C437.815393,134.698443 420.542482,117.060744 420.542482,88.697559 C420.543655,59.2400087 438.363162,40.8774241 466.908155,40.8774241 Z M186.914807,41.2422126 C201.278794,41.2422126 210.732798,45.0590028 214.91555,52.5142942 C217.277878,56.6958729 218.005109,62.150106 218.005109,73.788149 L218.005109,130.696327 C205.458027,132.514404 189.640751,133.788232 178.005054,133.788232 C154.550679,133.788232 144.003482,125.603363 144.003482,107.422586 C144.003482,87.7850013 158.003853,78.6946129 192.36904,75.7845156 L192.36904,69.6030515 C192.36904,64.512434 189.823732,62.6955293 182.732056,62.6955293 C172.369013,62.6955293 160.732143,65.6044536 149.821331,71.2416673 L149.821331,49.604197 L149.822504,49.604197 C162.187778,43.7875213 174.005283,41.2422126 186.914807,41.2422126 Z M88.3656132,0 L88.3656132,129.606653 C74.0016266,132.333769 63.455603,133.424616 52.0017136,133.424616 C17.8183343,133.424616 0,117.970956 0,88.3327705 C0,59.786605 18.9103538,41.2422126 48.1825775,41.2422126 C52.7277717,41.2422126 56.1821193,41.6046552 60.364871,42.6955018 L60.364871,0 L88.3656132,0 Z M275.642863,41.2422126 C290.00685,41.2422126 300.371066,44.5135795 306.554876,50.8780243 C312.372724,56.8765077 314.189629,63.4215874 314.189629,77.4243044 L314.189629,132.332596 L286.188887,132.332596 L286.188887,78.515151 C286.188887,67.7884927 282.552731,63.7863759 272.553304,63.7863759 C268.735341,63.7863759 265.280993,64.1499914 259.642607,65.7862613 L259.642607,132.332596 L231.643037,132.332596 L231.643037,47.6043115 C248.187544,43.2409251 261.8243,41.2422126 275.642863,41.2422126 Z M193.641695,94.1506191 C175.094957,95.9686968 169.0953,98.8787941 169.0953,106.151105 C169.0953,111.605338 172.550821,114.150647 180.186747,114.150647 C184.369499,114.150647 188.186289,113.788204 193.641695,112.879165 L193.641695,94.1506191 Z M466.545712,63.4227603 C455.453092,63.4227603 449.087474,72.3336869 449.087474,87.7861743 C449.088647,103.242181 455.453092,112.150761 466.360385,112.150761 C477.08939,112.150761 483.453834,103.241008 483.453834,87.7861743 C483.453834,72.5143217 477.271197,63.4227603 466.545712,63.4227603 Z M50.910867,63.7863759 C36.7286881,63.7863759 28.5461656,72.5143217 28.5461656,87.7861743 C28.5461656,102.696757 36.3650726,110.878107 50.7290592,110.878107 C53.8186183,110.878107 56.3651001,110.696299 60.364871,110.152049 L60.364871,65.2396651 C57.0923311,64.1499914 54.3652146,63.7863759 50.910867,63.7863759 Z M361.621516,67.9667816 C354.895802,71.7859177 351.439108,78.6957858 351.439108,88.5134053 C351.439108,102.514949 358.350149,110.514491 370.713078,110.514491 C374.531041,110.514491 377.622946,109.786087 381.257928,108.696414 L381.257928,99.0606018 C381.257928,95.788062 381.077294,92.1495607 381.077294,88.3327705 L380.896659,75.424419 L380.713678,66.1510498 L380.713678,63.9681836 L377.803581,63.9681836 C372.350521,63.7863759 365.987249,65.2396651 361.621516,67.9667816 Z M132.909689,0.148965075 L132.909689,28.8769384 L104.91012,28.8769384 L104.91012,0.148965075 L132.909689,0.148965075 Z" fill="#1f1f1f"/>
                    </g>
                </svg>
              </div>
              <h2 className="font-[Source_Code_Pro] tracking-[0.2em] text-[16px] text-white/60 font-bold">DJANGO</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 ml-2">
              <div className=" h-30 w-30 flex items-center justify-center rounded-full bg-teal-500/60 mb-4">
                <svg className="w-17 h-17 animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#1f1f1f" d="M0 91.313h4.242V74.566l6.566 14.598c.773 1.77 1.832 2.391 3.914 2.391s3.098-.621 3.871-2.391l6.566-14.598v16.746h4.242V74.594c0-1.633-.652-2.422-2-2.828-3.223-1.004-5.383-.137-6.363 2.039l-6.441 14.41-6.238-14.41c-.937-2.176-3.14-3.043-6.359-2.039-1.348.406-2 1.195-2 2.828zM32.93 77.68h4.238v9.227c-.039.5.16 1.676 2.484 1.715h9.223V77.633h4.25c.02 0-.008 14.984-.008 15.047.023 3.695-4.582 4.496-6.707 4.559H33.02v-2.852l13.414-.004c2.73-.285 2.406-1.645 2.406-2.098v-1.113h-9.012c-4.195-.039-6.863-1.871-6.898-3.977-.004-.191.09-9.422 0-9.516zm0 0"/><path fill="#e9c257ff" d="M56.391 91.313h12.195c1.426 0 2.813-.301 3.914-.816 1.836-.84 2.73-1.984 2.73-3.48v-3.098c0-1.223-1.016-2.367-3.016-3.125-1.059-.41-2.367-.625-3.629-.625h-5.141c-1.711 0-2.527-.516-2.73-1.656-.039-.137-.039-.246-.039-.383V76.2c0-.109 0-.219.039-.355.203-.867.652-1.113 2.16-1.25l.41-.027h12.109v-2.824H63.488c-1.711 0-2.609.109-3.426.352-2.527.789-3.629 2.039-3.629 4.215v2.473c0 1.902 2.16 3.535 5.789 3.914l1.223.055h4.406c.164 0 .324 0 .449.027 1.344.109 1.914.355 2.324.844.211.195.332.473.324.758v2.477c0 .297-.203.68-.609 1.004-.367.328-.98.543-1.793.598l-.449.027H56.391zm45.297-4.922c0 2.91 2.164 4.539 6.523 4.867l1.227.055h11.051v-2.828h-11.133c-2.488 0-3.426-.625-3.426-2.121V71.738h-4.238V86.39zm-23.75.148V76.457c0-2.559 1.801-4.113 5.355-4.602a7.976 7.976 0 0 1 1.145-.082h8.047c.41 0 .777.027 1.188.082 3.555.488 5.352 2.043 5.352 4.602v10.082c0 2.078-.762 3.188-2.523 3.914l4.18 3.77h-4.926l-3.379-3.051-3.402.215H84.44a9.23 9.23 0 0 1-2.492-.352c-2.699-.734-4.008-2.152-4.008-4.496zm4.578-.246c0 .137.039.273.082.438.246 1.172 1.348 1.824 3.023 1.824h3.852l-3.539-3.195h4.926l3.086 2.789c.57-.305.941-.766 1.074-1.363.039-.137.039-.273.039-.41v-9.668c0-.109 0-.246-.039-.383-.246-1.09-1.348-1.715-2.984-1.715h-6.414c-1.879 0-3.105.816-3.105 2.098zm0 0"/><path fill="#1f1f1f" d="M124.219 67.047c-2.605-.07-4.598.172-6.301.891-.484.203-1.258.207-1.336.813.266.281.309.699.52 1.039.406.66 1.094 1.539 1.707 2l2.074 1.484c1.273.777 2.699 1.223 3.93 2 .723.461 1.441 1.039 2.148 1.559.348.254.582.656 1.039.816v-.074c-.238-.305-.301-.723-.52-1.039l-.965-.965c-.941-1.25-2.137-2.348-3.41-3.262-1.016-.727-3.281-1.711-3.707-2.891l-.074-.074c.719-.078 1.563-.34 2.223-.516 1.117-.301 2.113-.223 3.262-.52l1.559-.449v-.293c-.582-.598-.996-1.387-1.633-1.93-1.656-1.41-3.469-2.824-5.336-4.004-1.035-.652-2.312-1.074-3.41-1.629-.367-.187-1.016-.281-1.262-.594-.574-.734-.887-1.664-1.332-2.52l-2.668-5.633c-.562-1.285-.93-2.555-1.633-3.707-3.363-5.535-6.988-8.875-12.602-12.156-1.191-.699-2.633-.973-4.148-1.332l-2.449-.148c-.496-.211-1.012-.82-1.48-1.113-1.859-1.176-6.629-3.73-8.008-.371-.867 2.121 1.301 4.191 2.078 5.266.543.754 1.242 1.598 1.629 2.445.258.555.301 1.113.52 1.703.539 1.453 1.008 3.031 1.707 4.375.352.68.738 1.395 1.184 2 .273.371.742.539.816 1.113-.457.641-.484 1.633-.742 2.445-1.16 3.652-.723 8.191.965 10.898.516.828 1.734 2.609 3.41 1.926 1.465-.598 1.137-2.445 1.555-4.078.098-.367.039-.641.223-.887v.074l1.336 2.668c.988 1.59 2.738 3.25 4.223 4.371.773.582 1.379 1.59 2.375 1.93V68.6h-.074c-.195-.297-.496-.422-.742-.664-.582-.57-1.227-1.277-1.703-1.93-1.352-1.832-2.547-3.84-3.633-5.93-.52-.996-.973-2.098-1.41-3.113-.168-.391-.164-.984-.516-1.184-.48.742-1.187 1.344-1.559 2.223-.594 1.402-.668 3.117-.891 4.891l-.148.074c-1.031-.25-1.395-1.312-1.777-2.223-.973-2.305-1.152-6.02-.297-8.672.219-.687 1.219-2.852.813-3.484-.191-.633-.828-1-1.184-1.484a11.7 11.7 0 0 1-1.187-2.074c-.793-1.801-1.164-3.816-2-5.633-.398-.871-1.074-1.75-1.629-2.523-.617-.855-1.305-1.484-1.781-2.52-.168-.367-.398-.957-.148-1.336.078-.254.195-.359.445-.441.43-.332 1.629.109 2.074.293 1.191.496 2.184.965 3.191 1.633.48.32.969.941 1.555 1.113h.668c1.043.238 2.211.07 3.188.367 1.723.523 3.27 1.34 4.668 2.227 4.273 2.695 7.766 6.535 10.156 11.117.387.738.551 1.441.891 2.223.684 1.578 1.543 3.203 2.223 4.746s1.34 3.094 2.297 4.375c.504.672 2.453 1.031 3.336 1.406.621.262 1.637.535 2.223.891 1.125.676 2.211 1.48 3.266 2.223.523.375 2.141 1.188 2.223 1.855zM91.082 38.805a5.26 5.26 0 0 0-1.332.148v.074h.074c.258.535.715.879 1.035 1.336l.742 1.555.074-.07c.461-.324.668-.844.668-1.633-.187-.195-.211-.437-.371-.668-.211-.309-.621-.48-.891-.742zm0 0"/></svg>
              </div>
              <h2 className="font-[Source_Code_Pro] tracking-[0.2em] text-[16px] text-white/60 font-bold">MYSQL</h2>
            </div>
          </div>
          
          
        </div>
      </div>

      {/* works */}
      <div id="works" className="w-full md:h-full lg:h-screen flex items-center justify-center bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4615505.png&f=1&nofb=1&ipt=4e7407b9a3bf63e77d5c26780e25515aafd5517bd7f72e563ca5ef79784d560f')] bg-cover bg-no-repeat bg-center">
        <div className="h-full w-full bg-[rgb(0,0,0,0.8)] flex flex-col items-center ">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-0 mt-[5rem]">
              <BiMouse className="h-9 w-12 text-teal-500" />
              <div className="w-[2px] h-[5px] bg-teal-200 mt-2"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[8px] h-[8px] bg-teal-200 mt-[2px] rounded-full"></div>
            </div>
            <div className="flex items-center justify-center mt-[2rem]">
              <h2 className="font-[Source_Code_Pro] text-[50px] text-teal-600 font-bold">Works</h2>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-teal-600"></div>
              <div className="w-[16rem] h-[2px]  bg-teal-600"></div>
              <div className="w-3 h-3 rounded-full bg-teal-600"></div>
            </div>
            <div className="flex items-center justify-center">
              <p className="font-[Source_Code_Pro] text-sm/5 text-white/60 mt-3">I have pleasure working with these awesome projects.</p>
            </div>
          </div>

          <div className="flex items-center justify-center p-4 group">
            <div className="relative left-12">
              <img src={vertical} className="h-[25rem] w-[26.2rem] active:scale-102 hover:scale-102 transition-transform duration-500 ease-in-out"  />
              <div className="absolute top-[28.8px] left-29">
                <img src={code} className="h-[17.7rem] w-[11.6rem]" />
              </div>
            </div>
            <div className="relative right-28 top-15">
              <img src={monitor} className="h-[20rem] w-[28rem] active:scale-105 hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div className="absolute bottom-[7.87rem] left-[4.9rem]">
                <img src={project} className="h-[7rem] w-[18.2rem]" />
              </div>
            </div>
          </div>

         
          
          
        </div>
      </div>

      {/* contact */}
      <div id="contact" className="w-full md:full lg:h-screen flex items-center justify-center bg-black/50 bg-cover bg-center bg-no-repeat">
        <div className="h-full w-full bg-[rgb(0,0,0,0.8)] flex flex-col items-center gap-5">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-0 mt-[5rem]">
              <BiMouse className="h-9 w-12 text-teal-500" />
              <div className="w-[2px] h-[5px] bg-teal-200 mt-2"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[2px] h-[5px] bg-teal-200 mt-[2px]"></div>
              <div className="w-[8px] h-[8px] bg-teal-200 mt-[2px] rounded-full"></div>
            </div>
            <div className="flex items-center justify-center mt-[2rem]">
              <h2 className="font-[Source_Code_Pro] text-[50px] text-teal-600 font-bold">Contact</h2>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-teal-600"></div>
              <div className="w-[16rem] h-[2px]  bg-teal-600"></div>
              <div className="w-3 h-3 rounded-full bg-teal-600"></div>
            </div>
            <div className="flex items-center justify-center mt-3">
              <p className="font-[Source_Code_Pro] text-sm/5 text-white/60">I'm currently available for intership.</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-13">
            <div className="flex items-center justify-center p-4 bg-[#1f1f1f] border-[3px] border-teal-600/90 rounded-br-[1.5rem] rounded-tl-[1.5rem] px-5 w-100">
              <h2 className="font-[Source_Code_Pro] text-[24px] text-teal-600/90 font-bold">Send Me A Message</h2>
            </div>
            
            <form action="" className="flex flex-col items-center justify-center gap-5 mt-12">
              <div className="flex items-center justify-between gap-20">
                <div className="flex flex-col group">
                  <label htmlFor="" className="text-teal-600 text-left font-[Source_Code_Pro] group-hover:text-cyan-600">Your name</label>
                  <input type="text" name="" id="" className=" font-[Source_Code_Pro] border-b-2  border-teal-600  w-80 focus:outline-none focus:border-teal-600 focus:hover:border-cyan-600 group-hover:border-cyan-600 focus:ring-0 py-2 px-1 text-white/50" required />
                </div>
                <div className="flex flex-col group">
                  <label htmlFor="" className="text-teal-600 text-left font-[Source_Code_Pro] group-hover:text-cyan-600">Your email</label>
                  <input type="email" name="" id="" className="font-[Source_Code_Pro] border-b-2  border-teal-600  w-80 focus:outline-none focus:border-teal-600 focus:hover:border-cyan-600 group-hover:border-cyan-600 focus:ring-0 py-2 px-1 text-white/50" required />
                </div>
              </div>
              <div className="flex flex-col justify-start w-180 mt-5 group">
                <label htmlFor="" className="text-left font-[Source_Code_Pro] text-teal-600 group-hover:text-cyan-600">Your message</label>
                <input type="text" className="font-[Source_Code_Pro] text-white/50 border-b-2 border-teal-600 w-full focus:outline-none focus:hover:border-cyan-600 group-hover:border-cyan-600 px-1 py-2" required />
              </div>

              <button className="h-13 w-45 flex items-center justify-center text-black/80 gap-3 font-semibold font-[Source_Code_Pro] bg-teal-600 rounded-full py-2 px-3 mt-10 hover:bg-cyan-600 group hover:scale-105 transition-transform duration-500 ease-in-out">
                Send Message
                <AiOutlineSend className="text-black/80 h-5 w-5" />
              </button>
            </form>
          </div>
          
          <div className="w-[110rem] h-full flex items-center justify-between border-t border-gray-500/50 mt-7 mx-[5rem]">
            <div className="flex items-center justify-center">
              <p className="h-full font-[Source_Code_Pro] text-white/50 text-[14px] font-bold">Alright reserved. &copy;2025</p>
            </div>
            <div className="flex items-center justify-between w-80">
              <p className="h-full font-[Source_Code_Pro] text-white/50 text-[14px] font-bold">Privacy Policy</p>
              <p className="h-full font-[Source_Code_Pro] text-white/50 text-[14px] font-bold">Terms & Conditions</p>
            </div>
            <div className="flex items-center justify-center gap-5">
              <FaInstagram className="text-white/50 h-5 w-5" />
              <MdEmail className="text-white/50 h-5 w-5" />
              <FaGithub className="text-white/50 h-5 w-5" />
            </div>
            <div className="flex items-center justify-center">
              <p className="h-full font-[Source_Code_Pro] text-white/50 text-[14px] font-bold">Designed by: <span className="text-teal-600 underline">{' '}FreidenDuliente</span></p>
            </div>
          </div>
          
          
          
        </div>
      </div>
      
    </div>
  )
};

export default App;