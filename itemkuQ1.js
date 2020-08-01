// 1.

function solution(record) {
    var answer = [];
    var userActive = []

    record.map((item,index)=>{
      let data  = record[index]
      let pos1 = data.indexOf(" ")
      let pos2 = data.lastIndexOf(" ")

      if(data.includes('Enter ')){
        let id = data.slice(pos1,pos2)
        let name = data.slice(pos2,data.length)
        userActive.push({
          name : name,
          id : id
        })

      }else if(data.includes('Leave ')){
        let id = data.slice(pos1,data.length)
        userActive.map((item,index)=>{
           if(item.id == id){
             userActive.splice(index,1)
           }
        })

      }else if(data.includes('Change ')){
        let id = data.slice(pos1,pos2)
        let name = data.slice(pos2,data.length)
        userActive.map((item,index)=>{
          if(item.id == id){
            let a = userActive
            a[index].name = name
            userActive = a
          }
        })
      }
   
    })

    record.map((item,index)=>{
      let string = record[index]
      let pos1 = string.indexOf(" ")
      let pos2 = string.lastIndexOf(" ")

      if(string.includes('Enter ')){
        userActive.map((items,indexs)=>{
          let id = string.slice(pos1,pos2)
          if(items.id == id){
            answer.push(items.name+' came in.')
          }
        })
      }else if(string.includes('Leave ')){
        userActive.map((items,indexs)=>{
          let id = string.slice(pos1,string.length)
          if(items.id == id){
            answer.push(items.name+' has left.')
          }
        })
      }
    })

    console.log(userActive)
    console.log(answer)
    return answer;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"])
//["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]



