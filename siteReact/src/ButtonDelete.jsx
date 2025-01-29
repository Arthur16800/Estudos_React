import React from "react";

function ButtonDelete() {
    function click(){
      alert('Você deletou um item');
    } 
  
    return (
      <button
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor:'red', color:"white"}}
        onClick={()=>click()}
      >
        Deletar itens
      </button>
    );
  }
export default ButtonDelete;