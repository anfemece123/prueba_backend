"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable arrow-body-style */
const jwt = require("jsonwebtoken");
const generateJWT = (data, expire = "4h") => __awaiter(void 0, void 0, void 0, function* () {
    const secret = "anfemece123";
    return new Promise((resolve, reject) => {
        const payload = data;
        jwt.sign(payload, secret, {
            expiresIn: expire,
        }, (err, token) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(token);
            }
        });
    });
});
const verifyJwt = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const secret = "anfemece123";
        const result = jwt.verify(token, secret);
        return result;
    }
    catch (error) {
        throw Error("Error el token no es valido");
    }
});
module.exports = { generateJWT, verifyJwt };
