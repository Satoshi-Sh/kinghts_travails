

// make knight
class Knight {
    // 0<=x<=7, 0<=y <=7
    constructor(position){
        this.x= position.at(0);
        this.y=position.at(1);
    }
    showAvailable(){
        let ls = []
        if (this.x+2 <=7){
            if (this.y+1<=7)
            {
                ls.push([this.x+2,this.y+1])
            }
            if (this.y-1>=0){
                ls.push([this.x+2,this.y-1])
            }
        }
        if (this.x-2 >=0){
            if (this.y+1<=7)
            {
                ls.push([this.x-2,this.y+1])
            }
            if (this.y-1>=0){
                ls.push([this.x-2,this.y-1])
            }
        }
        if (this.y+2 <=7){
            if (this.x+1<=7)
            {

                ls.push([this.x+1,this.y+2])
            }
            if (this.x-1>=0){
                ls.push([this.x-1,this.y+2])
            }
        }
        if (this.y-2 >=0){
            if (this.x+1<=7)
            {
                ls.push([this.x+1,this.y-2])
            }
            if (this.x-1>=0){
                ls.push([this.x-1,this.y-2])
            }
        
        }
    return ls;
    }

}


function knightsMoves(start,goal){
    if (arraysEqual(start,goal)){
        console.log('No move made...')
        return;

    }
    else if (start.at(0)>7|start.at(0)<0|start.at(1)>7|start.at(1)<0|
    goal.at(0)>7|goal.at(0)<0|goal.at(1)>7|goal.at(1)<0){
        console.log('Out of board... choose position from (0-7)')
        return;
    }
    let que = [start];
    let step = 0;
    let record = []
    let visited = []
    while(true){
    step ++;
    let temp = []
    record.push(que)
    for (let i of que){
    k = new Knight(i);
    for (let m of k.showAvailable()){
        if (visited.includes(JSON.stringify(m))) continue;
        visited.push(JSON.stringify(m))
        if (arraysEqual(m,goal)){
            console.log('Found the way!')
            //back track the path 
            let path = [goal,[k.x,k.y]]
            for (let i=step-2; i>=0; i--){
                for (let m of record[i]){
                    const last = path.at(-1)
                    k = new Knight(last);
                    for (let l of k.showAvailable()){
                        if (arraysEqual(l,m) ){
                            path.push(m);
                        }
                    }
                }
            }
            path.reverse()
            console.log(`You made it in ${step} moves! Here's your path`)
            for (let i of path){
                console.log(i)
            }
            return;

        } 
        temp.push(m)
    }
    que= temp
    }
}

}
    

// from https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
function arraysEqual(a1,a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1)==JSON.stringify(a2);
}


//k = new Knight([7,7])
//console.log(k.x,k.y)
//console.log(k.showAvailable())

knightsMoves([0,3],[4,7])