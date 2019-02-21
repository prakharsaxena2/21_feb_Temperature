let Temp=[
    {
       
        temp:20,
    },
    {
       
        temp:12,
    },
    {
        
        temp:20,
    },
    {
        
        temp:20,
    },
    {
        
        temp:40,
    },
    {
        
        temp:20,
    },
    {
       
        temp:21,
    },
    {
      
        temp:22,
    },
    
]                                       //json


function insert()                       //Insert function
{
    


Temp.push({temp:88})

Temp.push({temp:45})

console.log(Temp);

}
insert();                   // Insert function call



function get_max()          //Max function
{

  var max=Temp[0].temp;
for(i=1;i<Temp.length;i++)
{
    if(Temp[i].temp>max)
    {
        max=Temp[i].temp;
    }
    
}


console.log("Maximum Temperature ="+max);

}

get_max();              //Max function call

function get_min()     //Min function
{

  var min=Temp[0].temp;
for(i=1;i<Temp.length;i++)
{
    if(Temp[i].temp<min)
    {
        min=Temp[i].temp;
    }
    
}

console.log("Minimum Temperature ="+min);
}
get_min();              //Min function call


function get_mean()      //Mean function
    {
        var sum=0,mean1;
        for(i=0;i<Temp.length;i++)
    {
        sum=sum+Temp[i].temp;
    }
    mean1=sum/Temp.length;
    console.log("Mean of Temperature"+mean1);

    }

    get_mean();         //Mean function call





    
function get_mode()         //Mode function
{
    var maxValue = 0, maxCount = 0, i, j;
 
    for (i = 0; i < Temp.length; ++i) {
       var count = 0;
       
       for (j = 0; j < Temp.length; ++j) {
          if (Temp[j].temp == Temp[i].temp)
          ++count;
       }
       
       if (count > maxCount) {
          maxCount = count;
          maxValue = Temp[i].temp;
       }
    }
 
    return maxValue;
 }
 

console.log("Mode is "+get_mode());     //Mode function call



