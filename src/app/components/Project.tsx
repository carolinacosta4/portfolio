"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "#000",
  },
};

Modal.setAppElement("#projects");

type ProjectProps = {
  name: string;
  image: any;
  description: string;
  link: string;
  video?: any;
};

function Project({ name, image, description, link, video }: ProjectProps) {
  let subtitle: HTMLHeadingElement | null = null;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    if (subtitle) {
      subtitle.style.color = "#f00";
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="bg-[#4d5c2e] bg-opacity-30 p-4 rounded-lg flex flex-col w-full hover:shadow-xl relative group">
      <div className="relative w-full h-56">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt="Picture of the project"
        />
        <div className="flex flex-row absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex flex-1 justify-center items-center gap-4">
            <button onClick={openModal}>
              <div className="bg-[#FFF] bg-opacity-50 p-0.5 rounded-full hover:bg-[#4d5c2e] hover:bg-opacity-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50px"
                  viewBox="0 -960 960 960"
                  width="50px"
                  fill="#4d5c2e"
                >
                  <path d="M320-200v-560l440 280-440 280Z" />
                </svg>
              </div>
            </button>
            <a href={link} target="_blank" rel="noreferrer">
              <div className="bg-[#FFF] bg-opacity-50 p-0.5 rounded-full hover:bg-[#4d5c2e] hover:bg-opacity-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50px"
                  viewBox="0 -960 960 960"
                  width="50px"
                  fill="#4d5c2e"
                >
                  <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
      <p className="pt-2 font-bold text-xl">{name}</p>
      <p className="pt-2">{description}</p>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button onClick={closeModal} className="absolute top-2 right-3 p-1
        ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#0000000"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
        <video controls className="mt-6 h-96" muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>
    </div>
  );
}

export default Project;
