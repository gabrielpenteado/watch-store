import { TagChevron } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="text-center flex justify-center gap-2 items-center self-end h-[10vh] text-white bg-gray-800">
      <TagChevron size={32} className="text-sky-400" />
      <p>
        Created by{" "}
        <a
          href="https://github.com/gabrielpenteado"
          target="_blank"
          className="font-bold hover:text-sky-400"
        >
          Gabriel Penteado
        </a>
      </p>
    </footer>
  );
}
