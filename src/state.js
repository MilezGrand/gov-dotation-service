import { rerenderEntireTree } from "./render";

export async function getall(){
    const response = await fetch('http://185.146.157.91:8090/block/getall');
    const data = await response.json();
    
    return data;
}

export async function getBlock(address){
    const response = await fetch('http://185.146.157.91:8090/block/get?hash=' + address);
    const data = await response.json();
    console.log(data)
    return data;
}

export async function createBlock(name){

    const response = await fetch('http://185.146.157.91:8090/block/create?name='+name+'&author=6758456542&company=Company');
    const data = await response.json();
    console.log(data)
    
    return data;
}