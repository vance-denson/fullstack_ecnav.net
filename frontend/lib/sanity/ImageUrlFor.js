import { config } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder();

const imageUrlFor = (source) => imageBuilder.image(source);

export default imageUrlFor;
