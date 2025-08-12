import type { IPhoto } from "@/shared/hooks/useSearchPhotos";
import style from "./style.module.css";
import { CloseImage } from "@/assets/icons";
import { useEffect } from "react";

interface IPhotoModalProps {
  photo: IPhoto;
  onClose: () => void;
}

export const PhotoModal = ({ photo, onClose }: IPhotoModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={style.modal}>
      <div 
        className={style.content} 
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        >
        <img
          src={photo.urls.regular}
          alt={photo.alt_description || "Photo"}
          className={style.image}
        />
        <button className={style.close} onClick={onClose}>
          <CloseImage />
        </button>
      </div>
    </div>
  );
};
