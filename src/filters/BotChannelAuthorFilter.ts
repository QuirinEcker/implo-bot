import {Filter} from "./Filter";
import {Message} from "eris";

const filterConf = require("../../config/filterConf.json");

export class BotChannelAuthorFilter extends Filter{
    constructor() {
        super("f");
    }

    protected check(msg: Message): boolean {
        return msg.channel.id === filterConf.botChannelID;
    }
}