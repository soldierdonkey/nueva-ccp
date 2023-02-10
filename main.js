function addChemical(a, b, correct){
    id = {cation : cation_list[a], anion : anion_list[b]}
    id = calculateCharge(id)
    let row = document.createElement("div")
    row.classList.add("row")
    let box_l = document.createElement("div")
    box_l.classList.add("box")
    box_l.classList.add("l")
    let box_r = document.createElement("div")
    box_r.classList.add("box")
    box_r.classList.add("r")
    let box_l_node = document.createTextNode(`${id.cation.name.long} ${id.anion.name.long}`)
    let box_r_cation = document.createTextNode(`${id.cation.name.short}`)
    let box_r_cation_count_wrapper = document.createElement("sub")
    let box_r_cation_count = document.createTextNode(`${id.cation.count == 1 ? "" : id.cation.count}`)
    let box_r_cation_charge_wrapper = document.createElement("sup")
    let box_r_cation_charge = document.createTextNode(`+${id.cation.charge == 1 ? "" : id.cation.charge}`)
    let box_r_anion = document.createTextNode(`${id.anion.name.short}`)
    let box_r_anion_count_wrapper = document.createElement("sub")
    let box_r_anion_count = document.createTextNode(`${id.anion.count == 1 ? "" : id.anion.count}`)
    let box_r_anion_charge_wrapper = document.createElement("sup")
    let box_r_anion_charge = document.createTextNode(`-${id.anion.charge == 1 ? "" : id.anion.charge}`)
    box_r_cation_count_wrapper.appendChild(box_r_cation_count)
    box_r_cation_charge_wrapper.appendChild(box_r_cation_charge)
    box_r_anion_count_wrapper.appendChild(box_r_anion_count)
    box_r_anion_charge_wrapper.appendChild(box_r_anion_charge)
    box_l.appendChild(box_l_node)
    box_r.appendChild(box_r_cation)
    box_r.appendChild(box_r_cation_count_wrapper)
    // box_r.appendChild(box_r_cation_charge_wrapper)
    box_r.appendChild(box_r_anion)
    box_r.appendChild(box_r_anion_count_wrapper)
    // box_r.appendChild(box_r_anion_charge_wrapper)
    row.appendChild(box_l)
    row.appendChild(box_r)
    if(correct == true) {
        row.innerHTML+=yes
    }
    else {
        row.innerHTML+=no
    }
    document.getElementById("data").appendChild(row)
}
function add_formula(a, b){
    id = {cation : cation_list[a], anion : anion_list[b]}
    id = calculateCharge(id)
    let row = document.createElement("div")
    row.classList.add("row")
    let box_l = document.createElement("div")
    box_l.classList.add("box")
    box_l.classList.add("l")
    let box_r = document.createElement("div")
    box_r.classList.add("box")
    box_r.classList.add("r")
    let box_l_node = document.createTextNode(`??? ???`)
    let box_r_cation = document.createTextNode(`${id.cation.name.short}`)
    let box_r_cation_count_wrapper = document.createElement("sub")
    let box_r_cation_count = document.createTextNode(`${id.cation.count == 1 ? "" : id.cation.count}`)
    let box_r_cation_charge_wrapper = document.createElement("sup")
    let box_r_cation_charge = document.createTextNode(`+${id.cation.charge == 1 ? "" : id.cation.charge}`)
    let box_r_anion = document.createTextNode(`${id.anion.name.short}`)
    let box_r_anion_count_wrapper = document.createElement("sub")
    let box_r_anion_count = document.createTextNode(`${id.anion.count == 1 ? "" : id.anion.count}`)
    let box_r_anion_charge_wrapper = document.createElement("sup")
    let box_r_anion_charge = document.createTextNode(`-${id.anion.charge == 1 ? "" : id.anion.charge}`)
    box_r_cation_count_wrapper.appendChild(box_r_cation_count)
    box_r_cation_charge_wrapper.appendChild(box_r_cation_charge)
    box_r_anion_count_wrapper.appendChild(box_r_anion_count)
    box_r_anion_charge_wrapper.appendChild(box_r_anion_charge)
    box_l.appendChild(box_l_node)
    box_r.appendChild(box_r_cation)
    box_r.appendChild(box_r_cation_count_wrapper)
    // box_r.appendChild(box_r_cation_charge_wrapper)
    box_r.appendChild(box_r_anion)
    box_r.appendChild(box_r_anion_count_wrapper)
    // box_r.appendChild(box_r_anion_charge_wrapper)
    row.appendChild(box_l)
    row.appendChild(box_r)
    row.innerHTML += undecided
    document.getElementById("data").appendChild(row)
    prev = row
}
function add_name(a, b){
    id = {cation : cation_list[a], anion : anion_list[b]}
    id = calculateCharge(id)
    let row = document.createElement("div")
    row.classList.add("row")
    let box_l = document.createElement("div")
    box_l.classList.add("box")
    box_l.classList.add("l")
    let box_r = document.createElement("div")
    box_r.classList.add("box")
    box_r.classList.add("r")
    let box_l_node = document.createTextNode(`${id.cation.name.long} ${id.anion.name.long}`)
    let box_r_cation = document.createTextNode(`??`)
    let box_r_cation_count_wrapper = document.createElement("sub")
    let box_r_cation_count = document.createTextNode(`?`)
    let box_r_cation_charge_wrapper = document.createElement("sup")
    let box_r_cation_charge = document.createTextNode(`+?`)
    let box_r_anion = document.createTextNode(`??`)
    let box_r_anion_count_wrapper = document.createElement("sub")
    let box_r_anion_count = document.createTextNode(`?`)
    let box_r_anion_charge_wrapper = document.createElement("sup")
    let box_r_anion_charge = document.createTextNode(`-?`)
    box_r_cation_count_wrapper.appendChild(box_r_cation_count)
    box_r_cation_charge_wrapper.appendChild(box_r_cation_charge)
    box_r_anion_count_wrapper.appendChild(box_r_anion_count)
    box_r_anion_charge_wrapper.appendChild(box_r_anion_charge)
    box_l.appendChild(box_l_node)
    box_r.appendChild(box_r_cation)
    box_r.appendChild(box_r_cation_count_wrapper)
    // box_r.appendChild(box_r_cation_charge_wrapper)
    box_r.appendChild(box_r_anion)
    box_r.appendChild(box_r_anion_count_wrapper)
    // box_r.appendChild(box_r_anion_charge_wrapper)
    row.appendChild(box_l)
    row.appendChild(box_r)
    row.innerHTML += undecided
    document.getElementById("data").appendChild(row)
    prev = row
}
function add_inp_for_formula(a, b){
    id = {cation : cation_list[a], anion : anion_list[b]}
    id = calculateCharge(id)
    let inp = {}
    inp.inp0 = document.getElementById("linp1")
    inp.inp1 = document.getElementById("linp2")
    inp.inp2 = document.getElementById("linp3")
    inp.inp3 = document.getElementById("linp4")
    real = Math.floor(Math.random()*4)
    let comp = [{a: -1, c: -1}, {a: -1, c: -1}, {a: -1, c: -1}, {a: -1, c: -1}]
    for(let i = 0; i<4; i++) {
        if(i == real){
            fid = JSON.parse(JSON.stringify(id))
        }
        else {
            fid = JSON.parse(JSON.stringify(id))
            do {
                console.log("no")
                fid.anion.count = Math.floor(Math.random()*3)+1
                fid.cation.count = Math.floor(Math.random()*3)+1
            } while (
                (
                (fid.anion.count == id.anion.count &&
                fid.cation.count == id.cation.count)
                ||
                (fid.anion.count == comp[0].a &&
                fid.cation.count == comp[0].c)
                ||
                (fid.anion.count == comp[1].a &&
                fid.cation.count == comp[1].c)
                ||
                (fid.anion.count == comp[2].a &&
                fid.cation.count == comp[2].c)
                ||
                (fid.anion.count == comp[2].a &&
                fid.cation.count == comp[2].c)
                ||
                (fid.anion.count == 2 &&
                fid.cation.count == 2)
                ||
                (fid.anion.count == 3 &&
                fid.cation.count == 3)
                )
            )
        }
        console.log("yes")
        comp[i].a = fid.anion.count
        comp[i].c = fid.cation.count
        let box_r = document.createElement("span")
        let box_r_cation = document.createTextNode(`${fid.cation.name.short}`)
        let box_r_cation_count_wrapper = document.createElement("sub")
        let box_r_cation_count = document.createTextNode(`${fid.cation.count == 1 ? "" : fid.cation.count}`)
        let box_r_cation_charge_wrapper = document.createElement("sup")
        let box_r_cation_charge = document.createTextNode(`+${fid.cation.charge == 1 ? "" : fid.cation.charge}`)
        let box_r_anion = document.createTextNode(`${fid.anion.name.short}`)
        let box_r_anion_count_wrapper = document.createElement("sub")
        let box_r_anion_count = document.createTextNode(`${fid.anion.count == 1 ? "" : fid.anion.count}`)
        let box_r_anion_charge_wrapper = document.createElement("sup")
        let box_r_anion_charge = document.createTextNode(`-${fid.anion.charge == 1 ? "" : fid.anion.charge}`)
        box_r_cation_count_wrapper.appendChild(box_r_cation_count)
        box_r_cation_charge_wrapper.appendChild(box_r_cation_charge)
        box_r_anion_count_wrapper.appendChild(box_r_anion_count)
        box_r_anion_charge_wrapper.appendChild(box_r_anion_charge)
        box_r.appendChild(box_r_cation)
        box_r.appendChild(box_r_cation_count_wrapper)
        box_r.appendChild(box_r_anion)
        box_r.appendChild(box_r_anion_count_wrapper)
        inp[`inp${i}`].innerHTML = ""
        inp[`inp${i}`].appendChild(box_r)
    }
}
function add_inp_for_name(a, b){
    id = {cation : cation_list[a], anion : anion_list[b]}
    id = calculateCharge(id)
    let inp = {}
    inp.inp0 = document.getElementById("linp1")
    inp.inp1 = document.getElementById("linp2")
    inp.inp2 = document.getElementById("linp3")
    inp.inp3 = document.getElementById("linp4")
    real = Math.floor(Math.random()*4)
    let comp = [{f: "", l: ""}, {f: "", l: ""}, {f: "", l: ""}, {f: "", l: ""}]
    for(let i = 0; i<4; i++) {
        let l = ""
        let f = ""
        if(i == real){
            f = id.cation.name.long
            l = id.anion.name.long
        }
        else {
            do {
                if(ranB()){
                    if(ranB()){
                        f = id.cation.name.fake
                        if(ranB()){
                            l = id.anion.name.fake
                        }
                        else {
                            l = id.anion.name.long
                        }
                    }
                    else {
                        f = id.cation.name.long
                        if(ranB()){
                            l = id.anion.name.fake
                        }
                        else {
                            l = id.anion.name.long
                        }
                    }
                }
                else {
                    if(ranB()){
                        l = id.cation.name.fake
                        if(ranB()){
                            f = id.anion.name.fake
                        }
                        else {
                            f = id.anion.name.long
                        }
                    }
                    else {
                        l = id.cation.name.long
                        if(ranB()){
                            f = id.anion.name.fake
                        }
                        else {
                            f = id.anion.name.long
                        }
                        }
                    }
                }
            while (
                (f == id.cation.name.long && 
                l == id.anion.name.long)
                ||
                (f == comp[0].f &&
                l == comp[0].l)
                ||
                (f == comp[1].f &&
                l == comp[1].l)
                ||
                (f == comp[2].f &&
                l == comp[2].l)
                ||
                (f == comp[3].f &&
                l == comp[3].l)
            )
        }
        comp[i].f = f
        comp[i].l = l
        let box_l = document.createElement("span")
        let box_l_node = document.createTextNode(`${f} ${l}`)
        box_l.appendChild(box_l_node)
        inp[`inp${i}`].innerHTML = ""
        inp[`inp${i}`].appendChild(box_l)
    }
}

function ranB () {
    return Math.random() > 0.5
}

class Ele {
    constructor (name_long, name_short, name_fake, EN, metal, charge) {
        this.name = {
            short : name_short,
            long : name_long,
            fake : name_fake
        }
        this.EN = EN
        this.metal = metal
        this.charge = charge
    }
}

const cation_list = [
    new Ele("Hydrogen", "H", "Hydride", 2.2, false, 1),
    new Ele("Lithium", "Li", "Lithide", 0.98, true, 1), new Ele("Beryllium", "Be", "Beryllide", 1.57, true, 2), new Ele("Boron", "B", "Boride", 2.04, true, 3),
    new Ele("Sodium", "Na", "Sodide", 0.93, true, 1), new Ele("Magnesium", "Mg", "Magneside", 1.31, true, 2), new Ele("Aluminium", "Al", "Aluminide", 1.61, true, 3),
    new Ele("Potassium", "K", "Potasside", 0.82, true, 1), new Ele("Calcium", "Ca", "Calcide", 1.0, true, 2), new Ele("Gallium", "Ga", "Gallide", 1.81, true, 3),
    new Ele("Rubidium", "Rb", "Ribididide", 0.82, true, 1), new Ele("Strontium", "Sr", "Strontide", 0.95, true, 2), new Ele("Indium", "In", "Indide", 1.78, true, 3),
    new Ele("Caesium", "Cs", "Caeside", 0.79, true, 1), new Ele("Barium", "Ba", "Baride", 0.89, true, 2), new Ele("Thalium", "Tl", "Thalide", 1.62, true, 3),
]
const anion_list = [
    new Ele("Nitride", "N", "Nitrogen", 3.04, false, 3), new Ele("Oxide", "O", "Oxygen", 3.44, false, 2), new Ele("Fluoride", "F", "Flourine", 3.98, false, 1),
    new Ele("Phosphide", "P", "Phosphorus", 2.19, false, 3), new Ele("Sulphide", "S", "Sulpher", 2.58, false, 2), new Ele("Chloride", "Cl", "Chlorine", 3.16, false, 1),
    new Ele("Arsenide", "As", "Arsenic", 2.18, false, 3), new Ele("Selenide", "Se", "Selenium", 2.55, false, 2), new Ele("Bromide", "Br", "Bromine", 2.96, false, 1),
    new Ele("Antimonide", "Sb", "Antimony", 2.05, false, 3), new Ele("Telleride", "Te", "Tellerium", 2.1, false, 2), new Ele("Iodide", "I", "Iodine", 2.66, false, 1),
    new Ele("Bismide", "Bi", "Bismuth", 2.02, true, 3), new Ele("Polonide", "Po", "Polonium", 2, true, 2), new Ele("Astatide", "As", "Astatine", 2.2, false, 1)
]

function calculateCharge(id) {
    var table = [
        null,
        [null, [1, 1], [2, 1], [3, 1]],
        [null, [1, 2], [1, 1], [3, 2]],
        [null, [1, 3], [2, 3], [1, 1]],
    ]
    id.cation.count = table[id.cation.charge][id.anion.charge][0]
    id.anion.count = table[id.cation.charge][id.anion.charge][1]
    return id
}
function generate (u1, u2){
    let g1 = Math.floor(Math.random()*15)
    let g2 = Math.floor(Math.random()*14)
    while(g1 == u1){
        g1 = Math.ceil(Math.random()*15)
    }
    while(g2 == u2){
        g2 = Math.ceil(Math.random()*14)
    }
    if((anion_list[g2].EN - cation_list[g1].EN) <= 1.5){
        return generate(u1, u2)
    }
    if(anion_list[g2].metal == cation_list[g1].metal){
        return generate(u1, u2)
    }
    return [g1, g2]
}
/************************/
/**********GAME**********/
/************************/
const no = `<div class="rr n">X</div>`
const yes = `<div class="rr y">✓</div>`
const undecided = `<div class="rr y" style="font-size: 20px; background-color: brown;"><span style="left: -2px; position: relative;">✓/X</span></div>`
var timer = setInterval(update(), 1)
var real = -1
var run = false
document.getElementById("START").onclick = () => {
    document.getElementById("START").remove()
    run = true
    incdate = new Date()
    if(ranB()) {
        x = generate(x[0], x[1]);
        add_inp_for_name(...x);
        add_formula(...x)
    }
    else {
        x = generate(x[0], x[1]);
        add_inp_for_formula(...x);
        add_name(...x)
    }
}
var inc = 15000
var dif = 0
var incdate = new Date()
var start = new Date()
timer = setInterval(update, 5)
function update() {
    if(run == true) {
        diff = new Date() - incdate
        inc-=diff
        if(inc < 1){
            game()
            inc = 15000
        }
        document.getElementById("time").style.setProperty("--progress-color", `rgb(${(15000-inc)/120}, 0, 0)`)
        document.getElementById("time").value = inc
        incdate = new Date()
    }
}
var fails = 0
var sucess = 0
var prev = null
var x = generate()
function game() {
    let correct = false
    var inp = {}
    inp.inp0 = document.getElementById("inp1")
    inp.inp1 = document.getElementById("inp2")
    inp.inp2 = document.getElementById("inp3")
    inp.inp3 = document.getElementById("inp4")
    for(let i = 0; i<4; i++) {
        if(inp[`inp${i}`].checked){
            if(i == real){
                sucess++
                correct = true
            }
        }
        inp[`inp${i}`].checked = false
    }
    prev.remove()
    addChemical(x[0], x[1], correct)
    if(correct == false){fails++
    
    }
    if(ranB()) {
        x = generate(x[0], x[1]);
        add_inp_for_name(...x);
        add_formula(...x)
    }
    else {
        x = generate(x[0], x[1]);
        add_inp_for_formula(...x);
        add_name(...x)
    }
}