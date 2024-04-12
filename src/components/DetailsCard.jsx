import { useMemo } from "react";
import styles from "./DetailsCard.module.css";

const DetailsCard = ({
  container,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
  propMinWidth,
  propMinWidth1,
}) => {
  const dedicatedWorkspaceStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const aPrivateRoomStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.detailscard}>
      <img
        className={styles.containerIcon}
        loading="lazy"
        alt=""
        src={container}
      />
      <div className={styles.dedicatedWorkspaceParent}>
        <div
          className={styles.dedicatedWorkspace}
          style={dedicatedWorkspaceStyle}
        >
          {dedicatedWorkspace}
        </div>
        <div className={styles.aPrivateRoom} style={aPrivateRoomStyle}>
          {aPrivateRoomEquippedWithW}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
