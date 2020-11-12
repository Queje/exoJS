const arn1 = "UUACGCAGUAGA";
const arn2 = "CCGUCGUUGCGCUACAGC";
const arn3 = "CCUCGCCGGUACUUCUCG";


function translate(arn) {
    console.log("L'ARN est traduit en protéine :")

    let preProt = arn.match(/.{1,3}/g);
    console.log(preProt);

    let prot = [];

    preProt.forEach(element => {
        if (element == "UCU" || element == "UCC" || element == "UCA" || element == "UCG" || element == "AGU" || element == "AGC") {
            prot.push("Sérine");
        } else if (element == "CCU" || element == "CCC" || element == "CCA" || element == "CCG") {
            prot.push("Proline");
        } else if (element == "UUA" || element == "UUG") {
            prot.push("Leucine");
        } else if (element == "UUU" || element == "UUC") {
            prot.push("Phénylalanine");
        } else if (element == "CGU" || element == "CGC" || element == "CGA" || element == "CGG" || element == "AGA" || element == "AGG") {
            prot.push("Arginine");
        } else if (element == "UAU" || element == "UAC") {
            prot.push("Tyrosine");
        } 
    });

    console.log(prot.join('-'));

}

translate(arn1);

translate(arn2);

translate(arn3);


