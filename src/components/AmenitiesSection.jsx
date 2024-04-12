import { useMemo } from "react";
import styles from "./AmenitiesSection.module.css";

const AmenitiesSection = ({
  mdilake,
  lakeside,
  tablertoolsKitchen2,
  kitchen,
  materialSymbolsnestCamIqO,
  securityCamerasOnProperty,
  ionwifi,
  wifi,
  propFlex,
  propMinHeight,
  propMinWidth,
  propWidth,
  propFlex1,
  propMinWidth1,
  propAlignSelf,
  propMinWidth2,
  propMinWidth3,
}) => {
  const amenitiesSection1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const mdilakeIconStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const lakesideStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const phfireextinguisherStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const kitchenStyle = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth1,
    };
  }, [propFlex1, propMinWidth1]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const securityCamerasOnStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const wifiStyle = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div className={styles.amenitiessection1} style={amenitiesSection1Style}>
      <div className={styles.mdilakeParent}>
        <img
          className={styles.mdilakeIcon}
          loading="lazy"
          alt=""
          src={mdilake}
          style={mdilakeIconStyle}
        />
        <div className={styles.lakeside} style={lakesideStyle}>
          {lakeside}
        </div>
      </div>
      <div
        className={styles.phfireextinguisher}
        style={phfireextinguisherStyle}
      >
        <img
          className={styles.tablertoolsKitchen2Icon}
          loading="lazy"
          alt=""
          src={tablertoolsKitchen2}
        />
        <div className={styles.kitchen} style={kitchenStyle}>
          {kitchen}
        </div>
      </div>
      <div
        className={styles.materialSymbolsnestCamIqOParent}
        style={frameDivStyle}
      >
        <img
          className={styles.materialSymbolsnestCamIqOIcon}
          loading="lazy"
          alt=""
          src={materialSymbolsnestCamIqO}
        />
        <div
          className={styles.securityCamerasOn}
          style={securityCamerasOnStyle}
        >
          {securityCamerasOnProperty}
        </div>
      </div>
      <div className={styles.securityCameras}>
        <img
          className={styles.ionwifiIcon}
          loading="lazy"
          alt=""
          src={ionwifi}
        />
        <div className={styles.wifi} style={wifiStyle}>
          {wifi}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
