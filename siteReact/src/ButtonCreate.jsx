import React from "react";

function ButtonCreate() {
    function click(){
      alert('Você criou um item');
    } 
  
    return (
      <button
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor:'green', color:"white" }}
        onClick={()=>click()}
      >
        Criar itens
      </button>
    );
  }
export default ButtonCreate;