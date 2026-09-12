// Task 1

{
let applink="https://fakestoreapi.com/products";

fetch(applink).then((d)=>{
    return d.json()
})

.then((data)=>{
    console.log(data)
    let a=data.map((c)=>{
        return c.title
    })
    console.log(a);

    let b=data.map((c)=>{
        return c.price
    })
    console.log(b)
    let c=data.filter((c)=>{
        return c.price>=100
    })
    console.log(c)

    let d=data.find((c)=>{
        return c.category=="electronics"   // FIXED: was c.product (products don't have a "product" field)
    })
    console.log(d)

    let e=data.reduce((a,c)=>{
        return a+c.price;
    },0)
    console.log(e)

    let f=data.sort((a,b)=>{
        return b.price-a.price
    })
    console.log(f);

})

.catch((d)=>{
    console.log(d);
})

.finally(()=>{
    console.log("Everything is fine")
})
}



// Task 2

{
let applink="https://fakestoreapi.com/products";

console.log("====== PRODUCT DASHBOARD ======")

fetch(applink).then((d)=>{           // FIXED: fetch() call was missing entirely
    return d.json()
})
.then((data)=>{
    console.log(data);
    let a=data.filter((c)=>{
        return c.category=="electronics"
    })
    console.log("Electronics:",a.length)

    let a1=data.filter((c)=>{
        return c.category=="jewelery"
    })
    console.log("Jewellery:",a1.length)

    let a2=data.filter((c)=>{
        return c.category=="men's clothing"
    })
    console.log("Men's clothing:",a2.length)
    let a3=data.filter((c)=>{
        return c.category=="women's clothing"
    })
    console.log("Women's clothing:",a3.length)


    let b=data.reduce((a,c)=>{
        if(c.price>a){
            return c.price;
        }
        return a
    },0)
    let b1=data.find((c)=>{
        return c.price==b;
    })
    console.log("Max price:",b)          // FIXED: missing comma before b
    let b2=data.reduce((a,c)=>{
        if(c.price<a){
            return c.price;
        }
        return a
    },data[0].price)
    console.log("Min Price:",b2)          // FIXED: missing comma before b2

})
}



// Task 3

{
let applink1="https://jsonplaceholder.typicode.com/users";
let applink2="https://jsonplaceholder.typicode.com/posts";

fetch(applink1).then((d)=>{
    return d.json()
})
.then((data)=>{
    console.log(data);
    let names = data.map((c) => {
        return c.name;
    });
    let email = data.map((c) => {
        return c.email;
    });

    console.log(names)
    console.log(email)

    // FIXED: names+email just glued two arrays into a string with no pairing.
    // This pairs each name with its own email instead.
    let nameEmail = data.map((c) => {
        return c.name + " <" + c.email + ">";
    });
    console.log(nameEmail);

    let a = data.filter((c) => {
        return c.id==5 ;
    });
    console.log(a)

    let city1="Roscoeville"          // FIXED: was "Roscoeview" — not a real city in this API, so filter always returned []
    let a1 = data.filter((c) => {
        return c.address.city==city1 ;
    });
    console.log(a1)

})

fetch(applink2).then((d)=>{
    return d.json()
})

.then((data)=>{
    console.log(data)
    let c1 = data.filter((c) => {
        return c.userId==1 ;
    });
    console.log(c1)

    let c2 = data.filter((c) => {
        return c.userId==1 ;
    });
    console.log(c2.length)

    let count = data.find((c) => {
        return c.title.length >=50 ;
    });
    console.log(count)
})
}



// Task 4

{
let applink = "https://fakestoreapi.com/products"

fetch(applink).then((d)=>{
    return d.json()
})
.then((data)=>{
    console.log(data)
    let prod=prompt("Enter product category:")
    let pri=Number(prompt("Enter the Price:"))

    let ans=data.filter((c)=>{
        return c.price<=pri && c.category==prod          // FIXED: was >=, which shows only MORE expensive items than your max price limit
    })

    console.log(ans)
})
}



// Task 5

{
let applink = "https://fakestoreapi.com/products"

fetch(applink).then((d)=>{
    return d.json()
})

.then((data)=>{
    console.log("                 ====== CART ======")


    let a = data.map((c)=>{
        return c.category
    })
    let prod=new Set(a)
    console.log(prod)


    let ids=[2,5];
    let b=data.filter((c)=>{
        return ids.includes(c.id)
    })
    b.forEach((c,i) => {
        console.log(`Product ${i+1} :`,c.title)          // FIXED: was c.category — a product's name, not its category, is what you want to show here
        console.log("Price :",c.price)
    });


    let tot=b.reduce((a,c)=>{
        return a+c.price
    },0)
    console.log("Total :",tot)

    // FIXED: order was backwards — anything >=200 already matches >=100 first,
    // so the 20% branch was unreachable. Check the bigger threshold first.
    if(tot>=200)
    {
        console.log("Discount : 20%")
        console.log("Final Amount :",tot-(tot*0.2))
    }else if(tot>=100){
        console.log("Discount : 10%")
        console.log("Final Amount :",tot-(tot*0.1))
    }else{
        console.log("Final Amount :",tot);
    }



})
}



// Task 6

{
let applink = "https://fakestoreapi.com/products"

fetch(applink).then((d)=>{
    return d.json()
})

.then((data)=>{
    console.log("                 ====== PRODUCT REPORT ======")

    console.log(data)
    console.log("Product report :",data.length)
    console.log("")
    console.log("Product Name :")
    console.log("")

    data.forEach((c) => {
        console.log(c.title)
    });

    let ans=data.filter((c)=>{
        return c.price>=100
    })
    console.log("")
    console.log("Product above 100$ :")
    console.log("")
    console.log(ans)
    console.log("")

    console.log("Electronics Product:")
    console.log("")

    let ans1=data.filter((c)=>{
        return c.category=="electronics";
    })
    console.log(ans1)

    let ans3=data.reduce((a,c)=>{
        return a+c.price;
    },0)
    console.log("Total Price :",ans3)
    console.log("")

    // FIXED: .map() always returns a non-empty array, and any array is "truthy" —
    // so if(ans4) was ALWAYS true no matter what prices actually were.
    // .some() returns one real true/false instead.
    let ans4=data.some((c)=>{
        return c.price>=500
    })
    if(ans4){
        console.log("Any product above 500$ : true")
    }else{
        console.log("Any product above 500$ : false")
    }
    console.log("")

    // FIXED: same bug — .every() gives one real true/false,
    // and this now checks ans5, not ans4 again.
    let ans5=data.every((c)=>{
        return c.price>=1
    })
    if(ans5){
        console.log("All product above 1$ : true")
    }else{
        console.log("All product above 1$ : false")
    }
    console.log("")

    let sr=data.sort((a,b)=>{
        return b.price-a.price;
    })
    console.log("Product Highest to lowest:")
    console.log(sr)
})
}