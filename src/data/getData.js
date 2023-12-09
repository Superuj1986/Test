import { Text } from "react-native";
import React, { Component } from "react";
import dress from "./dress";
import cgr from "./category";

export function GetDressName(DressId){
    let dressN;
    dress.map( data => {
        if ( data.id == DressId){
            dressN = data.name;
        };
    });
    return dressN;
}
export function GetCateName(CateId){
    let cgrname;
    cgr.map(data =>{
        if ( data.id == CateId){
            cgrname = data.name;
        }
    })
}
export function GetDressByItsName(DressName){
    const nameUpper = DressName.toUpperCase();
    const dressArray = [];
    dress.map(data => {
        if ( data.title.toUpperCase().include(nameUpper)){
            dressArray.push(data);
        }
    });
    return dressArray;
}