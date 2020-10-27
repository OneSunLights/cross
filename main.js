let gameOX = {
    spot: 0,
    result: "",
    grid: document.getElementById("grid"),
    materialMain: document.getElementById("material"),
    modalWrapper: document.getElementById("modal-wrapper"),
    cover: document.getElementById("cover"),
    modalClose: document.getElementById("modal-popup__close"),
    gridLogic: function(){
        _self = this;
        this.grid.addEventListener("click", function(e){
            if(e.target.className == "grid-element"){
                if((_self.spot % 2) === 0)
                    e.target.innerHTML = "X";
                else{
                    e.target.innerHTML = "0";
                }
                _self.spot = _self.spot + 1;
                console.log(typeof _self.spot);
                _self.verify();
            }
        })
    },
    verify: function(){
        const grids = document.getElementsByClassName("grid-element");
        const fields = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(i=0;i<fields.length;i++){
            if(grids[fields[i][0]].innerHTML == "X" && grids[fields[i][1]].innerHTML == "X" && grids[fields[i][2]].innerHTML == "X"){
                _self.result = "1 игрок";
                _self.prepareResult(_self.result);
            }else if (grids[fields[i][0]].innerHTML == "0" && grids[fields[i][1]].innerHTML == "0" && grids[fields[i][2]].innerHTML == "0"){
                _self.result = "2 игрок";
                _self.prepareResult(_self.result);
            }
        }
    },
    prepareResult: function(awardee){
        _self.materialMain.innerHTML = "Победил "+awardee;
        _self.modalWrapper.style.display = "block";
    },
    modalCloseF: function(){
        _self.modalWrapper.style.display = "none";
        location.reload();
    },
    modalEvent: function(){
        _self.cover.addEventListener("click", _self.modalCloseF);
        _self.modalClose.addEventListener("click", _self.modalCloseF); 
    }

}
gameOX.gridLogic();
gameOX.modalEvent();

// const grid = document.getElementById("grid");
// let spot = 0;
// let result = "";
// const materialMain = document.getElementById("material");
// const modalWrapper = document.getElementById("modal-wrapper");
// const cover = document.getElementById("cover");
// const modalClose = document.getElementById("modal-popup__close");

// grid.addEventListener("click", function(e){
//     if(e.target.className == "grid-element"){
//         spot % 2 === 0 ? e.target.innerHTML = "X" : e.target.innerHTML = 0;
//         spot++;
//         verify();
//     }
// });

// const verify = function(){
//     const grids = document.getElementsByClassName("grid-element");
//     const fields = [
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],
//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
//         [0,4,8],
//         [2,4,6]
//     ];
//     for(i=0;i<fields.length;i++){
//         if(grids[fields[i][0]].innerHTML == "X" && grids[fields[i][1]].innerHTML == "X" && grids[fields[i][2]].innerHTML == "X"){
//             result = "1 игрок";
//             prepareResult(result);
//         }else if (grids[fields[i][0]].innerHTML == "0" && grids[fields[i][1]].innerHTML == "0" && grids[fields[i][2]].innerHTML == "0"){
//             result = "2 игрок";
//             prepareResult(result);
//         }
//     }
// }

// const prepareResult = function(awardee){
//     materialMain.innerHTML = "Победил "+awardee;
//     modalWrapper.style.display = "block";
// };

// let modalCloseF = function(){
//     modalWrapper.style.display = "none";
//     location.reload();
// };
// cover.addEventListener("click", modalCloseF);
// modalClose.addEventListener("click", modalCloseF);
// // console.log(grid);