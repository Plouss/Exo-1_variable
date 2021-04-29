    let a = 1;
    let b = 2;
    let c = 3; 

    let temp;

    temp = a;
    a = b;
    b = c;
    c = temp;

// EXO 1
    let a = 1;
    let b = 2;
    let c = 3;
    let d = 4; 

    temp = a; //1
    a = d; //4
    d = temp;
    temp = b;
    b = c;//3
    c = temp; //2

//EXO 2
    let a = 1; // 2
    let b = 2; // 3
    let c = 3; // 4
    let d = 4; // 1

    temp = a;
    a = b;
    b = c;
    c = d;
    d = temp;

//EXO 3
    let tableau = [1, 2, 3, 4];

    temp = tableau[0];
    tableau[0] = tableau[3];
    tableau[3] = temp;
    temp = tableau[1];
    tableau[1] = tableau[2];
    tableau[2] = temp;

//EXO 4
    let a = 1 // 4
    let b = 2 // 5
    let c = 3 // 1
    let d = 4 // 2
    let e = 5 // 6
    let f = 6 // 3

    b = temp;
    b = e;
    e = f;
    f = c;
    c = a;
    a = d;
    d = temp;
    console.log(a,b,c,d,e,f);


    




    
    



