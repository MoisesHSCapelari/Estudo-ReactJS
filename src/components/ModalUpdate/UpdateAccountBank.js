import React, { useState } from "react";
import Modal from "react-modal";
import "../../assets/styles/modalStyle.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const CreateAccountSchemma = yup.object().shape({
  CodeBank: yup.string().required('Banco não informado'),
  typeAccount: yup.string().required('Tipo de conta não informada'),
  numberAccount:yup.number().required('Numero da conta não informada').integer(),
  digitAccount:yup.number().required('Digito da conta não informada').integer(),
  name: yup.string().required('Titular da conta não informado'),
  });
export default function UpdateAccountBank() {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(CreateAccountSchemma)
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
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
        <i className="fas fa-pencil-alt mr-1"></i> 
           Editar
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
            <h2>Edtiar <b>Conta</b></h2>
            <button type="button" onClick={closeModal} className="btnClose">
              X
            </button>
          </div>
          <br />
          <hr />
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" text-center mb-3 font-bold text-red-500">
              <p className="mb-1 ">{errors.CodeBank?.message}</p>
              <p className="mb-1 ">{errors.typeAccount?.message}</p>
              <p className="mb-1 ">{errors.numberAccount?.message}</p>
              <p className="mb-1 ">{errors.digitAccount?.message}</p>
              <p className="mb-1 ">{errors.name?.message}</p>
            </div>
            <div className="flex">
              <div className="mr-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  Banco
                </label>
                <select
                  {...register("CodeBank")}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                >
                  <option></option>
                  <option>237 - Bradesco</option>
                  <option>104 - Caixa economica Federal</option>
                </select>
              </div>
              <div className="mb-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  Tipo da Conta
                </label>
                <select
                  {...register("typeAccount")}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                >
                  <option></option>
                  <option>Conta Gerencial</option>
                  <option>Conta Corrente</option>
                  <option>Conta Poupança</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <div className="mr-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  Número da Conta
                </label>
                <input
                  {...register("numberAccount")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="1002998"
                />
              </div>
              <div className="mb-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  Digito da Conta
                </label>
                <input
                  {...register("digitAccount")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="8"
                />
              </div>
            </div>
            <div className="w-full">
              <label
                className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                htmlFor="grid-password"
              >
                Titular da Conta
              </label>
              <input
                {...register("name")}
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Jhon Jones"
              />
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
