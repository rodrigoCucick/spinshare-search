import { View } from "./View.js";
export class FooterIconsView extends View {
    template(model) {
        return `<a href="https://github.com/rodrigoCucick/spinshare-search"><img id="ghRepoIcon" class="footer-img" src="./res/githubLogoLight.png" alt="" title="GitHub Repository"></a>
                <img id="helpIcon" class="footer-img" src="./res/helpIcon.png" alt="" width="39" height="39" title="Need help installing the custom charts? Click here!">`;
    }
}
