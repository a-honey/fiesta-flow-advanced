import Image from "next/image";
import styles from "./index.module.css";
import profile1 from "./assets/profile1.png";
import profile2 from "./assets/profile2.png";
import profile3 from "./assets/profile3.png";
import profile4 from "./assets/profile4.png";
import camera_logo from "./assets/camera_logo.png";
import gallery_logo from "./assets/gallery.png";

const ImageSelectModal = ({
  toggleIsOpenImageSelectModal,
}: {
  toggleIsOpenImageSelectModal: () => void;
}) => {
  return (
    <div className={styles.modal_container}>
      <h4>프로필 이미지를 선택해주세요</h4>
      <div className={styles.image_grid_container}>
        <div>
          <Image src={camera_logo} alt="프로필 이미지" fill />
        </div>
        <div>
          <Image src={profile1} alt="프로필 이미지" fill />
        </div>
        <div>
          <Image src={profile2} alt="프로필 이미지" fill />
        </div>
        <div>
          <Image src={gallery_logo} alt="프로필 이미지" fill />
        </div>
        <div>
          <Image src={profile3} alt="프로필 이미지" fill />
        </div>
        <div>
          <Image src={profile4} alt="프로필 이미지" fill />
        </div>
      </div>
      <div className={styles.btns_container}>
        <button
          className={styles.btn_cancel}
          onClick={toggleIsOpenImageSelectModal}
        >
          취소
        </button>
        <button className={styles.btn_save}>저장</button>
      </div>
    </div>
  );
};

export default ImageSelectModal;
