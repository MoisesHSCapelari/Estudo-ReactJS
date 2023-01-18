import React, { useState } from "react";
import Modal from "react-modal";
import "../../assets/styles/modalStyle.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const CreateBankSchemma = yup.object().shape({
  code: yup.string().required('Codigo FEBRABAN não informado'),
  nameBank: yup
    .string()
    .required('Nome do banco não informado'),
  });
export default function CreateBank() {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(CreateBankSchemma)
      });
      const onSubmit = data => console.log(data);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
        <i className="fas fa-plus mr-1"></i> 
           Cadastrar Banco
        </button>
      </div>
      <div className="Container">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <div className="modalHeader">
            <h2>Cadastrar Banco</h2>
            <button type="button" onClick={closeModal} className="btnClose">
              X
            </button>
          </div>
          <br />
          <hr />
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" text-center mb-3 font-bold text-red-500">
              <p className="mb-1 ">{errors.code?.message}</p>
              <p className="mb-1 ">{errors.nameBank?.message}</p>
            </div>
            <div className="flex">
              <div className="mr-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  Codigo FEBRABAN
                </label>
                <input
                  {...register("code")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="237"
                />
              </div>
              <div className="mb-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  Titulo do Banco
                </label>
                <input
                  {...register("nameBank")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Bradesco"
                />
              </div>
            </div>
            <div>
            <br />
            <hr />
            <br />
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={closeModal}
                className="bg-blueGray-500 text-black active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Confirmar
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
}
