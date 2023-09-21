import Logo from "../../assets/images/logo.svg";
import styles from "./Topnav.module.css";
import shareIcon from "../../assets/images/ic_share.svg";

const TopNav = () =>{
    const APP_DOWNLOAD_LINK =
    "https://open.shinhansec.com/phone/goM.jsp?p=OTUxMCYmJiZTJiY*&amp;v=2";

    const onClickShareButton = () => {
        const currentUrl = window.document.location.href;
        navigator.clipboard.writeText(currentUrl).then(()=>{
            alert("주소가 복사되었습니다.")
        })
        .catch((err) => alert("에러"+err));
    };

    return <div>
        <div className={styles.container}>
            {/*로고 */}
            <img src={Logo} alt="logo" />
            <div className={styles.rightButtonContainer}>
                {/*다운로드버튼*/}
                <a href={APP_DOWNLOAD_LINK} target="blank">
                    <div className={styles.roundButton}>앱 다운로드</div>
                </a>
                {/*공유버튼*/}
                <div className={styles.circleButton} onClick={onClickShareButton}>
                    <img src={shareIcon} alt="share" />
                </div>
            </div>
        </div>
    </div>;
};

export default TopNav;