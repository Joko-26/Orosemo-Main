import { createFileRoute } from "@tanstack/react-router";
import { getAssetPath } from "@/lib/assets";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";
import {
  SiJavascript,
  SiReact,
  SiGithub,
  SiTypescript,
  SiDiscorddotjs,
  SiPython,
  SiGodotengine,
  SiObsidian,
  SiTailwindcss,
  SiDiscord,
  SiRaycast,
  SiAseprite,
  SiAutodesk,
} from "@icons-pack/react-simple-icons";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center text-center m-6 mini-headline">
      <div>
        <img
          className="rounded-full justify-self-center self-center max-w-20 md:justify-self-start md:max-w-30 lg:max-w-40 xl:max-w-50"
          src={getAssetPath("/pfp/pfp-christmas.jpeg")}
          alt=""
        />
      </div>
      <h1 className="headline leading-relaxed">{t?.aboutPage?.head}</h1>
      <div className=" mx-4 md:mx-15 lg:mx-20 xl:mx-30">
        <p className="site-headline">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-highlight underline hover:text-highlight-hover"
                />
              ),
            }}
          >
            {t?.aboutPage?.overview}
          </ReactMarkdown>
        </p>
        <p className="site-headline">{t?.aboutPage?.transition}</p>
      </div>
      <div className="card-border">
        <span className="site-headline">{t?.aboutPage?.tools}</span>
        <p className="text-xs md:sm lg:text-base xl:text-lg">
          {t?.aboutPage?.toolsContent}
        </p>
        <div className=" flex flex-row gap-4 mt-4 p-5 space-x-2 mx-4 md:mx-15 lg:mx-20 xl:mx-30">
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <SiGithub size={32} />
          </motion.a>
          <motion.a
            href="https://www.aseprite.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aseprite"
            title="Aseprite"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <SiAseprite size={32} />
          </motion.a>
          <motion.a
            href="https://godotengine.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Godot Engine"
            title="Godot Engine"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <SiGodotengine size={32} />
          </motion.a>
          <motion.a
            href="https://obsidian.md/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Obsidian"
            title="Obsidian"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <SiObsidian size={32} />
          </motion.a>
          <motion.a
            href="https://www.raycast.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Raycast"
            title="Raycast"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <SiRaycast size={32} />
          </motion.a>
          <motion.a
            href="https://www.autodesk.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Autodesk"
            title="Autodesk"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <SiAutodesk size={32} />
          </motion.a>
        </div>
      </div>

      <div className="card-border ">
        <span className="site-headline">{t?.aboutPage?.skills}</span>
        <p className="text-xs md:sm lg:text-base xl:text-lg">
          {t?.aboutPage?.skillsContent}
        </p>
        <div className="flex flex-row gap-4 mt-4 p-5 space-x-2 mx-4 md:mx-15 lg:mx-20 xl:mx-30">
          <motion.a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Python"
            title="Python"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <SiPython size={32} />
          </motion.a>
          <motion.a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TypeScript"
            title="TypeScript"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <SiTypescript size={32} />
          </motion.a>
          <motion.a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JavaScript"
            title="JavaScript"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <SiJavascript size={32} />
          </motion.a>
          <motion.a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tailwind CSS"
            title="Tailwind CSS"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <SiTailwindcss size={32} />
          </motion.a>
          <motion.a
            href="https://discord.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord.js"
            title="Discord.js"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <SiDiscorddotjs size={32} />
          </motion.a>
          <motion.a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="React"
            title="React"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <SiReact size={32} />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
