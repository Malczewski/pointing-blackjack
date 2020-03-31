"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VoteState;
(function (VoteState) {
    VoteState["wait"] = "wait";
    VoteState["none"] = "none";
})(VoteState = exports.VoteState || (exports.VoteState = {}));
class Player {
    constructor(uid, name) {
        this.uid = uid;
        this.name = name;
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map