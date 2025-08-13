import InfiniteScroll from "react-infinite-scroll-component";
import style from "./style.module.css";
import type { IPhoto } from "@/shared/hooks/useSearchPhotos";
import { useState } from "react";
import { PhotoModal } from "@/components/PhotoModal";

interface IPhotoAreaProps {
  photos: IPhoto[];
  onLoadMore: () => void;
  hasMore: boolean;
}

export const PhotoArea = ({ photos, onLoadMore, hasMore }: IPhotoAreaProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<IPhoto | null>(null);

  const handleClickPhoto = (photo: IPhoto) => {
    setIsModalVisible(true);
    setSelectedPhoto(photo);
  };

  const handleClickClose = () => {
    setIsModalVisible(false);
    setSelectedPhoto(null);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={photos.length}
        next={onLoadMore}
        hasMore={hasMore}
        loader={<div />}
        scrollThreshold="100px"
      >
        <div className={style.grid}>
          {photos.map((photo: IPhoto) => (
            <div
              key={photo.id}
              className={style.card}
              onClick={() => handleClickPhoto(photo)}
            >
              <img
                src={photo.urls.thumb}
                alt={photo.alt_description || "Photo"}
                className={style.image}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
      {isModalVisible && (
        <PhotoModal
          photo={selectedPhoto as IPhoto}
          onClose={() => handleClickClose()}
        />
      )}
    </>
  );
};
