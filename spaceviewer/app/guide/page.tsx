
import Image from "next/image";
import TabsImg from "@/guide-imgs/tabs.png"
import ControlCount from "@/guide-imgs/control-count.png"
import ControlDateSelector from "@/guide-imgs/control-date-selector.png"
import ControlDate from "@/guide-imgs/control-date.png"
import ControlGrid from "@/guide-imgs/control-grid.png"
import ControlGridMenu from "@/guide-imgs/grid-menu.png"

export default function GuidePage() {
    return(
        <>
            <div className="intro">
                <h2>How to use SPACEViewer</h2>
            </div>
            <section className="apod-guide guide-section">
                <h3>APODviewer</h3>
                <div className="feature-grid">
                    <article className="feature tab-viewing">
                        <h4>Tab viewing</h4>
                        <Image src={TabsImg} alt="Screenshot of the tab selector on the APODviewer page"/>
                        <p>In this image, you can see the tab options on the APODviewer page. Each of these corresponds to a different feature of the API that is being used. When you click on them, you are presented with an interface with allows you to interact with the API, and view the data fed back to the frontend.</p>
                    </article>
                    <article className="feature date">
                        <h4>Date controls (History tab)</h4>
                        <Image src={ControlDate} alt="Screenshot of the date input on the history tab"/>
                        <p>This input controls the date that is sent back to the API. When submitted, you will be returned the corresponding image from that day in time.</p>
                    </article>
                    <article className="feature date-selector">
                        <h4>Date selector controls (History tab)</h4>
                        <Image src={ControlDateSelector} alt="Screenshot of the date selector that the browser provides for the date input element"/>
                        <p>The image above shows the input selector that appears when you select the calendar icon in the date input. This allows you to manually select a date instead of typing. This selector will appear differently depending on your browser.</p>
                    </article>
                    <article className="feature count">
                        <h4>Count controls (Generator tab)</h4>
                        <Image src={ControlCount} alt="Screenshot of the count, number input, on the generator tab"/>
                        <p>This is a numerical input, it controls the number of images the API will feed back to the interface, when you submit it. It has default value of 4, a minimum value of 2, and a maximum value of 100.</p>
                    </article>
                    <article className="feature grid-view">
                        <h4>Grid view controls (Generator tab)</h4>
                        <Image src={ControlGrid} alt="Screenshot of the grid view selector on the generator tab"/>
                        <p>These two buttons control the number of columns for the images on the generator tab. You can choose between 2 and 3 columns.</p>
                    </article>
                    <article className="feature grid-menu">
                        <h4>Grid menu (Generator tab)</h4>
                        <Image src={ControlGridMenu} alt="Screenshot of the grid menu that is linked to the images on the generator tab"/>
                        <p>This menu appears when you click the three dot icon below the images on the generator tab. When pressed, you are presented with three options: Details, Open, and Share.</p>
                        <p>If you select details, you will open up a popup on the screen, which contains an enlarged version of the image in its original aspect ratio, the title of the image, alongside it&apos;s corresponding explanation paragraph, date published, and its copyright owner.</p>
                        <p>If you select open, the image will be opened externally in a new tab, in its original format/aspect-ratio/quality, straight from the NASA-provided image URL.</p>
                        <p>If you select share, you will be presented with the option to share the image to different platforms. This is done using the native webshare API.</p>
                    </article>
                </div>
            </section>
        </>
    );
}