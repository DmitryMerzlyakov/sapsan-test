import type { IPhoto } from "@/shared/hooks/useSearchPhotos";
import style from "./style.module.css";
import { CloseImage } from "@/assets/icons";

interface IPhotoModalProps {
  photo: IPhoto;
  onClose: () => void;
}

export const PhotoModal = ({ photo, onClose }: IPhotoModalProps) => {
  return (
    <div className={style.modal} onClick={onClose}>
      <div className={style.content} onClick={(e) => e.stopPropagation()}>
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
