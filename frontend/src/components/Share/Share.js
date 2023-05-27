import classes from "./Share.module.css";
import {
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const Share = () => {
  return (
    <div className={classes.shareContainer}>
      <p>Bizi paylaş, katılım artsın</p>

      <div className={classes.shareButtons}>
        <RedditShareButton
          title="Allahını seven sandığa gelsin"
          url="https://pusula.fun/"
        >
          <RedditIcon round={true} size={36} />
        </RedditShareButton>
        <TwitterShareButton
          title="Allahını seven sandığa gelsin"
          url="https://pusula.fun/"
        >
          <TwitterIcon round={true} size={36} />
        </TwitterShareButton>
        <WhatsappShareButton
          title="Allahını seven sandığa gelsin"
          url="https://pusula.fun/"
        >
          <WhatsappIcon round={true} size={36} />
        </WhatsappShareButton>
        <TelegramShareButton
          title="Allahını seven sandığa gelsin"
          url="https://pusula.fun/"
        >
          <TelegramIcon round={true} size={36} />
        </TelegramShareButton>
      </div>
    </div>
  );
};

export default Share;
