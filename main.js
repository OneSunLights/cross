// Игра: крестики нолики
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
